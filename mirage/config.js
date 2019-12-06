import { Response } from 'miragejs';

export default function() {
  this.post('/posts', function({ posts }, { requestBody }) {
    const post = posts.create(JSON.parse(requestBody));
  });

  this.get('/posts/:id', function({ posts }, { params }) {
    return posts.find(params.id);
  });

  this.get('/some-custom-url/posts/:post_id/user', function({ posts }, { params }) {
    const user = posts.find(params.post_id).user;

    if (!user) {
      return new Response(404, { errors: ['user not found'] });
    }

    return user;
  });
}
