import { Image } from '../../model/image'

import chai from 'chai'
import fs from 'fs'
import chaiHttp from 'chai-http'
import { app } from '../../app'

chai.use(chaiHttp)

const IMAGE_UPLOAD_URL = '/api/image/upload'

// Will probably need to create a middleware for testing Multer

describe('POST to /api/image/upload', () => {
  it('should return 201 if image was upload successfully', async () => {
    // const sessionCookie = await global.signin();

    // const response = await request(app)
    //   .post(IMAGE_UPLOAD_URL)
    //   // .set('Cookie', sessionCookie)
    //   .field('description', 'test info text')
    //   .attach('file', 'image/image1.jpeg')
    //   .expect(200)

    const res = await chai
      .request(app)
      .post(IMAGE_UPLOAD_URL)

      .attach(
        'file',
        fs.readFileSync(`${__dirname}/temp-images/image1.jpeg`),
        'temp-images/image1.jpeg',
      )
  })
})
