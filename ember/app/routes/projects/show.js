import Ember from 'ember';

export default Ember.Route.extend({
    model: function(params) {
      return Ember.RSVP.hash({
        projects: this.store.findRecord('project', params.id),
        project_details: this.store.findRecord('project_detail',params.id)
      });
    }
});
