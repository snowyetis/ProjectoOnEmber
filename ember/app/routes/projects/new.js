import Ember from 'ember';

export default Ember.Route.extend({
  setupController(controller, model) {
    controller.set('projects', model.projects);
    controller.set('project_details', model.project_details);
  },

  model: function() {
    return Ember.RSVP.hash({
      projects: this.store.createRecord('project'),
      project_details: this.store.createRecord('project_detail')
    });
  },

  actions: {
    create: function() {
      var self = this;
      var project = this.controller.get('projects');
      var projectDetails = this.controller.get('project_details');
      project.get('project_details').pushObject(projectDetails);
      projectDetails.set('projects', project);

      project.save().then(function() {
        self.transitionTo('projects.index');
      });
    },

    closeProjectDetailModal() {
      this.controllerFor('application').set('showingModal', false);
      return this.disconnectOutlet({
        outlet: 'modal',
        parentView: 'application'
      });
    },

    openProjectDetailModal() {
      this.controllerFor('application').set('showingModal', true);

      return this.render('modal', {
        outlet: 'modal',
        into: 'application',
        controller: 'application'
      });
    }
  }
});
