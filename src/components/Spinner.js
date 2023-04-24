import React from 'react'

const Spinner = () => {
    return (
        <>
            <div className="container vh-100 d-flex justify-content-center align-items-center">
                <div className="text-center">
                    <div className="spinner-border" role="status">
                        <span className="sr-only"></span>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Spinner