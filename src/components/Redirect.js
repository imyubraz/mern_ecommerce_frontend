import React, { useEffect, useState } from 'react'
import Spinner from './Spinner';
import Layout from './layout/Layout';
import { useNavigate } from 'react-router-dom';

const Redirect = ({ path }) => {
    const [count, setCount] = useState(3)
    const navigate = useNavigate();
    // console.log(path);

    useEffect(() => {
        const countDown = () => {
            setInterval(() => setCount(count - 1), 1000)
        }
        if (count === 0) {
            navigate(path);
        }
        countDown();
        // setTimeout(navigate({ path }), 1000));
    }, [count])

    return (
        <>
            <Layout>
                <div className="container vh-100 d-flex flex-column gap-4 justify-content-center align-items-center">
                    <h2>Access Denied!!</h2>
                    <h3>Redirecting in {count} second...</h3>
                    {/* {setTimeout(useNavigate({ path }, 1000))} */}
                    <Spinner />
                </div>
            </Layout>
        </>
    )
}

export default Redirect