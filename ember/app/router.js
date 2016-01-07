import Ember from 'ember';
import config from './config/environment';

var Router = Ember.Router.extend({
  location: config.locationType
});

Router.map(function() {
  this.route('home');
  this.route('dashboard');
  this.route('login');
  this.route('projects', function() {
    this.route('new');
    this.route('show', { path: '/:id'});
    this.route('edit', { path: '/:id/edit'});
  });

});

export default Router;

// this.route('projects', {path: '/projects/:project_id'}, function() {
