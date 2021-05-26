
import React from 'react'
import { Link } from 'react-router-dom'


function register() {
    return (
        <div>
            <section>
                <div className="container mt-5 mb-4">
                    <div className="row">
                        <div className="col-md-4 p-4 m-auto shadow rounded bg-light">
                            <h2 className="font-weight-bold text-success mb-3 text-center">Register</h2>
                            <hr  className="mb-4" />

                            <form action="" method="POST">
                                <div className="form-group">
                                    <label for="email">Email</label>
                                    <input type="email" placeholder="Enter your Email" className="form-control" required />
                                </div>
                                <div className="form-group">
                                    <label for="pass">Password</label>
                                    <input type="password" placeholder="Enter your Password" className="form-control" />
                                </div>
                                <div className="form-group">
                                    <label for="pass">Confirm Password</label>
                                    <input type="password" placeholder="Confirm your Password" className="form-control" />
                                </div>
                                <div className="form-group">
                                    <label for="pass">Phone #</label>
                                    <input type="number" placeholder="e.g: 0341-9082121" className="form-control" />
                                </div>
                                <div className="form-group">
                                    <button className="btn btn-outline-success">Register</button>
                                </div>
                                <hr className="mt-4" />
                                <p className="m-0">Already have an account? <Link to="/login" className="text-success">Login</Link></p>
                            </form>
                        </div>
                    </div>
                </div>
            </section>
        

        </div>
    )
}

export default register
