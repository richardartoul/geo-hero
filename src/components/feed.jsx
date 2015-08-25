var React = require('react');
var ReactRouter = require('react-router');
var Link = ReactRouter.Link;


var Feed = React.createClass({
  render: function() {
    return (
      <div>
        <h2 className="text-center">
          This is the feed page. The router is working!
        </h2>
      </div>
    );
  }
});

module.exports = Feed;

