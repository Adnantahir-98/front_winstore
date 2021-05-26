import React from 'react'
import { Link } from 'react-router-dom'

function product_details() {
    
    return (
        <div style={{background:"#eff0f5"}}>
            <section className="p-4">

                <div className="container">
                    <div className="row bg-white my-5">
                        <div className="col-md-4">
                            <img src="imgs/ebda6541a3489419c8b7ca40016da149.jpg_400x400q75-product.jpg_.webp" alt="" className="img-fluid" />
                            <div className="row">
                                <div className="col-md-4">
                                    <img src="imgs/ebda6541a3489419c8b7ca40016da149.jpg_400x400q75-product.jpg_.webp" alt="" className="img-fluid border border-danger p-2 mt-3" style={{height:"96px"}} />
                                </div>
                                <div className="col-md-4">
                                    <img src="imgs/ebda6541a3489419c8b7ca40016da149.jpg_400x400q75-product.jpg_.webp" alt="" className="img-fluid border border-danger p-2 mt-3"  style={{height:"96px"}} />
                                </div>
                                <div className="col-md-4">
                                    <img src="imgs/ebda6541a3489419c8b7ca40016da149.jpg_400x400q75-product.jpg_.webp" alt="" className="img-fluid border border-danger p-2 mt-3" style={{height:"96px"}}  />
                                </div>

                            </div>
                        </div>
                        <div className="col-md-5">
                            <h4 className="font-weight-normal mt-4">BROOKE BOND SUPREME 95gm</h4>
                            <div>
                                <i className="fa fa-star text-warning"></i>
                                <i className="fa fa-star text-warning"></i>
                                <i className="fa fa-star text-warning"></i>
                                <i className="fa fa-star text-warning"></i>
                                <i className="fa fa-star-half-o text-warning"></i>
                                <span className="text-muted font-weight-light"> (179) Ratings</span>
                                <a href="#"><span className="float-right mr-1" style={{fontSize:"20px"}}><i className="fa fa-share-alt"></i> </span></a>
                            </div>
                            <p className="text-muted">Brand: <span className="text-info">Brooke Bond Supreme</span></p>
                            <hr />
                            <h5 className="" style={{color: "orange"}}>Rs. 95</h5>
                            <p className="text-muted"><strike>Rs. 105</strike> -10%</p>
                            <div className="row">
                                <h5 className="mr-4 font-weight-light text-muted mt-5 pt-1 ml-3">Quantity: </h5>
                                <span>
                                    <div class="input-group mt-5">
                                        <input type="button" value="-" class="button-minus" data-field="quantity" />
                                        <input type="number" step="1" max="" value="1" name="quantity" class="quantity-field" />
                                        <input type="button" value="+" class="button-plus" data-field="quantity" />
                                    </div>
                                </span>
                            </div>
                            <div className="row mt-4">
                                <div className="col-md-6">
                                    <Link to="/" className="underline"><button className="btn btn-success btn-block rounded-0">Add to Cart</button></Link>
                                </div>
                                <div className="col-md-6">
                                <Link to="/" className="underline"><button className="btn btn-info btn-block rounded-0">Buy now</button></Link>
                                </div>
                            </div>
                        </div>
                        {/* Delivery Details Right Side Bar */}
                        <div className="col-md-3 text-muted" style={{background:"#fafafa"}}>
                            <p className="text-muted mt-4">Delivery Options 
                                <Link to="/">
                                    <span className="float-right">
                                        <i className="fa fa-info-circle text-muted"></i>
                                    </span>
                                </Link>
                            </p>
                            <div>
                                <i className="fa fa-map-marker mr-2"></i>
                                <span>Punjab, Lahore - Gulshan-e-Iqbal, Block 15</span>
                            </div>
                            <div className="mt-3">
                                <i class="fa fa-first-order mr-2" aria-hidden="true"></i>
                                <span>Fulfilled by Winstore</span>
                            </div>
                            <hr />
                            <div className="mt-2">
                                <i class="fa fa-truck mr-2" aria-hidden="true"></i>
                                <span>Home Delivery <span className="text-dark float-right"> Rs. 49</span></span>
                                <br />
                                <small className="ml-4">1 - 2 days</small>
                            </div>
                            <div className="mt-2">
                                <i class="fa fa-credit-card mr-2" aria-hidden="true"></i>
                                <span>Express Delivery <span className="text-dark float-right"> Rs. 49</span></span>
                                <br />
                                <small className="ml-4">Today</small>
                            </div>
                            <div className="mt-2">
                                <i class="fa fa-money mr-2" aria-hidden="true"></i>
                                <span>Cash on delivery <span className="text-dark float-right"></span></span>
                            </div>
                            <hr />
                            <small className="text-muted mt-4 font-weight-bold">Return & Warranty 
                                <Link to="/">
                                    <span className="float-right">
                                        <i className="fa fa-info-circle text-muted"></i>
                                    </span>
                                </Link>
                            </small>
                            <div className="mt-2">
                                <i class="fa fa-check-square-o mr-2 text-success" aria-hidden="true"></i>
                                <small>100% Authentic</small>
                            </div>
                            <div className="mt-2">
                                <i class="fa fa-check-square-o mr-2 text-info" aria-hidden="true"></i>
                                <small>14 days easy return</small>
                            </div>
                            <div className="mt-2 mb-3">
                                <i class="fa fa-shield mr-2 text-info" aria-hidden="true"></i>
                                <small>Warranty not available</small>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default product_details
