import Ember from 'ember';

export default Ember.Route.extend({

  model: function (params) {
    return Ember.RSVP.hash({
      projects: this.store.findRecord('project', params.id)
    });
  },

  actions: {
    saveProject: function(project) {
      var self = this;

      project.save().then(function () {
        self.transitionTo('projects');
      });
    }
  }
});
