import React from 'react'
import { Link } from 'react-router-dom'
// import FacebookLogin from 'react-facebook-login';


function login() {
    return (
        <div>
            <section>
                <div class="container my-5">
                    <div class="row">
                        <div class="col-md-8 p-4 m-auto shadow rounded bg-light">
                            <h1 class="text-center mt-3"><i class="fa fa-user-circle-o text-dark" style={{fontSize: "85px"}}></i></h1>
                            <h2 class="font-weight-bold text-success mb-3 text-center">Login</h2>
                            <hr class="mb-4" />
                            <div className="row">
                                <div className="col-md-6 border-right">
                                    <form action="" method="POST">
                                        <div class="form-group">
                                            <label for="email">Email</label>
                                            <input type="email" placeholder="Enter your Email" class="form-control" required />
                                        </div>
                                        <div class="form-group">
                                            <label for="pass">Password</label>
                                            <input type="password" placeholder="Enter your Password" class="form-control"/>
                                        </div>
                                        <div class="form-group mt-4">
                                            <button class="btn btn-outline-success btn-block">Login</button>
                                        </div>
                                    </form>
                                </div>
                                <div className="col-md-6 mt-4">
                                    <form action="" method="POST">
                                        <div class="form-group mb-1 pt-2">
                                            <Link to="#" className="underline"><button className="btn btn-outline-primary btn-block"><i className="fa fa-facebook mr-2"></i>Login with facebook</button></Link>
                                        </div>
                                        <small className="text-muted">Login With Your Social Media Account Now</small>
                                        <div class="form-group mt-3">
                                            <Link to="#" className="underline"><button className="btn btn-outline-danger btn-block"><i className="fa fa-google-plus mr-2"></i>Login with Google</button></Link>
                                        </div>
                                        <div class="form-group mt-4">

                                        </div>
                                    </form>
                                </div>
                            </div>
                            <hr class="mt-4" />
                            <div className="row">
                                <div className="col-md-6">
                                    <p className="">Forgot your password? <Link to="#" class="text-success">Click here</Link></p>
                                </div>
                                <div className="col-md-6">
                                    <p className="ml-auto"><span className="text-dark mr-4">Create New Account <Link to="/register" className="text-success">Now</Link></span></p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>


        </div>
    )
}

export default login
