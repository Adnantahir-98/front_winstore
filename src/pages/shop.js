import React from 'react'
import { Link } from 'react-router-dom'


function shop() {
    return (
        <div>
            <section>
                <div className="container border-top">
                    <div className="row">
                    {/* Shop Page Side Bar  */}
                    <div className="col-md-3 bg-white px-3 mt-5 py-2">
                            <h2 className="pt-2 font-weight-normal">Categories</h2>
                            <hr />
                            <h4 className="font-weight-bold text-muted disabled border-bottom pb-2">Shop <span className="float-right text-muted"> <i class="fa fa-angle-double-down floating" aria-hidden="true"></i></span></h4>
                            <div className="text-muted mt-4">
                                <Link to="/" className="text-dark underline"><input type="checkbox" /> Electronics <span className="float-right text-muted">(51)</span> </Link>
                            </div>
                            <div className="mt-2">
                                <Link to="/" className="text-dark underline"><input type="checkbox" /> Electronic Accessories <span className="float-right text-muted">(14)</span> </Link>
                            </div>
                            <div className="mt-2">
                                <Link to="/" className="text-dark underline"><input type="checkbox" /> Home Appliances <span className="float-right text-muted">(8)</span> </Link>
                            </div>
                            <div className="mt-2">
                                <Link to="/" className="text-dark underline"><input type="checkbox" /> Clothing Store <span className="float-right text-muted">(400)</span> </Link>
                            </div>
                            <div className="mt-2">
                                <Link to="/" className="text-dark underline"><input type="checkbox" /> Health & Beauty <span className="float-right text-muted">(70)</span> </Link>
                            </div>
                            <div className="mt-2">
                                <Link to="/" className="text-dark underline"><input type="checkbox" /> Home & Lifestyle <span className="float-right text-muted">(207)</span> </Link>
                            </div>
                            <div className="mt-2">
                                <Link to="/" className="text-dark underline"><input type="checkbox" /> Watches, Bags & Jewellery <span className="float-right text-muted">(6)</span> </Link>
                            </div>
                            <div className="mt-2">
                                <Link to="/" className="text-dark underline"><input type="checkbox" /> Grocery <span className="float-right text-muted">(6)</span> </Link>
                            </div>
                            <div className="mt-2">
                                <Link to="/" className="text-dark underline"><input type="checkbox" /> Pharmacy <span className="float-right text-muted">(6)</span> </Link>
                            </div>
                            <div className="mt-2">
                                <Link to="/" className="text-dark underline"><input type="checkbox" /> Books & Stationary <span className="float-right text-muted">(6)</span> </Link>
                            </div>
                            <div className="mt-2">
                                <Link to="/" className="text-dark underline"><input type="checkbox" /> Sports & Outdoors <span className="float-right text-muted">(6)</span> </Link>
                            </div>
                            <div className="mt-2">
                                <Link to="/" className="text-dark underline"><input type="checkbox" /> Automotive <span className="float-right text-muted">(6)</span> </Link>
                            </div>
                            <div className="mt-2">
                                <Link to="/" className="text-dark underline"><input type="checkbox" /> Hardware & Tools <span className="float-right text-muted">(6)</span> </Link>
                            </div>
                            <div className="mt-2">
                                <Link to="/" className="text-dark underline"><input type="checkbox" /> Food & Restaurant <span className="float-right text-muted">(6)</span> </Link>
                            </div>
                        </div>
                        <div className="col-md-9 mt-5">
                            <div className="row">
                                <div className="col-md-3 mt-3">
                                    {/* <img src="imgs/cf9a45356e37e8b5496c09382789ff28.jpg" alt="" className="img-fluid" />
                                    <h5 className="font-weight-normal">Superb Bass Earphones</h5> */}
                                    <Link className="text-dark underline" to="/productdetails">
                                        <div class="card border-0 p_shadow" style={{width: "13rem"}}>
                                            <img class="card-img-top" src="imgs/cf9a45356e37e8b5496c09382789ff28.jpg" alt="Card image cap" />
                                            <div class="card-body">
                                                <h5 class="card-title">Superb Bass Earphones</h5>
                                                <p class="card-text">Rs.310</p>
                                                <strike className="mr-2">Rs.420</strike>
                                                <span>-26%</span>
                                            </div>
                                        </div>
                                    </Link>
                                </div>
                                <div className="col-md-3 mt-3">
                                    {/* <img src="imgs/cf9a45356e37e8b5496c09382789ff28.jpg" alt="" className="img-fluid" />
                                    <h5 className="font-weight-normal">Superb Bass Earphones</h5> */}
                                    <Link className="text-dark underline" to="/productdetails">
                                        <div class="card border-0 p_shadow" style={{width: "13rem"}}>
                                            <img class="card-img-top" src="imgs/cf9a45356e37e8b5496c09382789ff28.jpg" alt="Card image cap" />
                                            <div class="card-body">
                                                <h5 class="card-title">Superb Bass Earphones</h5>
                                                <p class="card-text">Rs.310</p>
                                                <strike className="mr-2">Rs.420</strike>
                                                <span>-26%</span>
                                            </div>
                                        </div>
                                    </Link>
                                </div>
                                <div className="col-md-3 mt-3">
                                    {/* <img src="imgs/cf9a45356e37e8b5496c09382789ff28.jpg" alt="" className="img-fluid" />
                                    <h5 className="font-weight-normal">Superb Bass Earphones</h5> */}
                                    <Link className="text-dark underline" to="/productdetails">
                                        <div class="card border-0 p_shadow" style={{width: "13rem"}}>
                                            <img class="card-img-top" src="imgs/cf9a45356e37e8b5496c09382789ff28.jpg" alt="Card image cap" />
                                            <div class="card-body">
                                                <h5 class="card-title">Superb Bass Earphones</h5>
                                                <p class="card-text">Rs.310</p>
                                                <strike className="mr-2">Rs.420</strike>
                                                <span>-26%</span>
                                            </div>
                                        </div>
                                    </Link>
                                </div>
                                <div className="col-md-3 mt-3">
                                    {/* <img src="imgs/cf9a45356e37e8b5496c09382789ff28.jpg" alt="" className="img-fluid" />
                                    <h5 className="font-weight-normal">Superb Bass Earphones</h5> */}
                                    <Link className="text-dark underline" to="/productdetails">
                                        <div class="card border-0 p_shadow" style={{width: "13rem"}}>
                                            <img class="card-img-top" src="imgs/cf9a45356e37e8b5496c09382789ff28.jpg" alt="Card image cap" />
                                            <div class="card-body">
                                                <h5 class="card-title">Superb Bass Earphones</h5>
                                                <p class="card-text">Rs.310</p>
                                                <strike className="mr-2">Rs.420</strike>
                                                <span>-26%</span>
                                            </div>
                                        </div>
                                    </Link>
                                </div>
                                <div className="col-md-3  mt-3">
                                    {/* <img src="imgs/cf9a45356e37e8b5496c09382789ff28.jpg" alt="" className="img-fluid" />
                                    <h5 className="font-weight-normal">Superb Bass Earphones</h5> */}
                                    <Link className="text-dark underline" to="/productdetails">
                                        <div class="card border-0 p_shadow" style={{width: "13rem"}}>
                                            <img class="card-img-top" src="imgs/cf9a45356e37e8b5496c09382789ff28.jpg" alt="Card image cap" />
                                            <div class="card-body">
                                                <h5 class="card-title">Superb Bass Earphones</h5>
                                                <p class="card-text">Rs.310</p>
                                                <strike className="mr-2">Rs.420</strike>
                                                <span>-26%</span>
                                            </div>
                                        </div>
                                    </Link>
                                </div>
                                <div className="col-md-3 mt-3">
                                    {/* <img src="imgs/cf9a45356e37e8b5496c09382789ff28.jpg" alt="" className="img-fluid" />
                                    <h5 className="font-weight-normal">Superb Bass Earphones</h5> */}
                                    <Link className="text-dark underline" to="/productdetails">
                                        <div class="card border-0 p_shadow" style={{width: "13rem"}}>
                                            <img class="card-img-top" src="imgs/cf9a45356e37e8b5496c09382789ff28.jpg" alt="Card image cap" />
                                            <div class="card-body">
                                                <h5 class="card-title">Superb Bass Earphones</h5>
                                                <p class="card-text">Rs.310</p>
                                                <strike className="mr-2">Rs.420</strike>
                                                <span>-26%</span>
                                            </div>
                                        </div>
                                    </Link>
                                </div>
                                <div className="col-md-3 mt-3">
                                    {/* <img src="imgs/cf9a45356e37e8b5496c09382789ff28.jpg" alt="" className="img-fluid" />
                                    <h5 className="font-weight-normal">Superb Bass Earphones</h5> */}
                                    <Link className="text-dark underline" to="/productdetails">
                                        <div class="card border-0 p_shadow" style={{width: "13rem"}}>
                                            <img class="card-img-top" src="imgs/cf9a45356e37e8b5496c09382789ff28.jpg" alt="Card image cap" />
                                            <div class="card-body">
                                                <h5 class="card-title">Superb Bass Earphones</h5>
                                                <p class="card-text">Rs.310</p>
                                                <strike className="mr-2">Rs.420</strike>
                                                <span>-26%</span>
                                            </div>
                                        </div>
                                    </Link>
                                </div>
                                <div className="col-md-3 mt-3">
                                    {/* <img src="imgs/cf9a45356e37e8b5496c09382789ff28.jpg" alt="" className="img-fluid" />
                                    <h5 className="font-weight-normal">Superb Bass Earphones</h5> */}
                                    <Link className="text-dark underline" to="/productdetails">
                                        <div class="card border-0 p_shadow" style={{width: "13rem"}}>
                                            <img class="card-img-top" src="imgs/cf9a45356e37e8b5496c09382789ff28.jpg" alt="Card image cap" />
                                            <div class="card-body">
                                                <h5 class="card-title">Superb Bass Earphones</h5>
                                                <p class="card-text">Rs.310</p>
                                                <strike className="mr-2">Rs.420</strike>
                                                <span>-26%</span>
                                            </div>
                                        </div>
                                    </Link>
                                </div>
                                <div className="col-md-3  mt-3">
                                    {/* <img src="imgs/cf9a45356e37e8b5496c09382789ff28.jpg" alt="" className="img-fluid" />
                                    <h5 className="font-weight-normal">Superb Bass Earphones</h5> */}
                                    <Link className="text-dark underline" to="/productdetails">
                                        <div class="card border-0 p_shadow" style={{width: "13rem"}}>
                                            <img class="card-img-top" src="imgs/cf9a45356e37e8b5496c09382789ff28.jpg" alt="Card image cap" />
                                            <div class="card-body">
                                                <h5 class="card-title">Superb Bass Earphones</h5>
                                                <p class="card-text">Rs.310</p>
                                                <strike className="mr-2">Rs.420</strike>
                                                <span>-26%</span>
                                            </div>
                                        </div>
                                    </Link>
                                </div>
                                <div className="col-md-3 mt-3">
                                    {/* <img src="imgs/cf9a45356e37e8b5496c09382789ff28.jpg" alt="" className="img-fluid" />
                                    <h5 className="font-weight-normal">Superb Bass Earphones</h5> */}
                                    <Link className="text-dark underline" to="/productdetails">
                                        <div class="card border-0 p_shadow" style={{width: "13rem"}}>
                                            <img class="card-img-top" src="imgs/cf9a45356e37e8b5496c09382789ff28.jpg" alt="Card image cap" />
                                            <div class="card-body">
                                                <h5 class="card-title">Superb Bass Earphones</h5>
                                                <p class="card-text">Rs.310</p>
                                                <strike className="mr-2">Rs.420</strike>
                                                <span>-26%</span>
                                            </div>
                                        </div>
                                    </Link>
                                </div>
                                <div className="col-md-3 mt-3">
                                    {/* <img src="imgs/cf9a45356e37e8b5496c09382789ff28.jpg" alt="" className="img-fluid" />
                                    <h5 className="font-weight-normal">Superb Bass Earphones</h5> */}
                                    <Link className="text-dark underline" to="/productdetails">
                                        <div class="card border-0 p_shadow" style={{width: "13rem"}}>
                                            <img class="card-img-top" src="imgs/cf9a45356e37e8b5496c09382789ff28.jpg" alt="Card image cap" />
                                            <div class="card-body">
                                                <h5 class="card-title">Superb Bass Earphones</h5>
                                                <p class="card-text">Rs.310</p>
                                                <strike className="mr-2">Rs.420</strike>
                                                <span>-26%</span>
                                            </div>
                                        </div>
                                    </Link>
                                </div>
                                <div className="col-md-3 mt-3">
                                    {/* <img src="imgs/cf9a45356e37e8b5496c09382789ff28.jpg" alt="" className="img-fluid" />
                                    <h5 className="font-weight-normal">Superb Bass Earphones</h5> */}
                                    <Link className="text-dark underline" to="/productdetails">
                                        <div class="card border-0 p_shadow" style={{width: "13rem"}}>
                                            <img class="card-img-top" src="imgs/cf9a45356e37e8b5496c09382789ff28.jpg" alt="Card image cap" />
                                            <div class="card-body">
                                                <h5 class="card-title">Superb Bass Earphones</h5>
                                                <p class="card-text">Rs.310</p>
                                                <strike className="mr-2">Rs.420</strike>
                                                <span>-26%</span>
                                            </div>
                                        </div>
                                    </Link>
                                </div>
                                <div className="col-md-3  mt-3">
                                    {/* <img src="imgs/cf9a45356e37e8b5496c09382789ff28.jpg" alt="" className="img-fluid" />
                                    <h5 className="font-weight-normal">Superb Bass Earphones</h5> */}
                                    <Link className="text-dark underline" to="/productdetails">
                                        <div class="card border-0 p_shadow" style={{width: "13rem"}}>
                                            <img class="card-img-top" src="imgs/cf9a45356e37e8b5496c09382789ff28.jpg" alt="Card image cap" />
                                            <div class="card-body">
                                                <h5 class="card-title">Superb Bass Earphones</h5>
                                                <p class="card-text">Rs.310</p>
                                                <strike className="mr-2">Rs.420</strike>
                                                <span>-26%</span>
                                            </div>
                                        </div>
                                    </Link>
                                </div>
                                <div className="col-md-3 mt-3">
                                    {/* <img src="imgs/cf9a45356e37e8b5496c09382789ff28.jpg" alt="" className="img-fluid" />
                                    <h5 className="font-weight-normal">Superb Bass Earphones</h5> */}
                                    <Link className="text-dark underline" to="/productdetails">
                                        <div class="card border-0 p_shadow" style={{width: "13rem"}}>
                                            <img class="card-img-top" src="imgs/cf9a45356e37e8b5496c09382789ff28.jpg" alt="Card image cap" />
                                            <div class="card-body">
                                                <h5 class="card-title">Superb Bass Earphones</h5>
                                                <p class="card-text">Rs.310</p>
                                                <strike className="mr-2">Rs.420</strike>
                                                <span>-26%</span>
                                            </div>
                                        </div>
                                    </Link>
                                </div>
                                <div className="col-md-3 mt-3">
                                    {/* <img src="imgs/cf9a45356e37e8b5496c09382789ff28.jpg" alt="" className="img-fluid" />
                                    <h5 className="font-weight-normal">Superb Bass Earphones</h5> */}
                                    <Link className="text-dark underline" to="/productdetails">
                                        <div class="card border-0 p_shadow" style={{width: "13rem"}}>
                                            <img class="card-img-top" src="imgs/cf9a45356e37e8b5496c09382789ff28.jpg" alt="Card image cap" />
                                            <div class="card-body">
                                                <h5 class="card-title">Superb Bass Earphones</h5>
                                                <p class="card-text">Rs.310</p>
                                                <strike className="mr-2">Rs.420</strike>
                                                <span>-26%</span>
                                            </div>
                                        </div>
                                    </Link>
                                </div>
                                <div className="col-md-3 mt-3">
                                    {/* <img src="imgs/cf9a45356e37e8b5496c09382789ff28.jpg" alt="" className="img-fluid" />
                                    <h5 className="font-weight-normal">Superb Bass Earphones</h5> */}
                                    <Link className="text-dark underline" to="/productdetails">
                                        <div class="card border-0 p_shadow" style={{width: "13rem"}}>
                                            <img class="card-img-top" src="imgs/cf9a45356e37e8b5496c09382789ff28.jpg" alt="Card image cap" />
                                            <div class="card-body">
                                                <h5 class="card-title">Superb Bass Earphones</h5>
                                                <p class="card-text">Rs.310</p>
                                                <strike className="mr-2">Rs.420</strike>
                                                <span>-26%</span>
                                            </div>
                                        </div>
                                    </Link>
                                </div>
                                <div className="col-md-3  mt-3">
                                    {/* <img src="imgs/cf9a45356e37e8b5496c09382789ff28.jpg" alt="" className="img-fluid" />
                                    <h5 className="font-weight-normal">Superb Bass Earphones</h5> */}
                                    <Link className="text-dark underline" to="/productdetails">
                                        <div class="card border-0 p_shadow" style={{width: "13rem"}}>
                                            <img class="card-img-top" src="imgs/cf9a45356e37e8b5496c09382789ff28.jpg" alt="Card image cap" />
                                            <div class="card-body">
                                                <h5 class="card-title">Superb Bass Earphones</h5>
                                                <p class="card-text">Rs.310</p>
                                                <strike className="mr-2">Rs.420</strike>
                                                <span>-26%</span>
                                            </div>
                                        </div>
                                    </Link>
                                </div>
                                <div className="col-md-3 mt-3">
                                    {/* <img src="imgs/cf9a45356e37e8b5496c09382789ff28.jpg" alt="" className="img-fluid" />
                                    <h5 className="font-weight-normal">Superb Bass Earphones</h5> */}
                                    <Link className="text-dark underline" to="/productdetails">
                                        <div class="card border-0 p_shadow" style={{width: "13rem"}}>
                                            <img class="card-img-top" src="imgs/cf9a45356e37e8b5496c09382789ff28.jpg" alt="Card image cap" />
                                            <div class="card-body">
                                                <h5 class="card-title">Superb Bass Earphones</h5>
                                                <p class="card-text">Rs.310</p>
                                                <strike className="mr-2">Rs.420</strike>
                                                <span>-26%</span>
                                            </div>
                                        </div>
                                    </Link>
                                </div>
                                <div className="col-md-3 mt-3">
                                    {/* <img src="imgs/cf9a45356e37e8b5496c09382789ff28.jpg" alt="" className="img-fluid" />
                                    <h5 className="font-weight-normal">Superb Bass Earphones</h5> */}
                                    <Link className="text-dark underline" to="/productdetails">
                                        <div class="card border-0 p_shadow" style={{width: "13rem"}}>
                                            <img class="card-img-top" src="imgs/cf9a45356e37e8b5496c09382789ff28.jpg" alt="Card image cap" />
                                            <div class="card-body">
                                                <h5 class="card-title">Superb Bass Earphones</h5>
                                                <p class="card-text">Rs.310</p>
                                                <strike className="mr-2">Rs.420</strike>
                                                <span>-26%</span>
                                            </div>
                                        </div>
                                    </Link>
                                </div>
                                <div className="col-md-3 mt-3">
                                    {/* <img src="imgs/cf9a45356e37e8b5496c09382789ff28.jpg" alt="" className="img-fluid" />
                                    <h5 className="font-weight-normal">Superb Bass Earphones</h5> */}
                                    <Link className="text-dark underline" to="/productdetails">
                                        <div class="card border-0 p_shadow" style={{width: "13rem"}}>
                                            <img class="card-img-top" src="imgs/cf9a45356e37e8b5496c09382789ff28.jpg" alt="Card image cap" />
                                            <div class="card-body">
                                                <h5 class="card-title">Superb Bass Earphones</h5>
                                                <p class="card-text">Rs.310</p>
                                                <strike className="mr-2">Rs.420</strike>
                                                <span>-26%</span>
                                            </div>
                                        </div>
                                    </Link>
                                </div>
                                <div className="col-md-3  mt-3">
                                    {/* <img src="imgs/cf9a45356e37e8b5496c09382789ff28.jpg" alt="" className="img-fluid" />
                                    <h5 className="font-weight-normal">Superb Bass Earphones</h5> */}
                                    <Link className="text-dark underline" to="/productdetails">
                                        <div class="card border-0 p_shadow" style={{width: "13rem"}}>
                                            <img class="card-img-top" src="imgs/cf9a45356e37e8b5496c09382789ff28.jpg" alt="Card image cap" />
                                            <div class="card-body">
                                                <h5 class="card-title">Superb Bass Earphones</h5>
                                                <p class="card-text">Rs.310</p>
                                                <strike className="mr-2">Rs.420</strike>
                                                <span>-26%</span>
                                            </div>
                                        </div>
                                    </Link>
                                </div>
                                <div className="col-md-3 mt-3">
                                    {/* <img src="imgs/cf9a45356e37e8b5496c09382789ff28.jpg" alt="" className="img-fluid" />
                                    <h5 className="font-weight-normal">Superb Bass Earphones</h5> */}
                                    <Link className="text-dark underline" to="/productdetails">
                                        <div class="card border-0 p_shadow" style={{width: "13rem"}}>
                                            <img class="card-img-top" src="imgs/cf9a45356e37e8b5496c09382789ff28.jpg" alt="Card image cap" />
                                            <div class="card-body">
                                                <h5 class="card-title">Superb Bass Earphones</h5>
                                                <p class="card-text">Rs.310</p>
                                                <strike className="mr-2">Rs.420</strike>
                                                <span>-26%</span>
                                            </div>
                                        </div>
                                    </Link>
                                </div>
                                <div className="col-md-3 mt-3">
                                    {/* <img src="imgs/cf9a45356e37e8b5496c09382789ff28.jpg" alt="" className="img-fluid" />
                                    <h5 className="font-weight-normal">Superb Bass Earphones</h5> */}
                                    <Link className="text-dark underline" to="/productdetails">
                                        <div class="card border-0 p_shadow" style={{width: "13rem"}}>
                                            <img class="card-img-top" src="imgs/cf9a45356e37e8b5496c09382789ff28.jpg" alt="Card image cap" />
                                            <div class="card-body">
                                                <h5 class="card-title">Superb Bass Earphones</h5>
                                                <p class="card-text">Rs.310</p>
                                                <strike className="mr-2">Rs.420</strike>
                                                <span>-26%</span>
                                            </div>
                                        </div>
                                    </Link>
                                </div>
                                <div className="col-md-3 mt-3">
                                    {/* <img src="imgs/cf9a45356e37e8b5496c09382789ff28.jpg" alt="" className="img-fluid" />
                                    <h5 className="font-weight-normal">Superb Bass Earphones</h5> */}
                                    <Link className="text-dark underline" to="/productdetails">
                                        <div class="card border-0 p_shadow" style={{width: "13rem"}}>
                                            <img class="card-img-top" src="imgs/cf9a45356e37e8b5496c09382789ff28.jpg" alt="Card image cap" />
                                            <div class="card-body">
                                                <h5 class="card-title">Superb Bass Earphones</h5>
                                                <p class="card-text">Rs.310</p>
                                                <strike className="mr-2">Rs.420</strike>
                                                <span>-26%</span>
                                            </div>
                                        </div>
                                    </Link>
                                </div> 
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default shop

