import React, { useState } from 'react'
import Layout from '../../components/layout/Layout'
import { toast } from 'react-toastify';
import axios from 'axios';


const ForgotPassword = () => {

    const [email, setEmail] = useState("");
    const [question, setQuestion] = useState("");
    const [newPassword, setNewPassword] = useState("");


    const handleSubmit = async (e) => {
        // preventing default submit behaviour
        e.preventDefault();

        try {
            const res = await axios.post(`${process.env.REACT_APP_AUTH_API}/forgot-password`, { email, question, newPassword });

            if (res.data.success) {

                toast.success(res.data.message, {
                    position: "top-center"
                });
                // await setTimeout(() => navigate(location.state || "/reset-password"), 2000);

            } else {
                // console.log("Failed!")
                toast.error(res.data.error);
            }

        }
        catch (error) {
            // toast.error(`Error : ${error.response.data.message}`);
            toast.error(`Error : ${error.response.data.error}`);
        }
    }

    return (
        <Layout title="Login | Ecommerce App">
            <>
                <div className="container d-flex justify-content-center align-items-center vh-100 flex-column">
                    <div className="form-wrapper w-50 shadow-lg p-4">
                        <h2 className='text-center py-2 mb-4'>Forgot Password</h2>
                        <form onSubmit={handleSubmit} >
                            <div className="mb-3">
                                <label htmlFor="emailInput" className="form-label">Email address</label>
                                <input type="email" className="form-control" id="emailInput" placeholder='Enter your email' value={email} onChange={(e) => setEmail(e.target.value)} required />
                            </div>
                            <div className="mb-3">
                                <label htmlFor="questionInput" className="form-label">Answer for Security Question</label>
                                <select className="form-select my-2" aria-label="Default select example">
                                    <option selected>What's your nickname ?</option>
                                    <option>What's your pet name?</option>
                                    <option>What's your first school name?</option>
                                    <option>What's your elder cousin name?</option>
                                </select>
                                <input type="question" className="form-control" id="questionInput" placeholder='Answer' name='question' value={question} onChange={(e) => setQuestion(e.target.value)} reqired />
                            </div>
                            <div className="mb-3">
                                <label htmlFor="passwordInput" className="form-label">New Password</label>
                                <input type="password" className="form-control" id="passwordInput" placeholder='Enter a New password' value={newPassword} onChange={(e) => setNewPassword(e.target.value)} required />
                            </div>
                            <button type="submit" className="btn btn-primary px-4">Reset Password</button>
                        </form>
                    </div>

                </div>
            </>
        </Layout>
    )
}

export default ForgotPassword