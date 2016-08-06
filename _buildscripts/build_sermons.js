var Airtable = require('airtable');
var yaml     = require('js-yaml');
var fs       = require('fs');

function loadConfig() {
  var ymlFile = fs.readFileSync('_config.yml', 'utf8');
  return yaml.load(ymlFile);
}

var config = loadConfig().airtable;
var jsonfile = require('jsonfile');
var filesermons = './_data/sermons.json';
var sermons = new Airtable({ apiKey: config.apikey }).base(config.sermons);
var sermonsJson = [];

 sermons('sermons').select({
        maxRecords: 100,
      //sort
        filterByFormula: "published",
        sort: [{field: "date", direction: "desc"}],
      //Formula to how to get data
      // help https://support.airtable.com/hc/en-us/articles/203255215-Formula-Field-Reference

    }).eachPage(function page(records, fetchNextPage) {
        records.forEach(function(record) {
          sermonsJson.push(record._rawJson.fields);
        });
        fetchNextPage();
    }, function done(error) {
      jsonfile.writeFile(filesermons, sermonsJson, function (err) {
      });
    });