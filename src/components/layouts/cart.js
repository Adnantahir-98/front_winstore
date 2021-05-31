
import React from 'react'
import { Link } from 'react-router-dom'


function cart() {
    return (
        <div>
            
            <section>
                <div className="container my-5">
                    <div className="row">
                        <div className="col-md-5">
                            <h4 className="font-weight-bold">Products</h4>
                        </div>
                        <div className="col-md-2">
                            <h4 className="font-weight-bold">Price</h4>
                        </div>
                        <div className="col-md-2">
                            <h4 className="font-weight-bold">Quantity</h4>
                        </div>
                        <div className="col-md-2">
                            <h4 className="font-weight-bold">Total</h4>
                        </div>
                        <div className="col-md-1">
                            <h4 className="font-weight-bold">Delete</h4>
                        </div>
                    </div>
                    
                    <hr className="my-3" />

                    <div className="row">
                        <div className="col-md-5">
                            <div className="row">
                                <img src="imgs/bp248s.jpg" alt="bp248s" className="img-fluid cart-img" />
                                <h6 className="text-center mt-4 ml-3 pt-2">Foldable Ellegent Table</h6>
                            </div>
                        </div>
                        <div className="col-md-2">
                            <h6 className="mt-4">4999.PKR</h6>
                        </div>
                        <div className="col-md-2 mt-4">
                            <input type="number" className="form-control w-50" placeholder="e.g: 2" min="1" max="5" />
                        </div>
                        <div className="col-md-2">
                            <h6 className="mt-4">4999.PKR</h6>
                        </div>
                        <div className="col-md-1 mt-4 m-auto">
                            <Link to="#"><i className="fa fa-times text-danger"></i></Link>
                        </div>
                    </div>
                    <hr className="w-100" />
                    <div className="row mt-3">
                        <div className="col-md-5">
                            <div className="row">
                                <img src="imgs/b514-w-250x250.jpg" alt="bp248s" className="img-fluid cart-img" />
                                <h6 className="text-center mt-4 pt-2 ml-3">Foldable Ellegent Table</h6>
                            </div>
                        </div>
                        <div className="col-md-2">
                            <h6 className="mt-4">4999.PKR</h6>
                        </div>
                        <div className="col-md-2 mt-4">
                            <input type="number" className="form-control w-50" placeholder="e.g: 1" min="1" max="10" />
                        </div>
                        <div className="col-md-2">
                            <h6 className="mt-4">4999.PKR</h6>
                        </div>
                        <div className="col-md-1 mt-4">
                            <Link to="#"><i className="fa fa-times text-danger"></i></Link>
                        </div>
                    </div>

                    <hr className="mt-4" />

                    <div className="row">
                        <div className="col-md-6">
                            <button className="btn btn-outline-info my-3"><Link to="/shop" className="text-warning">Continue Shopping</Link></button>
                        </div>
                        <div className="col-md-6">
                        <div class="jumbotron shadow-sm bg-light">
                            <h5 class="display-4 mb-4">Cart Total</h5>
                            <p class="lead">Subtotal <span className="float-right">4999.PKR</span></p>
                            <hr class="my-4" />
                            <p class="lead">Total <span className="float-right">4999.PKR</span></p>
                            <p class="lead">
                                <Link class="btn btn-outline-success btn-lg mt-1" to="/checkout" role="button">PROCEED TO CHECKOUT</Link>
                            </p>
                        </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default cart
