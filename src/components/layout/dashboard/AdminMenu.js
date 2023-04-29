import React from 'react'
import { NavLink } from 'react-router-dom'

const AdminMenu = () => {
    return (
        <>
            <div>
                <h2>Admin Panel</h2>
                <div className="list-group">
                    <NavLink to="/dashboard/admin/details" className="list-group-item list-group-item-action active">Details</NavLink>
                    <NavLink to="/dashboard/admin/add-product" className="list-group-item list-group-item-action">Users</NavLink>
                    <NavLink to="/dashboard/admin/add-product" className="list-group-item list-group-item-action">Add Product</NavLink>
                    <NavLink to="/dashboard/admin/add-category" className="list-group-item list-group-item-action">Add Category</NavLink>
                </div>
            </div>

        </>
    )
}

export default AdminMenu 