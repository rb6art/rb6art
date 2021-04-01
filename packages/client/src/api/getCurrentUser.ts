import { CurrentUser } from './../context/User/interface';
import serverSiderequest from "./serverSideRequest";

const getCurrentUser = async (ctx: any): Promise<CurrentUser> => {
  const client = serverSiderequest(ctx)
  const { data } = await client.get('/api/user/currentuser')


  return {
    email: data.currentUser?.email ? data.currentUser?.email : '',
    id: data.currentUser?.id ? data.currentUser?.id : '',
    loggedIn: data.currentUser !== null,
  }

}

export default getCurrentUser