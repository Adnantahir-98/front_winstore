import React from 'react'
import { Link } from 'react-router-dom'


function checkout() {
    return (
        <div>
            <section style={{background:"#eff0f5"}}>
                <div className="container py-5">
                <h2 className="">Billing & Shipping</h2>
                    <div className="row m-auto">
                        <div className="col-md-5">
                            <form method="POST" action="" >
                                <div className="row my-3">
                                    <div className="col">
                                        <label>First Name <span className="text-danger">*</span></label>
                                        <input type="text" className="form-control" placeholder="Your First name" />
                                    </div>
                                    <div className="col">
                                        <label>Last Name <span className="text-danger">*</span></label>
                                        <input type="text" className="form-control" placeholder="Your Last name" />
                                    </div>
                                </div>
                                <div className="form-group">
                                    <label>Street Address <span className="text-danger">*</span></label>
                                    <input type="text" className="form-control" placeholder="Your House and Street Address" required/>
                                </div>
                                <div className="form-group">
                                    <label className="">City / Town</label>
                                    <small class="form-text text-muted">Deliveries are just within the Lahore.</small>
                                    <input type="text" className="form-control" value="Lahore" disabled/>
                                </div>
                                <div className="row my-3">
                                    <div className="col">
                                        <label>Phone <span className="text-danger">*</span></label>
                                        <input type="number" className="form-control" placeholder="0314 9023840" />
                                    </div>
                                    <div className="col">
                                        <label>Email <span className="text-muted">(Option)</span></label>
                                        <input type="text" className="form-control" placeholder="Your Last name" />
                                    </div>
                                </div>
                            </form>
                        </div>
                        
                        <div className="col-md-6 mt-4">
                            <div class="bg-light px-5 py-4">
                                <h2 className="text-center">Your Order</h2>
                                <hr />
                                <h1 class="h5">Product <span className="float-right">Subtotal</span></h1>
                                <p class="">Eco Star Led Tv 43UD961  <span> x 1</span> <span className="float-right">Rs. 67000.00</span></p>
                                <p class="">Taxes <span className="float-right">Rs. 500</span></p>
                                <hr class="my-4" />
                                <h1 class="h5">Total <span className="float-right">Rs. 67500.00</span></h1>
                                <input type="radio" className="text-dark" /> Cash on Delivery
                                <p><small className="text-muted">Pay with cash upon delivery</small></p>
                                <div className="row">
                                    <button className="btn btn-outline-dark mr-2" type="submit"><i className="fa fa-credit-card-alt mr-2"></i>Credit/Debit Card</button>
                                    <button className="btn btn-outline-dark" type="submit"><i class="fa fa-paypal mr-2" aria-hidden="true"></i>Paypal</button>
                                </div>
                            </div>
                            <input type="checkbox" className="rounded-0 my-3" /> I have read and agree to the website <Link to="/">terms and conditions</Link> <span className="text-danger">*</span> <br />
                            <button className="btn btn-outline-dark btn-block m-auto" type="submit"><i className="fa fa-credit-card mr-2"></i>Place Order</button>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default checkout
