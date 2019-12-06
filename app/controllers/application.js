import Controller from '@ember/controller';
import { readOnly } from '@ember/object/computed';

export default Controller.extend({
  post: readOnly('model'),

  actions: {
    async badFetch() {
      const user = await this.post.get('user');
      debugger;
    },
  },
});
