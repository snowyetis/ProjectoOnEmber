import DS from 'ember-data';

export default DS.Store.extend({

  // function() {
  //   var token = ('meta[name="csrf-token"]').attr('content');
  //   return ajaxPrefilter(function(options, originalOptions, xhr) {
  //       return xhr.setRequestHeader('X-CSRF-Token', token);
  //   });
  // }
});
