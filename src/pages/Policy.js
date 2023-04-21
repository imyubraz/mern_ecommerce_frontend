import React from 'react'
import Layout from '../components/layout/Layout'

const Policy = () => {
    return (
        <Layout>
            <div className="row contact">
                <div className="col-md-6 ">
                    <img src="/images/contactus.jpeg" alt="contactus" style={{ width: "100%" }} />
                </div>
                <div className="col-md-4">
                    <ul>
                        <li>
                            <p>Policy 1 : Lorem ipsum, dolor sit amet consectetur adipisicing elit. Culpa debitis quam labore?
                            </p>
                        </li>
                        <li>
                            <p>Policy 2 : Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia eos nulla neque
                                labore consectetur harum.</p>
                        </li>
                        <li>
                            <p>Policy 3 : Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione, fugit.</p>
                        </li>
                        <li>
                            <p>Policy 4: Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos sapiente culpa
                                illum?</p>
                        </li>
                        <li>
                            <p>Policy 5 : Lorem ipsum dolor, sit amet consectetur adipisicing elit.</p>
                        </li>
                    </ul>
                </div>
            </div>
        </Layout>
    )
}

export default Policy