import React from 'react'
const accessStateContext = React.createContext()
const accessDispatchContext = React.createContext()

function AccessReducer(state, action) {
  switch (action.type) {
    case 'login': {
      return { loginName: action.payload, login: true }
    }
    case 'logout': {
      return { loginName: action.payload, login: false }
    }
    default: {
      throw new Error(`Unhandled action type: ${action.type}`)
    }
  }
}

function AccessProvider({ children }) {
  const [state, dispatch] = React.useReducer(AccessReducer, { loginName: '', login: false })
  return (
    <accessStateContext.Provider value={state}>
      <accessDispatchContext.Provider value={dispatch}>
        {children}
      </accessDispatchContext.Provider>
    </accessStateContext.Provider>
  )
}

function useAccessState() {
  const context = React.useContext(accessStateContext)
  if (context === undefined) {
    throw new Error('useAccessState must be used within a AccessProvider')
  }
  return context
}

function useAccessDispatch() {
  const context = React.useContext(accessDispatchContext)
  if (context === undefined) {
    throw new Error('useAccessDispatch must be used within a AccessProvider')
  }
  return context
}

export { AccessProvider, useAccessState, useAccessDispatch }
