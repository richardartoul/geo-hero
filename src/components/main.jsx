var React = require('react');
var ReactRouter = require('react-router');
var Link = ReactRouter.Link;

var Header = require('./header');
var List = require('./list');

var ReactFire = require('reactfire');
var Firebase = require('firebase');
var rootUrl = 'https://flickering-torch-7513.firebaseio.com/';

var Main = React.createClass({
  mixins: [ ReactFire ],
  getInitialState: function() {
    return {
      items: {},
      loaded: false
    }
  },
  componentWillMount: function() {
    this.fb = new Firebase(rootUrl + 'items/');
    this.bindAsObject(this.fb, 'items');
    this.fb.on('value', this.handleDataLoaded);
  },
  render: function() {
    return (
      <Link to="/" className="row panel panel-default">
        <div className="col-md-8 col-md-offset-2">
          <h2 className="text-center">
            Geo Hero Want List
          </h2>
          <Header itemsStore={this.firebaseRefs.items} />
          <hr />
          <div className={"content " + (this.state.loaded ? 'loaded' : '')}>
            <List items={this.state.items} />
            {this.deleteButton()}
          </div>
        </div>
        <Link to="feed">
          <button
            type="button"
            className="btn btn-default feed-button"
            >
            Feed
          </button>
        </Link>
      </Link>
    );
  },
  deleteButton: function() {
    if (!this.state.loaded) {
      return;
    } else {
      return (
        <div className="text-center clear-complete">
          <hr />
          <button
            type="button"
            onClick={this.onDeleteDoneClick}
            className="btn btn-default"
            >
            Clear Places You Have Been
          </button>
        </div>
      );
    }
  },
  onDeleteDoneClick: function() {
    for (var key in this.state.items) {
      if (this.state.items[key].done === true) {
        this.fb.child(key).remove();
      }
    }
  },
  handleDataLoaded: function() {
    this.setState({loaded: true});
  }
});

module.exports = Main;



