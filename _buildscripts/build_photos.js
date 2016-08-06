var Airtable = require('airtable');
var yaml     = require('js-yaml');
var fs       = require('fs');

function loadConfig() {
  var ymlFile = fs.readFileSync('_config.yml', 'utf8');
  return yaml.load(ymlFile);
}

var config = loadConfig().airtable;
var jsonfile = require('jsonfile');
var filePhotos = './_data/photos.json';
var photos = new Airtable({ apiKey: config.apikey }).base(config.photos);
var photosJson = [];

 photos('photos').select({
        maxRecords: 100,
      //sort
        filterByFormula: "published",
        view: "Main View"
      //Formula to how to get data
      // help https://support.airtable.com/hc/en-us/articles/203255215-Formula-Field-Reference

    }).eachPage(function page(records, fetchNextPage) {
        records.forEach(function(record) {
          photosJson.push(record._rawJson.fields);
        });
        fetchNextPage();
    }, function done(error) {
      jsonfile.writeFile(filePhotos, photosJson, function (err) {
      });
    });