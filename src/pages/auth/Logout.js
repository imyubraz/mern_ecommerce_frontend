import React, { useEffect } from 'react'
import Layout from '../../components/layout/Layout'

//Custom useAuth hook to use auth context
import { useAuth } from '../../contexts/auth'

// useNavigate
import { useNavigate, Link } from 'react-router-dom';

// Toastify
import { toast } from 'react-toastify';

// const Logout = async() => { // async is not supported if we are using useEffect hook
const Logout = () => {
    const [auth, setAuth] = useAuth();

    const navigate = useNavigate();

    useEffect(() => {
        setAuth({
            ...auth,
            user: null,
            token: null,
        });
        toast.success("Logout successfully!");
        // setTimeout(navigate("/login"), 2000)
    }, [])

    return (
        <Layout>
            <div className="container vh-100 d-flex flex-column justify-content-center align-items-center gap-4">
                <div>Logged out!</div>
                <Link to="/login" className='btn btn-primary'>Go to Login</Link >
            </div>
        </Layout>
    )
}

export default Logout