import React, { useState } from 'react'
import Layout from '../../components/layout/Layout'

const Register = () => {

    // states
    const [name, setName] = useState("");
    const [username, setUsername] = useState("");
    const [email, setEmail] = useState("");
    const [phone, setPhone] = useState("");
    const [password, setPassword] = useState("");
    const [address, setAddress] = useState("");


    return (
        <Layout title="Register | Ecommerce App">
            <>
                <div className="container d-flex justify-content-center align-items-center vh-100 flex-column">
                    <div className="form-wrapper w-50 shadow-lg p-4">
                        <h2 className='text-center py-2 mb-4'>Register</h2>
                        <form >
                            <div className="mb-3">
                                <label htmlFor="nameInput" className="form-label">Name</label>
                                <input type="text" className="form-control" id="nameInput" placeholder='John Doe' value={name} onChange={(e) => setName(e.target.value)} />
                                <div id="emailHelp" className=" d-none">We'll never share your email with anyone else.</div>
                            </div>
                            <div className="mb-3">
                                <label htmlFor="usernameInput" className="form-label">Username</label>
                                <input type="text" className="form-control" id="usernameInput" placeholder='johndoe2023' value={username} onChange={(e) => setUsername(e.target.value)} />
                            </div>
                            <div className="mb-3">
                                <label htmlFor="emailInput" className="form-label">Email address</label>
                                <input type="email" className="form-control" id="emailInput" placeholder='josh@gmail.com' value={email} onChange={(e) => setEmail(e.target.value)} />
                            </div>
                            <div className="mb-3">
                                <label htmlFor="passwordInput" className="form-label">Password</label>
                                <input type="password" className="form-control" id="passwordInput" placeholder='Enter strong password' value={password} onChange={(e) => setPassword(e.target.value)} />
                            </div>
                            <div className="mb-3">
                                <label htmlFor="phoneInput" className="form-label">Phone</label>
                                <input type="phone" className="form-control" id="phoneInput" placeholder='987654321' value={phone} onChange={(e) => setPhone(e.target.value)} />
                            </div>
                            <div className="mb-3">
                                <label htmlFor="addressInput" className="form-label">Address</label>
                                <input type="address" className="form-control" id="addressInput" placeholder='Kathmandu, Nepal' value={address} onChange={(e) => setAddress(e.target.value)} />
                            </div>
                            <button type="submit" className="btn btn-primary px-4">Register</button>
                        </form>
                    </div>

                </div>
            </>
        </Layout>
    )
}

export default Register