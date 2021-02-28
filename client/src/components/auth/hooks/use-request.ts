import { useState } from 'react';
import axios from 'axios';

interface RequestDocument {
  url: string
  method: string
  body: object
}

export default ({ url, method, body }: RequestDocument) => {

  const [isEmailValid, setIsEmailValid] = useState(true)
  const [isPassValid, setIsPassValid] = useState(true)
  const [emailErrorMsg, setEmailErrorMsg] = useState('')
  const [passErrorMsg, setPassMsg] = useState('')

  const makeRequest = async () => {
    try {
      // @ts-ignore: Unreachable code error
      const response = await axios[method](url, body)
      return {
        success: true,
        data: response.data
      };
    } catch (error) {
      handleErrors(error.response.data.errors)
    }
  }

  interface ValidationError {
    message: string
    field: string
  }

  const handleErrors = (errors: ValidationError[]) => {
    if (errors?.length > 0) {
      errors.map((err: ValidationError) => {
        if (err.field) {
          switch (err.field.toLowerCase()) {
            case 'email':
              setIsEmailValid(false)
              setEmailErrorMsg(err.message)
              break
            case 'password':
              setIsPassValid(false)
              setPassMsg(err.message)
              break
            default:
              break
          }
        }
      })
    }
  }


  return { makeRequest, isEmailValid, isPassValid, emailErrorMsg, passErrorMsg }
}