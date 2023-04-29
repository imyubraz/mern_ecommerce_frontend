import { useState, useEffect } from 'react';
import { useAuth } from '../contexts/auth';
import { Outlet } from 'react-router-dom';
import axios from 'axios';
// import Spinner from '../components/Spinner';
import Layout from '../components/layout/Layout';
import Redirect from '../components/Redirect';

export default function AdminRoute() {
    const [access, setAccess] = useState(false);
    const [auth, setAuth] = useAuth()

    useEffect(() => {
        const authCheck = async () => {

            // request using default headers (defined in contexte/auth.js)
            const res = await axios.get(`${process.env.REACT_APP_AUTH_API}/admin-auth`);

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

    return access ? <Outlet /> : <Redirect path="/" />;

}