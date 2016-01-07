// serializers/project.js
import DS from 'ember-data';

export default DS.RESTSerializer.extend(DS.EmbeddedRecordsMixin, {
  attrs: {
    project_details: { embedded: 'always' }
  }
});
