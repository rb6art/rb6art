import request from "supertest";
import { app } from '../../app';

const currentUserURL = '/api/user/currentUser';

describe('GET api/user/currentUser', () => {

  it('should return a 200 with the currentUser data', async () => {

    const sessionCookie = await global.signup();

    const req = await request(app)
      .get(currentUserURL)
      .set('Cookie', sessionCookie)
      .expect(200);

    expect(req.body).toHaveProperty('currentUser');
    expect(req.body.currentUser).toHaveProperty('email');
    expect(req.body.currentUser).toHaveProperty('userID');
    expect(req.body.currentUser).toHaveProperty('iat');
  });

  it('should return a 200 with a null payload if no sessionCookie', async () => {

    // There will be no session cookie when we make this call so it will fail
    // and return 'currentUser: null'
    const req = await request(app)
      .get(currentUserURL)
      .expect(200);

    expect(req.body.currentUser).toEqual(null);
  });

})
