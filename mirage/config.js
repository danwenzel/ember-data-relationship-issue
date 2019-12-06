export default function() {
  this.post('/posts', function({ posts }, { requestBody }) {
    const post = posts.create(JSON.parse(requestBody));
  });

  this.get('/posts/:id', function({ posts }, { params }) {
    return posts.find(params.id);
  });
}
