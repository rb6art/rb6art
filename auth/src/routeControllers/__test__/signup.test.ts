import request from "supertest";
import { app } from '../../app';

const postSignupURL = '/api/user/signup';

describe('POST api/user/signup', () => {

  it('should return a 201 on a seccessful signup', async () => {

    await request(app)
      .post(postSignupURL)
      .send({
        email: "test@test.com",
        password: "234jkhg4k1j4h"
      })
      .expect(201);
  });

  it('should return a 400 when EMAIL validation fails', async () => {

    await request(app)
      .post(postSignupURL)
      .send({
        email: "tetest.com",
        password: "password"
      })
      .expect(400);
  });

  it('should return a 400 when PASSWORD validation fails', async () => {

    await request(app)
      .post(postSignupURL)
      .send({
        email: "tet@est.com",
        password: "24h"
      })
      .expect(400);
  });

  it('should return a 400 when email and password is missing', async () => {

    await request(app)
      .post(postSignupURL)
      .send({
        email: "test@test.com",
        password: ""
      })
      .expect(400);

    await request(app)
      .post(postSignupURL)
      .send({
        email: "",
        password: "password"
      })
      .expect(400);
  });

  it('should not allow dublicate emails', async () => {

    await request(app)
      .post(postSignupURL)
      .send({
        email: "test@test.com",
        password: "234jkhg4k1j4h"
      })
      .expect(201);

    await request(app)
      .post(postSignupURL)
      .send({
        email: "test@test.com",
        password: "234jkhg4k1j4h"
      })
      .expect(400);
  });

  it('should have a header of Set-Cookie after setting the jwt', async () => {

    const res = await request(app)
      .post(postSignupURL)
      .send({
        email: "test@test.com",
        password: "234jkhg4k1j4h"
      })
      .expect(201);

    expect(res.get('Set-Cookie')).toBeDefined();

  });
});
