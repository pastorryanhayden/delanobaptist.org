var Airtable = require('airtable');
var yaml     = require('js-yaml');
var fs       = require('fs');

function loadConfig() {
  var ymlFile = fs.readFileSync('_config.yml', 'utf8');
  return yaml.load(ymlFile);
}

var config = loadConfig().airtable;
var jsonfile = require('jsonfile');
var fileBlog = './_data/blog.json';
var blog = new Airtable({ apiKey: config.apikey }).base(config.blog);
var blogJson = [];

blog('Posts').select({
        maxRecords: 100,
      //sort
        sort: [{field: "date_added", direction: "desc"}],
        filterByFormula: "published",
      //Formula to how to get data
      // help https://support.airtable.com/hc/en-us/articles/203255215-Formula-Field-Reference

    }).eachPage(function page(records, fetchNextPage) {
        records.forEach(function(record) {
          blogJson.push(record._rawJson.fields);
        });
        fetchNextPage();
    }, function done(error) {
      jsonfile.writeFile(fileBlog, blogJson, function (err) {
      });
    });