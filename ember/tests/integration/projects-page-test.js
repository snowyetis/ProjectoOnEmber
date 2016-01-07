// ember/tests/integration/projects-page-test.js

import Ember from 'ember';
import { module, test } from 'qunit';
import startApp from '../helpers/start-app';
import Pretender from 'pretender';

var App, server;

module('Integration - Project Page', {
  beforeEach: function() {
    App = startApp();
    var projects = [
      {
        id: 1,
        project_name: 'MyString',
        status: 'MyString',
        user_id: 1
      },
      {
        id: 2,
        project_name: 'MyString',
        status: 'MyString',
        user_id: 1
      }
    ];

    server = new Pretender(function() {
      this.get('/api/projects', function() {
        return [200, {"Content-Type": "application/json"}, JSON.stringify({projects: projects})];
      });

      this.get('/api/projects/:id', function(request) {
        var project = projects.find(function(project) {
          if (project.id === parseInt(request.params.id, 1)) {
            return project;
          }
        });

        return [200, {"Content-Type": "application/json"}, JSON.stringify({project: project})];
      });
    });

  },
  afterEach: function() {
    Ember.run(App, 'destroy');
    server.shutdown();
  }
});

test('Should list all projects', function(assert) {
  visit('/projects').then(function() {
    assert.equal(find('a:contains("MyString")').length, 1);
    assert.equal(find('a:contains("MyString")').length, 1);
    assert.equal(find('a:contains("MyString")').length, 1);
  });
});

// test('Should be able to navigate to a project page', function(assert) {
//   visit('/projects').then(function() {
//     click('a:contains("Bugs Bunny")').then(function() {
//       assert.equal(find('h4').text(), 'Bugs Bunny');
//     });
//   });
// });

test('Should be able visit a speaker page', function(assert) {
  visit('/projects/1').then(function() {
    assert.equal(find('h4').text(), 'MyString');
  });
});
