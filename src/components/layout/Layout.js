import React from 'react'
import Header from './Header';
import Footer from './Footer';

const Layout = (props) => {
    return (
        <>
            <Header />
            {/* <h1>Layout</h1> */}
            <main style={{ minHeight: "80vh" }}>
                {props.children}
            </main>
            <Footer />
        </>
    )
}

export default Layout;