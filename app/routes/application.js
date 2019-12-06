import Route from '@ember/routing/route';

export default Route.extend({
  async model() {
    return await this.store.findRecord('post', 1);
  },
});
