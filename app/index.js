'use strict';
var fs = require('fs');
var util = require('util');
var path = require('path');
var yeoman = require('yeoman-generator');

var ReactLibraryGenerator = module.exports = function ReactLibraryGenerator(args, options, config) {
  yeoman.generators.Base.apply(this, arguments);

  this.on('end', function () {
    this.installDependencies({
      skipInstall: options['skip-install'],
      bower: false,
      callback: function() {
        console.log('\x1B[2J');
        console.log(fs.readFileSync('README.md', {encoding: 'utf8'}));
      }.bind(this)
    });
  });

  this.pkg = require(path.join(__dirname, '../package.json'));
};

util.inherits(ReactLibraryGenerator, yeoman.generators.Base);

ReactLibraryGenerator.prototype.app = function app() {
  this.mkdir('src');
  this.mkdir('lib');
  this.mkdir('static');
  this.mkdir('build');

  this.appname = path.basename(process.cwd());
  this.template('_package.json', 'package.json');
  this.template('_README.md', 'README.md');
  this.copy('npmignore', '.npmignore');
  this.copy('gitignore', '.gitignore');
  this.copy('src/index.js', 'src/index.js');
  this.copy('src/index.spec.js', 'src/index.spec.js');
  this.copy('src/entrypoint.js', 'src/entrypoint.js');
  this.copy('static/MyComponent.css', 'static/MyComponent.css');
};

ReactLibraryGenerator.prototype.npmInit = function npmInit() {
  var done = this.async();
  this.spawnCommand('npm', ['init'], done).on('exit', done);
};
