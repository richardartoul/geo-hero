var Reflux = ('reflux');
var ListActions = require('../actions/list-actions');

var ListStore = Reflux.createStore({
  // we use Reflux listenables to tell our store what actions it should listen for
  listenables: [ListActions],

  // here is where we create any methods we want this store to handle
  // the method name should match the action name we are receiving from ListActions 
  
  triggerChange: function() {
    // should call the Reflux method this.trigger('change', /* data to listen for changes in*/);
  }
});

module.exports = ListStore;

