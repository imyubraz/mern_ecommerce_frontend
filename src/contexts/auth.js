import { useState, useEffect, createContext, useContext } from 'react'

const AuthContext = createContext();

const AuthProvider = (props) => {
    const [auth, setAuth] = useState({
        user: null,
        token: null
    });

    // run block on first loading of app and run this block on change in value of auth as mention on dependency array [auth]
    useEffect(() => {
        // get auth data if stored in local storage 
        const data = localStorage.getItem("auth");
        if (data) {
            const parsedData = JSON.parse(data);
            setAuth(
                {
                    ...auth,
                    user: parsedData.user,
                    token: parsedData.user.token,
                }
            );
        }
    }, [auth]);

    return (
        <AuthContext.Provider value={[auth, setAuth]}>
            {props.children}
        </AuthContext.Provider>
    )
}

// custom hook for using AuthContext

const useAuth = () => useContext(AuthContext)

export { useAuth, AuthProvider };

