/** @jsx React.DOM */

var React = require('react');
var stylesheets = require('stylesheets');
var MyComponent = require('./index');

describe('MyComponent', function() {
  it('should contain the string MyComponent', function() {
    var done = false;

    runs(function() {
      var headMarkup = stylesheets.getHeadMarkupFor(function() {
        React.renderComponentToString(<MyComponent name="test" />, function(markup) {
          expect(markup.indexOf('MyComponent') > -1).toBe(true);
          expect(markup.indexOf('test') > -1).toBe(true);
          done = true;
        });
      });
      expect(headMarkup.length > 0).toBe(true);
    });

    waitsFor(function() { return done; });
  });
});