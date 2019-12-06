import RESTSerializer from '@ember-data/serializer/rest';

export default RESTSerializer.extend({
  normalize(typeClass, hash) {
    hash.links = hash.links || {};
    hash.links.user = `/some-custom-url/posts/${hash.id}/user`;

    return this._super(typeClass, hash);
  },
});
