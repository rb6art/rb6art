import axios from 'axios'
import router from 'next/router'

export const SignInAction = (event: React.MouseEvent<HTMLElement>): void => {
  event.preventDefault()
  router.push('/auth/signin')
}

export const SignOutAction = async (): Promise<any> => {
  try {
    await axios.post('/api/user/signout')
  } catch (error) {
    // console.error(error)
  }
}

export const SignUpAction = (event: React.MouseEvent<HTMLElement>): void => {
  event.preventDefault()
  router.push('/auth/signup')
}
