var Airtable = require('airtable');
var yaml     = require('js-yaml');
var fs       = require('fs');

function loadConfig() {
  var ymlFile = fs.readFileSync('_config.yml', 'utf8');
  return yaml.load(ymlFile);
}

var config = loadConfig().airtable;
var jsonfile = require('jsonfile');
var fileMinistries = './_data/ministries.json';
var ministries = new Airtable({ apiKey: config.apikey }).base(config.ministries);
var ministriesJson = [];

ministries('Ministries').select({
        maxRecords: 100,
      //sort
        filterByFormula: "published",
        sort: [{field: "name", direction: "asc"}],
      //Formula to how to get data
      // help https://support.airtable.com/hc/en-us/articles/203255215-Formula-Field-Reference

    }).eachPage(function page(records, fetchNextPage) {
        records.forEach(function(record) {
          ministriesJson.push(record._rawJson.fields);
        });
        fetchNextPage();
    }, function done(error) {
      jsonfile.writeFile(fileMinistries, ministriesJson, function (err) {
      });
    });