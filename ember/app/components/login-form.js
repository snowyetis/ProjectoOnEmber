// app/components/login-form.js
import Ember from 'ember';

export default Ember.Component.extend({
    actions: {
      authenticate: function() {
        var data = this.getProperties('identification', 'password');
        return this.get('session').authenticate('simple-auth-authenticator:devise', data);
      }
    }
});
