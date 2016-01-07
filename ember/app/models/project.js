import DS from 'ember-data';

export default DS.Model.extend({
  project_details: DS.hasMany('project_details'),

  project_name: DS.attr('string'),
  status: DS.attr('string'),
  user_id: DS.attr()
});
