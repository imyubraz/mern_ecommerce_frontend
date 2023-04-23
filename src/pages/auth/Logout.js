import React, { useEffect } from 'react'
import Layout from '../../components/layout/Layout'

// import { useAuth } from '../../contexts/auth'


const Logout = () => {
    /*
    const [auth, setAuth] = useAuth();
    useEffect(() => {
        setAuth({
            ...auth,
            user: null,
            token: null,
        }, [auth]);
    }, [auth])
    */

    return (
        <Layout>
            <div>Logged out!</div>
        </Layout>
    )
}

export default Logout