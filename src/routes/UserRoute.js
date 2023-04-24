import { useState, useEffect } from 'react';
import { useAuth } from '../contexts/auth';
import { Outlet } from 'react-router-dom';
import axios from 'axios';
// import Spinner from '../components/Spinner';
import Layout from '../components/layout/Layout';
import Redirect from '../components/Redirect';

export default function UserRoute() {
    const [access, setAccess] = useState(false);
    const [auth, setAuth] = useAuth()

    useEffect(() => {
        const authCheck = async () => {
            console.log(auth?.token)
            // const res = await axios.get('/api/v1/auth/user-auth',

            // request using custom headers
            /* 
            const res = await axios.get(`${process.env.REACT_APP_AUTH_API}/user-auth`,
                {
                    headers: {
                        Authorization: auth?.token || ""
                    }
                })
             */

            // request using default headers (defined in contexte/auth.js)
            const res = await axios.get(`${process.env.REACT_APP_AUTH_API}/user-auth`);

            if (res.data.success) {
                setAccess(true)
            }
            else {
                setAccess(false)
            }
        }
        if (auth?.token) {
            authCheck()
        }
    }, [auth?.token])

    // return access ? <Outlet /> : "Access denied!";
    // return access ? <Outlet /> : <Spinner />;
    // return access ? <Outlet /> : <Layout><Spinner /></Layout>;
    return access ? <Outlet /> : <Redirect path="/login" />;

}