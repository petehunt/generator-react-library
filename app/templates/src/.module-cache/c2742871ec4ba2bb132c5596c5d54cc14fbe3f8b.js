/** @jsx React.DOM */
var React = require('react');
var componentCSS = require('statics/component.css');

var MyComponent = React.createClass({displayName: 'MyComponent',displayName: 'MyComponent',
  render: function() {
    return React.DOM.span( {className:componentCSS['.banner']}, "Hello, ", this.props.name,"!");
  }
});

module.exports = MyComponent;
