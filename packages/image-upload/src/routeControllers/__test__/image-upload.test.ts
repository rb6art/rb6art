import { Request, Response, NextFunction } from 'express';
import request from 'supertest'
import { app } from '../../app'
import { Image } from '../../model/image'
import { resolve } from 'path';

const IMAGE_UPLOAD_URL = '/api/image/upload'


describe('POST to /api/image/upload', () => {

  it('should only be accessed if the user is signed in', async () => {
    await request(app)
      .post(IMAGE_UPLOAD_URL)
      .send({})
      .expect(401)
  })


  console.log(resolve(__dirname, 'image/1617124162791_grandpa alfred.jpeg'))


  it('should return 201 if image was upload successfully', async () => {
    const response = await request(app)
      .post(IMAGE_UPLOAD_URL)
      .field("Content-Type", "multipart/form-data")
      .attach('file', resolve(__dirname, 'image/1617124162791_grandpa alfred.jpeg'))
      .then(res => {
        console.log(res)
      });




  })
})