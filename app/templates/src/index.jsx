/** @jsx React.DOM */
var React = require('react');
var componentCSS = require('statics/component.css');

var MyComponent = React.createClass({
  render: function() {
    return <span className={componentCSS['.banner']}>Hello, {this.props.name}!</span>;
  }
});

// test
React.renderComponent(<MyComponent name="world" />, document.body);
// useless right now
module.exports = MyComponent;
