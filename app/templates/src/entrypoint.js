/** @jsx React.DOM */

var React = require('react');

var MyComponent = require('./index');

// For apps this would be your main router. If you are using
// a server-rendering framework you could pass it some data
// via props. For an individual component this should be a
// simple example.

React.renderComponent(<MyComponent name="world" />, document.body);
