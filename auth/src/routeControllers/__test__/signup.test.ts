import request from "supertest";
import { app } from '../../app';

describe('POST api/user/signup', () => {

  it ('should return a 201 on a seccessful signup', async () => {
    return request(app)
      .post('/api/user/signup')
      .send({
        email: "test@test.com",
        password: "234jkhg4k1j4h"
      })
      .expect(201);
  });

})