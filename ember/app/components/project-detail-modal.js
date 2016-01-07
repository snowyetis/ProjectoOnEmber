import Ember from 'ember';

export default Ember.Component.extend({
  actions: {
    create: function() {
      var data = this.getproperties('feature_name', 'available_hours', 'hours_billed', 'amount');
      return this.sendaction('save-project-detail-data', data);
    },
    closeProjectDetailModal: function() {
      return this.sendAction('close');
    }
  }
});
