import express from 'express'
import cookieSession from 'cookie-session'
import 'express-async-errors'
import { json } from 'body-parser'
import { NotFoundError, errorHandler, currentUser } from '@rb6art/common'
import { imageUploadRoutes } from './routes/image-upload-routes'

const app = express()

/**
  We need this because  we are using ingress nginx proxy. 
  By default express will trust traffic even though its coming form that proxy.
*/
app.set('trust proxy', true)

app.use(json())
app.use(
  cookieSession({
    signed: false,
    /**
      Doing this check to allow Jest/Supertest to work.
      Supertest uses http request and not https.
      If test is true secure is false..
     */
    secure: process.env.NODE_ENV !== 'test',
  }),
)

// This middleware will check if the currentUser prop is on the res object
// if not it will throw an error..
app.use(currentUser)

// Middleware Routes
app.use('/api', imageUploadRoutes)

app.all('*', async () => {
  throw new NotFoundError()
})

app.use(errorHandler)

export { app }
