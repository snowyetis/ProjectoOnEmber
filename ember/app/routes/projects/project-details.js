import Ember from 'ember';

export default Ember.Route.extend({
    model() {
      const projectDetails = this.modelFor('projects');
      return this.store.query('project_detail', { param: projectDetails });
    }
});
