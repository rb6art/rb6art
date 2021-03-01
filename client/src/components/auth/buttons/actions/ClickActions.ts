import axios from 'axios'

export const SignInAction = (event: React.MouseEvent<HTMLElement>) => {
  event.preventDefault()
  window.location.href = '/auth/signin'
}

export const SignOutAction = async () => {
  try {
    await axios.post('/api/user/signout')
  } catch (error) {
    // console.error(error)
  }
}

export const SignUpAction = (event: React.MouseEvent<HTMLElement>): void => {
  event.preventDefault()
  window.location.href = '/auth/signup'
}
