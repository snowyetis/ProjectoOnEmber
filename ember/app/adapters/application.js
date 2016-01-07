import DS from 'ember-data';
import ActiveModelAdapter from 'active-model-adapter';
import DataAdapterMixin from 'ember-simple-auth/mixins/data-adapter-mixin';

export default ActiveModelAdapter.extend({
  namespace: 'api'
});

DS.JSONAPIAdapter.extend(DataAdapterMixin, {
  authorizer: 'authorizer:DeviseAuthenticator'
});
