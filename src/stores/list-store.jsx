var Reflux = ('reflux');
var ListActions = require('../actions/list-actions');

var ListStore = Reflux.createStore({
  // Tells store what actions it should listen for
  listenables: [ListActions],
  // Store calls method that matches name of action when it occurs
  create: function() {

  },
  updateText: function() {

  },
  toggleComplete: function() {

  },
  toggleCompleteAll: function() {

  },
  destroy: function() {

  },
  destroyCompleted: function() {

  }
  triggerChange: function() {
    // Call the Reflux method 
    // this.trigger('change', /* data to listen for changes in*/);
  }
});

module.exports = ListStore;

