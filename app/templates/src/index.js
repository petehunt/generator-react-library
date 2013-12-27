/** @jsx React.DOM */
var React = require('react');
var requireStylesheet = require('stylesheets').requireStylesheet;

var MyComponent = React.createClass({
  componentWillMount: function() {
    requireStylesheet(process.env.STATIC_ROOT + 'MyComponent.css');
  },

  render: function() {
    return <span className="MyComponent">Hello, {this.props.name}!</span>;
  }
});

module.exports = MyComponent;