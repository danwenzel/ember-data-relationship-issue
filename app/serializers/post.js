import RESTSerializer from '@ember-data/serializer/rest';

export default RESTSerializer.extend({
  normalize(typeClass, hash) {
    debugger;
    hash.links = hash.links || {};
    hash.links.user = `some-custom-url/users/${hash.id}`;

    return this._super(typeClass, hash);
  },
});
