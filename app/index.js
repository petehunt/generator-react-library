'use strict';
var util = require('util');
var path = require('path');
var yeoman = require('yeoman-generator');


var ReactLibraryGenerator = module.exports = function ReactLibraryGenerator(args, options, config) {
  yeoman.generators.Base.apply(this, arguments);

  this.on('end', function () {
    this.installDependencies({ skipInstall: options['skip-install'], bower: false });
  });

  this.pkg = JSON.parse(this.readFileAsString(path.join(__dirname, '../package.json')));
};

util.inherits(ReactLibraryGenerator, yeoman.generators.Base);

ReactLibraryGenerator.prototype.app = function app() {
  this.mkdir('src');
  this.mkdir('lib');
  this.mkdir('static');

  this.appname = path.basename(process.cwd());
  this.template('_package.json', 'package.json');
  this.template('_README.md', 'README.md');
  this.copy('npmignore', '.npmignore');
  this.copy('gitignore', '.gitignore');
  this.copy('src/index.js', 'src/index.js');
  this.copy('src/index.spec.js', 'src/index.spec.js');
  this.copy('src/entrypoint.js', 'src/entrypoint.js');
};

ReactLibraryGenerator.prototype.npmInit = function npmInit() {
  var done = this.async();
  this.spawnCommand('npm', ['init'], done).on('exit', done);
};
