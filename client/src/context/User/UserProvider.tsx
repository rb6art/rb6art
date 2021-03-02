import { useReducer, useContext, createContext } from 'react'

interface Children {
  children: JSX.Element | JSX.Element[]
}

const initialUserState = {
  userID: '',
  email: '',
  loggedIn: false,
}

type IUserState = {
  userID?: string
  email?: string
  loggedIn: boolean
}

type Dispach = {
  type: string
  value: string | boolean
}

type IUserContext = IUserState
type DispachContext = React.Dispatch<React.SetStateAction<Dispach>>

const UserStateContext = createContext<IUserContext>(initialUserState)
const UserDispatchContext = createContext<DispachContext>(() => null)

const reducer = (state: any, action: any) => {
  switch (action.type) {
    case 'SET_LOGIN_STATUS':
      return { ...state, loggedIn: action.value }
    case 'SET_USER_ID':
      return { ...state, userID: action.value }
    case 'SET_EMAIL':
      return { ...state, email: action.value }
    default:
      return state
  }
}

export const UserProvider = ({ children }: Children) => {
  const [state, dispatch] = useReducer(reducer, initialUserState)

  return (
    <UserDispatchContext.Provider value={dispatch}>
      <UserStateContext.Provider value={state}>
        {children}
      </UserStateContext.Provider>
    </UserDispatchContext.Provider>
  )
}

export const useUser = () => useContext(UserStateContext)
export const useDispatchUser = () => useContext(UserDispatchContext)
