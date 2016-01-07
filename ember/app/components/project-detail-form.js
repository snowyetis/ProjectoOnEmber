import Ember from 'ember';

const ProjectDetailFormComponent = Ember.Component.extend({

  feature_name: Ember.computed('params.[]', function() {
    return this.get('params')[0];
  }),
  hours_billed: Ember.computed('params.[]', function() {
    return this.get('params')[1];
  }),
  available_hours: Ember.computed('params.[]',function() {
    return this.get('params')[2];
  }),
  amount: Ember.computed('params.[]',function() {
    return this.get('params')[3];
  })
});

  ProjectDetailFormComponent.reopenClass({
    positionalParams: 'params'
  });



export default ProjectDetailFormComponent;
