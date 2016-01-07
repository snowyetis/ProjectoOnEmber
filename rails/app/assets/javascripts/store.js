App.Store = DS.Store.etend({});
App.ApplicationAdapter = DS.ActiveModelAdapter.extend({});


DS.RESTAdapter.reopen({
  namespace: 'api'
})
