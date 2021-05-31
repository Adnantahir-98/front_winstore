import React from 'react'
import { Link } from 'react-router-dom'


function electronicdevices() {
    return (
        <div>
            <section>
                <div className="container border-top">
                    <div className="row">
                    {/* Shop Page Side Bar  */}
                    <div className="col-md-3 bg-white px-3 mt-5 py-2">
                            <h2 className="pt-2 font-weight-normal">Categories</h2>
                            <hr />
                            <h4 className="font-weight-bold text-muted disabled border-bottom pb-2">Electronics <span className="float-right text-muted"> <i class="fa fa-angle-double-down floating" aria-hidden="true"></i></span></h4>
                            <div className="text-muted mt-4">
                                <Link to="/" className="text-dark underline"><input type="checkbox" /> Mobiles <span className="float-right text-muted">(51)</span> </Link>
                            </div>
                            <div className="mt-2">
                                <Link to="/" className="text-dark underline"><input type="checkbox" /> Laptops <span className="float-right text-muted">(14)</span> </Link>
                            </div>
                            <div className="mt-2">
                                <Link to="/" className="text-dark underline"><input type="checkbox" /> Cameras <span className="float-right text-muted">(10)</span> </Link>
                            </div>
                            <div className="mt-2">
                                <Link to="/" className="text-dark underline"><input type="checkbox" /> Tablets <span className="float-right text-muted">(8)</span> </Link>
                            </div>
                            <div className="mt-2">
                                <Link to="/" className="text-dark underline"><input type="checkbox" /> Desktop PC's <span className="float-right text-muted">(400)</span> </Link>
                            </div>
                            <div className="mt-2">
                                <Link to="/" className="text-dark underline"><input type="checkbox" /> Gaming Consoles <span className="float-right text-muted">(5)</span> </Link>
                            </div>
                            <div className="mt-2">
                                <Link to="/" className="text-dark underline"><input type="checkbox" /> Telephones <span className="float-right text-muted">(7)</span> </Link>
                            </div>
                            <div className="mt-2">
                                <Link to="/" className="text-dark underline"><input type="checkbox" /> Drones <span className="float-right text-muted">(6)</span> </Link>
                            </div>
                        </div>
                        <div className="col-md-9 mt-5">
                            <div className="row">
                                <div className="col-md-3">
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
                                <div className="col-md-3">
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
                                <div className="col-md-3">
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
                                <div className="col-md-3">
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

export default electronicdevices
