import Ember from 'ember';

export default Ember.Component.extend({

  projectDetailFields: Ember.computed('projects.project_details.@each', function() {
    return this.get('projects.project_details').map(field => {
      return Ember.Object.create({
        value: field
      });
    });
  }),

  actions: {
    click() {
      this.get('projectDetailFields').forEach(record => {
        value: record.value
      });
    }
  }

});
