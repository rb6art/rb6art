import request from "supertest";
import { app } from '../../app';

const postSignupURL: string = '/api/user/signup';
const postSignoutURL: string = '/api/user/signout';

describe('POST api/user/signout', () => {

  it('should return a 201 on a seccessful signout', async () => {

    await request(app)
      .post(postSignupURL)
      .send({
        email: "test@test.com",
        password: "password"
      })
      .expect(201);

    const res = await request(app)
      .post(postSignoutURL)
      .send({})
      .expect(200);

    expect(res.get('Set-Cookie')[0]).toEqual(
      'express:sess=; path=/; expires=Thu, 01 Jan 1970 00:00:00 GMT; httponly'
    )
  });

})