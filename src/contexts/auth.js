import { useState, useEffect, createContext, useContext } from 'react'

const AuthContext = createContext();

const AuthProvider = (props) => {
    const [auth, setAuth] = useState({
        user: null,
        token: null
    })
    return (
        <AuthContext.Provider value={[auth, setAuth]}>
            {props.children}
        </AuthContext.Provider>
    )
}

// custom hook for using AuthContext

const useAuth = () => useContext(AuthContext)

export { useAuth, AuthProvider };

