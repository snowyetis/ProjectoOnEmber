import Ember from 'ember';
import { module, test } from 'qunit';
import startApp from '../helpers/start-app';

var App;

module('Integration - Landing Page', {
  beforeEach: function() {
    App = startApp();
  },
  afterEach: function() {
    Ember.run(App, 'destroy');
  }
});

test('Should welcome me to Invoicing', function(assert) {
  visit('/').then(function() {
    assert.equal(find('h2#title').text(), 'Welcome to Invoicing');
  });
});

test('Should allow navigation to the projects page from the landing page', function() {
  visit('/').then(function() {
    click('a:contains("Projects")').then(function(assert) {
      assert.equal(find('h3').text(), 'Projects');
    });
  });
});
