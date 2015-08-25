var React = require('react');
var ReactRouter = require('react-router');
var HashHistory = require('react-router/lib/hashhistory');
var Router = ReactRouter.Router;
var Route = ReactRouter.Route;

var Main = require('./components/main');
var Feed = require('./components/feed');

var routes = (
  <Router history={new HashHistory}>
    <Route path="/" component={Main} />
    <Route path="feed" component={Feed} />
  </Router>
);  

module.exports = routes;
