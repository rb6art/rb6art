import request from "supertest";
import { app } from '../../app';

const postSigninURL = '/api/user/signin';
const postSignupURL = '/api/user/signup';

describe('POST api/user/signin', () => {

  it('should return a 400 if no user with that email is found', async () => {
    await request(app)
      .post(postSigninURL)
      .send({
        email: "test@test.com",
        password: "password"
      })
      .expect(400);
  });


  it('should return a 400 if the password provided does not match hashed password', async () => {

    await request(app)
      .post(postSignupURL)
      .send({
        email: "test@test.com",
        password: "password"
      })
      .expect(201);

    await request(app)
      .post(postSigninURL)
      .send({
        email: "test@test.com",
        password: "asdfas"
      })
      .expect(400);

  });

  it('should set a cookie with Set-Cookie header when credientials are valid', async () => {

    await request(app)
      .post(postSignupURL)
      .send({
        email: "test@test.com",
        password: "password"
      })
      .expect(201);

    const res = await request(app)
      .post(postSigninURL)
      .send({
        email: "test@test.com",
        password: "password"
      })
      .expect(201);

    expect(res.get('Set-Cookie')).toBeDefined();

  });

});
