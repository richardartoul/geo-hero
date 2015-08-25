var Reflux = require('reflux');

var ListActions = Reflux.createActions({
  'create',
  'updateText',
  'toggleComplete',
  'toggleCompleteAll',
  'destroy',
  'destroyCompleted'
});

module.exports = ListActions;

