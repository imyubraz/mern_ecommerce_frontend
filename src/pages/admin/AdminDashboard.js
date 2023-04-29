import React from 'react'
import Layout from '../../components/layout/Layout'
import AdminMenu from './../../components/layout/dashboard/AdminMenu';
import { useAuth } from '../../contexts/auth';

const AdminDashboard = () => {
    const [auth] = useAuth();
    return (
        <Layout>
            <div className="container-fluid my-4 py-2">
                <div className="row">
                    <div className="col col-md-3">
                        <AdminMenu />
                    </div>
                    <div className="col col-md-9">
                        <p>Name: {auth?.user?.name}</p>
                        <p>Username: {auth?.user?.username}</p>
                        <p>Email: {auth?.user?.email}</p>
                        <p>Address: {auth?.user?.address}</p>
                        <p>Phone No.: {auth?.user?.phone}</p>
                    </div>
                </div>
            </div>
        </Layout>
    )
}

export default AdminDashboard