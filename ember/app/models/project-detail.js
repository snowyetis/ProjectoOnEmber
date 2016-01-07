import DS from 'ember-data';

export default DS.Model.extend({
    project: DS.belongsTo('project'),

    project_id: DS.attr('number'),
    feature_name: DS.attr('string'),
    hours_billed: DS.attr('number'),
    available_hours: DS.attr('number'),
    amount: DS.attr('number')
});
