var Airtable = require('airtable');
var yaml     = require('js-yaml');
var fs       = require('fs');

function loadConfig() {
  var ymlFile = fs.readFileSync('_config.yml', 'utf8');
  return yaml.load(ymlFile);
}

var config = loadConfig().airtable;
var jsonfile = require('jsonfile');
var fileEvents = './_data/events.json';
var events = new Airtable({ apiKey: config.apikey }).base(config.events);
var eventsJson = [];

events('Church Events').select({
        maxRecords: 100,
      //sort
        filterByFormula: "AND(published, Future)",
        sort: [{field: "DateTime", direction: "desc"}],
      //Formula to how to get data
      // help https://support.airtable.com/hc/en-us/articles/203255215-Formula-Field-Reference

    }).eachPage(function page(records, fetchNextPage) {
        records.forEach(function(record) {
          eventsJson.push(record._rawJson.fields);
        });
        fetchNextPage();
    }, function done(error) {
      jsonfile.writeFile(fileEvents, eventsJson, function (err) {
      });
    });