var path = require('path');
var helpers = require('yeoman-generator').test;

helpers.testDirectory(path.join(__dirname, 'temp'), function(err) {
  if (err) {
    console.log(err);
  }

  var app = helpers.createGenerator('react-library:app', [
    '../../app',
  ]);
  app.options['skip-install'] = true;
  app.run();
});
