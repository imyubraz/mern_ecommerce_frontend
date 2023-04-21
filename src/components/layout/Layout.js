import React from 'react'
import Header from './Header';
import Footer from './Footer';
import { Helmet } from "react-helmet";
import { prettyFormat } from '@testing-library/react';

const Layout = (props) => {
    return (
        <>
            <Helmet>
                <meta charSet="utf-8" />
                <meta name="description" content={props.description} />
                <meta name="keywords" content={props.keywords} />
                <meta name="author" content={props.author} />
                <meta name="viewport" content="width=device-width, initial-scale=1.0" />
                <title>{props.title}</title>
            </Helmet>
            <Header />
            {/* <h1>Layout</h1> */}
            <main style={{ minHeight: "80vh" }}>
                {props.children}
            </main>
            <Footer />
        </>
    )
}

Layout.defaultProps = {
    title: "My Ecommerce App",
    description: "MERN Ecommerce App",
    keywords: "mern, mondodb, express, react, node",
    author: "Yubraj Poudel"
}

export default Layout;