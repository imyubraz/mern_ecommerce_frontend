import React from 'react'
import { Link } from "react-router-dom"

const Footer = () => {
    return (
        <>
            <footer style={{ minHeight: "10vh" }} className='bg-dark text-light py-2'>
                <div className="text-center py-4 d-flex flex-row justify-content-around w-25 mx-auto">
                    <div>
                    </div>
                    <Link to="/home">Home</Link>
                    <div>
                        <Link to="/about">About</Link>
                    </div>
                    <div>
                        <Link to="/contact">Contact</Link>
                    </div>
                    <div>
                        <Link to="/policy">Policy</Link>
                    </div>
                </div>
                <div className="py-2 text-center">
                    Copyright ©️ 2023 | Yubraj Poudel
                </div>

            </footer>
        </>
    )
}

export default Footer