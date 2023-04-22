import React, { useState } from 'react'
import Layout from '../../components/layout/Layout'

// Toastify
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Login = () => {

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const handleSubmit = (e) => {
        // preventing default submit behaviour
        e.preventDefault();
        console.log(email, password);

        // showing toast messages
        // toast("Form submitted!");
        toast.success("Form submitted!");
    }

    return (
        <Layout title="Login | Ecommerce App">
            <>
                <div className="container d-flex justify-content-center align-items-center vh-100 flex-column">
                    <ToastContainer position="bottom-right" />
                    {/*  tweaking position from Toast container (default position => top-right) */}
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
                            <button type="submit" className="btn btn-primary px-4">Login</button>
                        </form>
                    </div>

                </div>
            </>
        </Layout>
    )
}

export default Login