import React, { useState } from 'react'
import Layout from '../../components/layout/Layout'

const Login = () => {

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    return (
        <Layout title="Login | Ecommerce App">
            <>
                <div className="container d-flex justify-content-center align-items-center vh-100 flex-column">
                    <div className="form-wrapper w-50 shadow-lg p-4">
                        <h2 className='text-center py-2 mb-4'>Login</h2>
                        <form >
                            <div className="mb-3">
                                <label htmlFor="emailInput" className="form-label">Email address</label>
                                <input type="email" className="form-control" id="emailInput" placeholder='Enter your email' value={email} onChange={(e) => setEmail(e.target.value)} />
                            </div>
                            <div className="mb-3">
                                <label htmlFor="passwordInput" className="form-label">Password</label>
                                <input type="password" className="form-control" id="passwordInput" placeholder='Enter your password' value={password} onChange={(e) => setPassword(e.target.value)} />
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