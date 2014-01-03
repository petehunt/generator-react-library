/*global describe, beforeEach, it*/
'use strict';

var nexpect = require('nexpect');
var path    = require('path');
var helpers = require('yeoman-generator').test;

describe('react-library generator', function() {
  beforeEach(function(done) {

    // helpers.testDirectory(path.join(__dirname, 'temp'), function(err) {
    //   if (err) {
    //     return done(err);
    //   }

    //   this.app = helpers.createGenerator('react-library:app', [
    //     '../../app',
    //   ]);
    //   this.app.options['skip-install'] = true;
    //   done();
    // }.bind(this));

    this.timeout(15000);
    nexpect.spawn('node ' + path.join(__dirname, '_createTestFolder.js'), {stripColors: true})
      .wait('name:')
      .sendline('temp-app')
      .sendline('')
      .sendline('')
      .expect('keywords:')
      .sendline('')
      .sendline('')
      .sendline('')
      .expect('About to write to')
      .sendline('')
      .run(function(err) {
        if (err) {
          return done(err);
        }
        done();
      });
  });

  it('creates expected files', function(done) {
    var expected = [
      '.gitignore',
      'package.json',
      'README.md',
      'src/index.js',
      'static/MyComponent.css'
    ].map(function(filePath) {
      return path.join(__dirname, 'temp', filePath);
    });

    // this.app.run(function() {
      helpers.assertFiles(expected);
      // done()
    // });
  });
});
