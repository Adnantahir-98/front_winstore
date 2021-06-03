import React from 'react'
import { Link } from 'react-router-dom'
import Rating from '../components/layouts/rating'
import products from '../products'



function product_details({ match }) {
    const product = products.find((p) => p._id == match.params.id)

    return (
        <div >

            <section className="p-4">
                <div className="container">
                    {/* <nav aria-label="breadcrumb">
                        <ol class="breadcrumb">
                            <li class="breadcrumb-item"><a href="#">Home</a></li>
                            <li class="breadcrumb-item active" aria-current="page">Grocery</li>
                        </ol>
                    </nav> */}
                    <div className="row bg-white my-5">
                        <div className="col-md-4 pb-2 m-auto">
                            <img src={product.image} alt={product.name} className="img-fluid mt-3" />
                            <div className="row m-auto">
                                    <img src={product.image} alt={product.name} className="img-fluid border border p-2 mt-3 mr-1" style={{height:"96px", width:"95px"}} />
                                
                                {/* <div className="col-md-4"> */}
                                    <img src={product.image} alt={product.name} className="img-fluid border border p-2 mt-3 mr-1"  style={{height:"96px", width:"95px"}} />
                                {/* </div> */}
                                {/* <div className="col-md-4"> */}
                                    <img src={product.image} alt={product.name} className="img-fluid border border p-2 mt-3" style={{height:"96px", width:"95px"}}  />
                                {/* </div> */}

                            </div>
                        </div>
                        <div className="col-md-5">
                            <h4 className="font-weight-normal mt-4">{product.name}</h4>
                            <div>
                                <Rating value={product.rating} text={`${product.numReviews} reviews`} color={'#ffde00'} />
                                {/* <i className="fa fa-star text-warning"></i>
                                <i className="fa fa-star text-warning"></i>
                                <i className="fa fa-star text-warning"></i>
                                <i className="fa fa-star text-warning"></i>
                                <i className="fa fa-star-half-o text-warning"></i> */}
                                <span className="text-muted font-weight-light"> ({product.numReviews})</span>
                                <a href="#"><span className="float-right mr-1" style={{fontSize:"20px"}}><i className="fa fa-share-alt"></i> </span></a>
                            </div>
                            <p className="text-muted">Brand: <span className="text-info">{product.brand}</span></p>
                            <hr />
                            <h5 className="" style={{color: "orange"}}>Rs. {product.price}</h5>
                            <p className="text-muted"><strike>Rs. 210</strike> -10%</p>
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
                                    <Link to="/" className="underline"><button className="btn btn-success btn-block mb-2">Add to Cart</button></Link>
                                </div>
                                <div className="col-md-6">
                                <Link to="/" className="underline"><button className="btn btn-info btn-block">Buy now</button></Link>
                                </div>
                                <div className="col-md-10 m-auto">
                                <Link to="/" className="underline"><button className="btn btn-outline-dark btn-block mt-1">Go Back</button></Link>
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
                                <span>Punjab, All Over Lahore For Now</span>
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
                    <div className="row bg-white py-3">
                        <div className="col-md-12">
                            <div className="bg-light">
                                <h3 style={{background:"#fafafa"}} className="px-4 py-3">Product details of BROOKE BOND SUPREME 95gm</h3>
                            </div>
                        </div>
                            <div className="col-md-2 ml-3">
                                <h1 style={{fontSize:"60px"}}>5.0<span className="text-muted">/5</span></h1>
                                <div className="mt-2">
                                    <i className="fa fa-star text-warning" style={{fontSize:"30px"}}></i>
                                    <i className="fa fa-star text-warning" style={{fontSize:"30px"}}></i>
                                    <i className="fa fa-star text-warning" style={{fontSize:"30px"}}></i>
                                    <i className="fa fa-star text-warning" style={{fontSize:"30px"}}></i>
                                    <i className="fa fa-star text-warning" style={{fontSize:"30px"}}></i>
                                </div>
                                <p className="text-muted">{product.numReviews} Ratings</p>

                            </div>
                            <div className="col-md-2">
                                <div className="mt-2">
                                    <i className="fa fa-star text-warning" style={{fontSize:"30px"}}></i>
                                    <i className="fa fa-star text-warning" style={{fontSize:"30px"}}></i>
                                    <i className="fa fa-star text-warning" style={{fontSize:"30px"}}></i>
                                    <i className="fa fa-star text-warning" style={{fontSize:"30px"}}></i>
                                    <i className="fa fa-star text-warning" style={{fontSize:"30px"}}></i>
                                    
                                </div>
                                <div className="mt-2">
                                    <i className="fa fa-star text-warning" style={{fontSize:"30px"}}></i>
                                    <i className="fa fa-star text-warning" style={{fontSize:"30px"}}></i>
                                    <i className="fa fa-star text-warning" style={{fontSize:"30px"}}></i>
                                    <i className="fa fa-star text-warning" style={{fontSize:"30px"}}></i>
                                    <i className="fa fa-star-half-o text-warning" style={{fontSize:"30px"}}></i>
                                </div>
                                <div className="mt-2">
                                    <i className="fa fa-star text-warning" style={{fontSize:"30px"}}></i>
                                    <i className="fa fa-star text-warning" style={{fontSize:"30px"}}></i>
                                    <i className="fa fa-star text-warning" style={{fontSize:"30px"}}></i>
                                    <i className="fa fa-star-half-o text-warning" style={{fontSize:"30px"}}></i>
                                    <i className="fa fa-star-half-o text-warning" style={{fontSize:"30px"}}></i>
                                </div>
                                <div className="mt-2">
                                    <i className="fa fa-star text-warning" style={{fontSize:"30px"}}></i>
                                    <i className="fa fa-star text-warning" style={{fontSize:"30px"}}></i>
                                    <i className="fa fa-star-half-o text-warning" style={{fontSize:"30px"}}></i>
                                    <i className="fa fa-star-half-o text-warning" style={{fontSize:"30px"}}></i>
                                    <i className="fa fa-star-half-o text-warning" style={{fontSize:"30px"}}></i>
                                </div>
                                <div className="mt-2">
                                    <i className="fa fa-star text-warning" style={{fontSize:"30px"}}></i>
                                    <i className="fa fa-star-half-o text-warning" style={{fontSize:"30px"}}></i>
                                    <i className="fa fa-star-half-o text-warning" style={{fontSize:"30px"}}></i>
                                    <i className="fa fa-star-half-o text-warning" style={{fontSize:"30px"}}></i>
                                    <i className="fa fa-star-half-o text-warning" style={{fontSize:"30px"}}></i>
                                </div>
                            </div>
                            <div className="col-md-2">
                                <div class="progress mt-3">
                                    <div class="progress-bar bg-warning" role="progressbar" aria-valuenow="100" aria-valuemin="100" aria-valuemax="100" style={{width:"100%"}}></div>
                                </div>
                                <div class="progress mt-4">
                                    <div class="progress-bar bg-warning" role="progressbar" aria-valuenow="100" aria-valuemin="100" aria-valuemax="100" style={{width:"75%"}}></div>
                                </div>
                                <div class="progress mt-4">
                                    <div class="progress-bar bg-warning" role="progressbar" aria-valuenow="100" aria-valuemin="100" aria-valuemax="100" style={{width:"50%"}}></div>
                                </div>
                                <div class="progress mt-4">
                                    <div class="progress-bar bg-warning" role="progressbar" aria-valuenow="100" aria-valuemin="100" aria-valuemax="100" style={{width:"25%"}}></div>
                                </div>
                                <div class="progress mt-4">
                                    <div class="progress-bar bg-warning" role="progressbar" aria-valuenow="100" aria-valuemin="100" aria-valuemax="100" style={{width: "1%"}}></div>
                                </div>
                            </div>
                        </div>
                </div>
                </section>
        </div>
    )
}

export default product_details


