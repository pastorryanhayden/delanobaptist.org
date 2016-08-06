var Airtable = require('airtable');
var yaml     = require('js-yaml');
var fs       = require('fs');

function loadConfig() {
  var ymlFile = fs.readFileSync('_config.yml', 'utf8');
  return yaml.load(ymlFile);
}

var config = loadConfig().airtable;
var jsonfile = require('jsonfile');
var filehomeseries = './_data/homeseries.json';
var homeseries = new Airtable({ apiKey: config.apikey }).base(config.series);
var homeseriesJson = [];

homeseries('Series').select({
        maxRecords: 100,
      //sort
        filterByFormula: 'AND(published, IF(title = "No Series", 0,1))',
        sort: [{field: "sermon_date", direction: "desc"}],
      //Formula to how to get data
      // help https://support.airtable.com/hc/en-us/articles/203255215-Formula-Field-Reference

    }).eachPage(function page(records, fetchNextPage) {
        records.forEach(function(record) {
          homeseriesJson.push(record._rawJson.fields);
        });
        fetchNextPage();
    }, function done(error) {
      jsonfile.writeFile(filehomeseries, homeseriesJson, function (err) {
      });
    });