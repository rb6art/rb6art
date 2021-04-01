import request from "supertest"
import { app } from '../../app'
import { Posts } from "../../model/posts";


const creatPostURL = '/api/posts/create';

describe('POST to api/posts/create', () => {

  it('should return a 200 when creating a new post', async () => {
    const response = await request(app)
      .post(creatPostURL)
      .send({})

    expect(response.status).not.toEqual(404)
  })

  it('should only be accessed if user is signed in', async () => {
    await request(app)
      .post(creatPostURL)
      .send({})
      .expect(401)
  })

  it('should return a status other than 401 if the user is signed in', async () => {
    const response = await request(app)
      .post(creatPostURL)
      .set('Cookie', global.signin())
      .send({})

    expect(response.status).not.toEqual(401)
  })

  it('should return a 400 error if invalid post title', async () => {
    await request(app)
      .post(creatPostURL)
      .set('Cookie', global.signin())
      .send({
        title: '',
        content: 'This is the body of the post!'
      })
      .expect(400);
  })

  it('should return a 400 error if invalid post body', async () => {

    await request(app)
      .post(creatPostURL)
      .set('Cookie', global.signin())
      .send({
        title: 'This is the title of the posts!',
        content: ''
      })
      .expect(400);
  })


  it('should return a 201 when a valid post is created', async () => {

    // Add in a check to make sure the post was saved to the DB
    let posts = await Posts.find({});
    expect(posts.length).toEqual(0);

    await request(app)
      .post(creatPostURL)
      .set('Cookie', global.signin())
      .send({
        title: 'This is the title.',
        content: 'What a great post!',
      })
    // .expect(201);

    posts = await Posts.find({})
    expect(posts.length).toEqual(1);
    expect(posts[0].title).toEqual('This is the title.')
    expect(posts[0].content).toEqual('What a great post!')
  })
})
