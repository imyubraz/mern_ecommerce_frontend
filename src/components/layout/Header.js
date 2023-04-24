import React from 'react'
import { NavLink, Link } from 'react-router-dom'
import { FiShoppingBag } from "react-icons/fi"
import { useAuth } from '../../contexts/auth'

const Header = () => {
    const [auth, setAuth] = useAuth();

    /*
    const handleLogout = () => {
        setAuth({
            ...auth,
            user: null,
            token: null
        });
        localStorage.removeItem("auth");
    };
    */

    return (
        <>
            <nav className="navbar navbar-expand-lg bg-body-tertiary">
                <div className="container-fluid px-4">
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarTogglerDemo01" aria-controls="navbarTogglerDemo01" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon" />
                    </button>
                    <div className="collapse navbar-collapse" id="navbarTogglerDemo01">
                        <Link to="/" className="navbar-brand" >
                            <FiShoppingBag /> Ecommerce App
                        </Link>
                        <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <NavLink to="/" className="nav-link" aria-current="page" >Home</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink to="/about" className="nav-link" >About</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink to="/contact" className="nav-link" >Contact</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink to="/category" className="nav-link" >Category</NavLink>
                            </li>
                            {
                                !auth.user ? (
                                    <>
                                        <li className="nav-item">
                                            <NavLink to="/register" className="nav-link" >Register</NavLink>
                                        </li>
                                        <li className="nav-item">
                                            <NavLink to="/login" className="nav-link" >Login</NavLink>
                                        </li>
                                    </>
                                ) : (

                                    <>
                                        <li className="nav-item">
                                            <NavLink to="/dashboard" className="nav-link" aria-current="page" >Dashboard</NavLink>
                                        </li>
                                        <li className="nav-item">
                                            {/* <NavLink onClick={handleLogout} to="/login" className="nav-link" >Logout</NavLink> */}
                                            <NavLink to="/logout" className="nav-link" >Logout</NavLink>
                                        </li>
                                    </>
                                )
                            }

                            <li className="nav-item">
                                <NavLink to="/cart" className="nav-link" >🛒Cart (0)</NavLink>
                            </li>
                            {/* <li className="nav-item">
                                <NavLink className="nav-link disabled">Disabled</NavLink>
                            </li> */}
                        </ul>
                    </div>
                </div>
            </nav>

        </>
    )
}

export default Header