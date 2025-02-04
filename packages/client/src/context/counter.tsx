import { useReducer, useContext, createContext } from 'react'

interface Children {
  children: JSX.Element | JSX.Element[]
}

const CounterStateContext = createContext({})
const CounterDispatchContext = createContext({})

const reducer = (state: any, action: any) => {
  switch (action.type) {
    case 'INCREASE':
      return state + 1
    case 'DECREASE':
      return state - 1
    case 'INCREASE_BY':
      return state + action.payload
    default:
      throw new Error(`Unknown action: ${action.type}`)
  }
}

export const CounterProvider = ({ children }: Children) => {
  const [state, dispatch] = useReducer(reducer, 0)
  return (
    <CounterDispatchContext.Provider value={dispatch}>
      <CounterStateContext.Provider value={state}>
        {children}
      </CounterStateContext.Provider>
    </CounterDispatchContext.Provider>
  )
}

export const useCount = () => useContext(CounterStateContext)
export const useDispatchCount = () => useContext(CounterDispatchContext)
