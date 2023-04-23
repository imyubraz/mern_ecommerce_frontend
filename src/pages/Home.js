import React from 'react'
import Layout from '../components/layout/Layout'
import { useAuth } from '../contexts/auth'

const Home = () => {

    // console.log(useAuth())
    const [auth, setAuth] = useAuth();
    // console.log(auth)
    return (
        <Layout
            title="Home | E-Commerce App"
            description="MERN eCommerce App"
            keywords="buy, sell, online, ecommerce"
            author="Yubraj"
        >
            <h1>Home Page</h1>
            {/* <p>{JSON.stringify(auth)}</p> */}
            <pre>{JSON.stringify(auth, null, 4)}</pre>
        </Layout>
    )
}

export default Home