import { useEffect } from 'react'
import { GetServerSideProps } from 'next'
import { Hero } from '../components/Hero'
import { Container } from '../components/base/Container'
import serverSideRequest from '../api/serverSideRequest'
import { useDispatchUser, useUser } from '../context/User/UserProvider'

const Index = ({ currentUser }: any) => {
  const userState = useUser()
  const userDispatch = useDispatchUser()

  useEffect((): void => {
    const user = currentUser
    userDispatch({
      type: 'SET_USER_ID',
      value: user?.userID,
    })
    userDispatch({
      type: 'SET_EMAIL',
      value: user?.email,
    })
  }, [currentUser])

  const email = userState.email

  return (
    <Container height="100vh">
      <Hero />
      <br></br>
      <h1>HOME</h1>
      <p>Welcome {email}</p>
    </Container>
  )
}

export const getServerSideProps: GetServerSideProps = async ({ req }) => {
  const client = serverSideRequest({ req })

  const { data } = await client.get('/api/user/currentuser/')

  console.log(data)

  return {
    props: data, // will be passed to the page component as props
  }
}

export default Index
