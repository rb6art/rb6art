import request from "supertest"
import { app } from '../../app'
import { Posts } from "../../model/posts";


describe('GET to api/posts/get/:id', () => {

  it('should return a 404 when post is not found', async () => {
    const response = await request(app)
      .post('/api/posts/get/2984u298u491r8u09')
      .send()
      .expect(404)
  })

  it("should return the post if it's found", async () => {
    const title = 'This is the title.';
    const content = 'What a great post!';

    const response = await request(app)
      .post('/api/posts/create')
      .set('Cookie', global.signin())
      .send({
        title,
        content
      })

    const postId = response.body.id;

    const getResponse = await request(app)
      .get(`/api/posts/get/${postId}`)
      .set('Cookie', global.signin())
      .send()
      .expect(200);

    expect(getResponse.body.title).toEqual(title);
    expect(getResponse.body.content).toEqual(content);

  })

  it('should return all the posts created by a user when userId is provided', async () => {
    let userId

    // Create first post
    await request(app)
      .post('/api/posts/create')
      .set('Cookie', global.signin())
      .send({
        title: 'Test title 1',
        content: 'What a great post!'
      })

    // Create second post
    const secondPostResponse = await request(app)
      .post('/api/posts/create')
      .set('Cookie', global.signin())
      .send({
        title: 'This is the title for post 2..',
        content: 'Post 2!'
      })

    userId = secondPostResponse.body.id;

    // Get all users posts
    const allPostRes = await request(app)
      .get(`/api/posts/getAllByUserId/${userId}`)
      .set('Cookie', global.signin())
      .send()


    // Should have 2 posts
    const numberOfPosts = await Posts.find({}, { userId });
    expect(numberOfPosts.length).toEqual(2)
  })

})
