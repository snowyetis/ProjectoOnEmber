import Ember from 'ember';

export default Ember.Route.extend({
  model: function() {
    return Ember.RSVP.hash({
      projects: this.store.findAll('project'),
      project_details: this.store.findAll('project_detail'),
    });
  },

  setupController: function(controller, model) {
      console.log(model);
      controller.set('model', model);
    }
});
