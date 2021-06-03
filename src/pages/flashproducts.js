import React from 'react'
import { Link } from 'react-router-dom'
import { Card } from 'react-bootstrap'
import Rating from '../components/layouts/rating'


function flashproducts({ product }) {
    return (
        <div className="my-5 p_shadow border-0 rounded">
            <Card classname="my-3 bg-white">
                <Link to={`/productdetails/${product._id}`}>
                    <Card.Img src={product.image} className="border-bottom border-light" />
                </Link>
                <Card.Body>
                    <Card.Title as="div">
                        <Link to={`/productdetails/${product._id}`} className="text-dark underline">
                            <strong>{product.name}</strong>
                        </Link>
                    </Card.Title>
                    <Card.Text as="div" className="my-2">
                        <div className="my-2">
                            <Rating value={product.rating} text={`${product.numReviews} reviews`} color={'#ffde00'} />
                        </div>
                    </Card.Text>
                    <Card.Text as="h6" className="my-2">
                        <div>
                            Rs { product.price}
                        </div>
                    </Card.Text>
                </Card.Body>
            </Card>
                    

            {/* <section className="bg-light pt-3 pb-3">
                <div className="container">
                    <div className="row m-auto">
                        <div className="col-md-3 m-auto">
                            <div className="p_shadow bg-white py-2 mt-3 flash4_tags">
                                <Link className="text-dark underline" to="/"><i class="fa fa-rocket mx-3" aria-hidden="true"></i><span>Winstore Mall</span> <span><i className="fa fa-arrow-right float-right mr-3 mt-1"></i></span></Link>
                            </div>
                        </div>
                        <div className="col-md-3">
                            <div className="p_shadow bg-white py-2 mt-3 flash4_tags flash2_tags">
                                <Link className="text-dark underline" to="/"><i class="fa fa-eercast text-success mx-3" aria-hidden="true"></i><span>New Arrivals</span> <span><i className="fa fa-arrow-right float-right mr-3 mt-1"></i></span></Link>
                            </div>
                        </div>
                        <div className="col-md-3">
                            <div className="p_shadow bg-white py-2 mt-3 flash4_tags flash3_tags">
                                <Link className="text-dark underline" to="/"><i class="fa fa-globe text-primary mx-3" aria-hidden="true"></i><span>Global Collection</span> <span><i className="fa fa-arrow-right float-right mr-3 mt-1"></i></span></Link>
                            </div>
                        </div>
                        <div className="col-md-3">
                            <div className="p_shadow bg-white py-2 mt-3 flash4_tags flash-4_tags">
                                <Link className="text-dark underline" to="/"><i class="fa fa-cart-arrow-down mx-3 text-info" aria-hidden="true"></i><span>Win Mart</span> <span><i className="fa fa-arrow-right float-right mt-1 mr-3"></i></span></Link>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="container my-4 pt-2">
                    <h3>Flash Sale</h3>
                    <div className="row bg-white m-auto pb-5 pr-3 pl-1">
                        <div className="container">
                            <div className="row border-bottom pb-2">
                                <div className="col-md-3 pt-3 pl-4">
                                    <p className="text-danger mt-2">On Sale Now</p>
                                </div>
                                <div className="col-md-4 mt-4 pl-4">
                                    <span className="text-dark">Ending In: </span>
                                    <span className="px-3 rounded py-2 bg-info">7</span> <span> : </span> 
                                    <span className="px-3 rounded py-2 bg-info">09</span> <span> : </span>  
                                    <span className="px-3 rounded py-2 bg-info">00</span>
                                </div>
                                <div className="col-md-5 pt-3 pl-4">
                                    <Link to="/shop"><button className="btn btn-outline-danger rounded-0 float-right">Shop Now</button></Link>
                                </div>
                            </div>
                        </div> */}
                        
                        {/* <div className="col-md-3 mt-3">
                            <img src="imgs/cf9a45356e37e8b5496c09382789ff28.jpg" alt="" className="img-fluid" />
                            <h5 className="font-weight-normal">Superb Bass Earphones</h5>
                            <Link className="text-dark underline" to="/productdetails">
                                <div class="card border-0 p_shadow" style={{width: "16rem"}}>
                                    <img class="card-img-top" src="imgs/products/flash_sale/cf9a45356e37e8b5496c09382789ff28.jpg" alt="Card image cap" />
                                    <div class="card-body">
                                        <h5 class="card-title">Superb Bass Earphones</h5>
                                        <p class="card-text">Rs.310</p>
                                        <strike className="mr-2">Rs.420</strike>
                                        <span>-26%</span>
                                    </div>
                                </div>
                            </Link>
                        </div> */}
                        
                    {/* </div>
                </div>
            </section> */}


        </div>

    )
}

export default flashproducts
