import { createContext, useState } from "react";

export const AuthContext = createContext({
  isAuth: false,
  setIsAuth: auth => {}
});


export const AuthContextProvider = props => {
  const [isAuth, setIsAuth] = useState(!!localStorage.getItem('token'))

  return (
      <AuthContext.Provider value={{isAuth, setIsAuth}}>
        {props.children}
      </AuthContext.Provider>
  )
}