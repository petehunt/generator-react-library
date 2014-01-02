/*global describe, beforeEach, it*/
'use strict';

var path    = require('path');
var helpers = require('yeoman-generator').test;


describe('react-library generator', function() {
  beforeEach(function(done) {
    helpers.testDirectory(path.join(__dirname, 'temp'), function(err) {
      if (err) {
        return done(err);
      }

      this.app = helpers.createGenerator('react-library:app', [
        '../../app',
      ]);
      this.app.options['skip-install'] = true;
      this.app.on('method', function(methodName) {
        if (methodName === 'npmInit') {
          setTimeout(function() {
            // sending line feeds !== pressing enter
            process.stdin.write('\n');
            process.stdin.write('\n');
            process.stdin.write('\n');
            process.stdin.write('ha\n');
          }, 1000);
        }
      })
      done();
    }.bind(this));
  });

  it('creates expected files', function(done) {
    var expected = [
      '.gitignore',
      'package.json',
      'README.md',
      'src/index.js',
      'static/MyComponent.css'
    ];

    this.app.run({}, function() {
      helpers.assertFiles(expected);
      done();
    });
  });
});
