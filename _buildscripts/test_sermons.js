var Airtable = require('airtable');
var yaml     = require('js-yaml');
var fs       = require('fs');

function loadConfig() {
  var ymlFile = fs.readFileSync('_config.yml', 'utf8');
  return yaml.load(ymlFile);
}

var config = loadConfig().airtable;
var sermons = new Airtable({ apiKey: config.apikey }).base(config.sermons);

var updated = false;

 sermons('sermons').select({
  filterByFormula: "OR(IS_BEFORE(DATEADD(NOW(), -30, 'minutes'), CREATED_TIME()), IF(ISERROR(IS_BEFORE(DATEADD(NOW(), -30, 'minutes'), updated_at)), FALSE(),IS_BEFORE(DATEADD(NOW(), -30, 'minutes'), updated_at)))"
}).eachPage(function page(records, fetchNextPage) {
    records.forEach(function(record) {
      updated = true;
    });
    fetchNextPage();
}, function done(error) {
   console.log(updated);
});
