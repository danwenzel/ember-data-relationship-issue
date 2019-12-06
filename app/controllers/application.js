import Controller from '@ember/controller';
import { readOnly } from '@ember/object/computed';

export default Controller.extend({
  userIsFetched: false,

  post: readOnly('model'),

  actions: {
    async fetchOrCreateUser() {
      try {
        await this.post.get('user');
      } catch (error) {
        // 404 returned.  Create a new user and set it as the post's user
        const newUser = this.store.createRecord('user', {
          name: 'Larry',
        });
        this.post.set('user', newUser);
      }

      this.set('userIsFetched', true);
    },
  },
});
