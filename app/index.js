'use strict';
var fs = require('fs');
var util = require('util');
var path = require('path');
var yeoman = require('yeoman-generator');

var ReactLibraryGenerator = module.exports = function ReactLibraryGenerator(args, options, config) {
  yeoman.generators.Base.apply(this, arguments);

  this.on('end', function() {
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
  this.appname = path.basename(process.cwd());
  this.template('_package.json', 'package.json');
  this.template('_README.md', 'README.md');
  this.copy('npmignore', '.npmignore');
  this.copy('gitignore', '.gitignore');
  this.copy('index.html', 'index.html');
  this.copy('src/index.jsx', 'src/index.jsx');
  this.copy('test/index.spec.js', 'test/index.spec.js');
  this.copy('statics/component.css', 'statics/component.css');
};

ReactLibraryGenerator.prototype.npmInit = function npmInit() {
  var done = this.async();
  this.spawnCommand('npm', ['init'], done).on('exit', done);
};
