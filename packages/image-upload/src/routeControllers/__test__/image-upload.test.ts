
import { Image } from '../../model/image'

import chai from 'chai';
import fs from 'fs';
import chaiHttp from 'chai-http';
import { app } from '../../app'

const { expect } = chai;

chai.use(chaiHttp);

const IMAGE_UPLOAD_URL = '/api/image/upload'




// HAVING A REALLLLY HARD TIME TESTING IMAGE UPLOAD WITH TDD  !!!!!!
// NOT DOING IT!






// describe('POST to /api/image/upload', () => {

  // it('should return 201 if image was upload successfully', async () => {

    // const sessionCookie = await global.signin();

    // const response = await request(app) 
    //   .post(IMAGE_UPLOAD_URL)
    //   .set('Cookie', sessionCookie)
    //   .field('title', 'test title')
    //   .field('description', 'test info text')
    //   .attach('avatar', 'image/image1.jpeg')
    //   .expect(200)

    // const res = await chai.request(app)
    //   .post(IMAGE_UPLOAD_URL)
    //   .set('Cookie', sessionCookie)

    //   .attach('file', fs.readFileSync(`${__dirname}/image/image1.jpeg`), 'image/image1.jpeg')

    // console.log(res)

//   })
// })