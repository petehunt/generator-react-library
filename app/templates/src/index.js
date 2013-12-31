/** @jsx React.DOM */
var React = require('react');
var requireStylesheet = require('stylesheets').requireStylesheet;

var MyComponent = React.createClass({
  componentWillMount: function() {
    // this call can be put outside of `componentWillMount`. Reason why it's
    // here:
    // - lazy loading
    // - makes server rendering work, as the style sheet should be injected for
    //   every request rather than at import time
    // - ^ consequently, makes tests work
    requireStylesheet(process.env.STATIC_ROOT + 'MyComponent.css');
  },

  render: function() {
    return <span className="MyComponent">Hello, {this.props.name}!</span>;
  }
});

module.exports = MyComponent;
