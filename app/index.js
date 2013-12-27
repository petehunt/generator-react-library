'use strict';
var util = require('util');
var path = require('path');
var yeoman = require('yeoman-generator');


var ReactLibraryGenerator = module.exports = function ReactLibraryGenerator(args, options, config) {
  yeoman.generators.Base.apply(this, arguments);

  this.on('end', function () {
    this.installDependencies({ skipInstall: options['skip-install'] });
  });

  this.pkg = JSON.parse(this.readFileAsString(path.join(__dirname, '../package.json')));
};

util.inherits(ReactLibraryGenerator, yeoman.generators.Base);

ReactLibraryGenerator.prototype.app = function app() {
  this.mkdir('src');
  this.mkdir('lib');
  this.mkdir('static');

  this.copy('_package.json', 'package.json');
  this.copy('_bower.json', 'bower.json');
};

ReactLibraryGenerator.prototype.projectfiles = function projectfiles() {
  this.copy('editorconfig', '.editorconfig');
  this.copy('jshintrc', '.jshintrc');
};
