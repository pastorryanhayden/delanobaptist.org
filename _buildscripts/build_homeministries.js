var Airtable = require('airtable');
var yaml     = require('js-yaml');
var fs       = require('fs');

function loadConfig() {
  var ymlFile = fs.readFileSync('_config.yml', 'utf8');
  return yaml.load(ymlFile);
}

var config = loadConfig().airtable;
var jsonfile = require('jsonfile');
var filehomeMinistries = './_data/homeministries.json';
var homeministries = new Airtable({ apiKey: config.apikey }).base(config.ministries);
var homeministriesJson = [];

homeministries('Ministries').select({
        maxRecords: 3,
      //sort
        filterByFormula: "AND(published, show_on_home_page)",
        sort: [{field: "name", direction: "asc"}],
      //Formula to how to get data
      // help https://support.airtable.com/hc/en-us/articles/203255215-Formula-Field-Reference

    }).eachPage(function page(records, fetchNextPage) {
        records.forEach(function(record) {
          homeministriesJson.push(record._rawJson.fields);
        });
        fetchNextPage();
    }, function done(error) {
      jsonfile.writeFile(filehomeMinistries, homeministriesJson, function (err) {
      });
    });
