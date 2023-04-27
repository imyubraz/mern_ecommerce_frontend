import React, { useState } from 'react'
import Layout from '../../components/layout/Layout'
import { useNavigate, useLocation, Link } from 'react-router-dom';
import { useAuth } from '../../contexts/auth';

// Toastify
import { toast } from 'react-toastify';

//axios
import axios from "axios";

const Login = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const navigate = useNavigate();
    const location = useLocation();

    //using auth context via custom hook useAuth
    const [auth, setAuth] = useAuth();


    const handleSubmit = async (e) => {
        // preventing default submit behaviour
        e.preventDefault();
        // console.log(email, password);

        try {
            const res = await axios.post(`${process.env.REACT_APP_AUTH_API}/login`, { email, password });

            if (res.data.success) {
                // console.log("Success!")
                // toast.success(res.data.message); // default L position: "top-center"
                toast.success(res.data.message, {
                    position: "top-center"
                });
                setAuth({
                    ...auth,
                    user: res.data.user,
                    token: res.data.user.token
                });

                // localStorage.setItem("auth", res.data) // object storing not supported
                localStorage.setItem("auth", JSON.stringify(res.data))
                // localStorage.setItem("auth", JSON.stringify(auth)) // This doesn't work
                await setTimeout(() => navigate(location.state || "/"), 2000);

            } else {
                // console.log("Failed!")
                toast.error(res.data.message);
            }

        }
        catch (error) {
            toast.error(`Error : ${error.response.data.message}`);
        }
    }

    return (
        <Layout title="Login | Ecommerce App">
            <>
                <div className="container d-flex justify-content-center align-items-center vh-100 flex-column">
                    <div className="form-wrapper w-50 shadow-lg p-4">
                        <h2 className='text-center py-2 mb-4'>Login</h2>
                        <form onSubmit={handleSubmit} >
                            <div className="mb-3">
                                <label htmlFor="emailInput" className="form-label">Email address</label>
                                <input type="email" className="form-control" id="emailInput" placeholder='Enter your email' value={email} onChange={(e) => setEmail(e.target.value)} required />
                            </div>
                            <div className="mb-3">
                                <label htmlFor="passwordInput" className="form-label">Password</label>
                                <input type="password" className="form-control" id="passwordInput" placeholder='Enter your password' value={password} onChange={(e) => setPassword(e.target.value)} required />
                            </div>
                            <div className='text-end'>
                                <Link className='text-decoration-none' to="/forgot-password">Forgot Password?</Link>
                            </div>
                            <button type="submit" className="btn btn-primary px-4">Login</button>
                        </form>
                    </div>

                </div>
            </>
        </Layout>
    )
}

export default Login