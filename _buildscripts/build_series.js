var Airtable = require('airtable');
var yaml     = require('js-yaml');
var fs       = require('fs');

function loadConfig() {
  var ymlFile = fs.readFileSync('_config.yml', 'utf8');
  return yaml.load(ymlFile);
}

var config = loadConfig().airtable;
var jsonfile = require('jsonfile');
var fileseries = './_data/series.json';
var series = new Airtable({ apiKey: config.apikey }).base(config.series);
var seriesJson = [];

series('series').select({
        maxRecords: 100,
      //sort
        filterByFormula: "published",
        sort: [{field: "sermon_date", direction: "desc"}],
      //Formula to how to get data
      // help https://support.airtable.com/hc/en-us/articles/203255215-Formula-Field-Reference

    }).eachPage(function page(records, fetchNextPage) {
        records.forEach(function(record) {
          seriesJson.push(record._rawJson.fields);
          console.log('Retrieved ', record._rawJson.fields);
        });
        fetchNextPage();
    }, function done(error) {
      jsonfile.writeFile(fileseries, seriesJson, function (err) {
        console.error(err)
      });
      console.log(seriesJson);
    });