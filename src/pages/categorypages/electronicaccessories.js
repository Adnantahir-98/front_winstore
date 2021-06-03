import React from 'react'
import { Link } from 'react-router-dom'


function electronicaccessories() {
    return (
        <div>
            <section>
                <div className="container border-top">
                    <div className="row">
                    {/* Shop Page Side Bar  */}
                        <div className="col-md-3 bg-white px-3 mt-5 py-2">
                            <h2 className="pt-2 font-weight-normal">Categories </h2>
                            <hr />
                            <h4 className="pt-2 font-weight-normal text-muted disabled border-bottom pb-2">Electronic Accessories <span className="float-right text-muted"> <i class="fa fa-angle-double-down floating" aria-hidden="true"></i></span></h4>
                            <div className="text-muted mt-4">
                                <Link to="/" className="text-dark underline"><input type="checkbox" /> Ointment & Gells <span className="float-right text-muted">(5)</span> </Link>
                            </div>
                            <div className="mt-2">
                                <Link to="/" className="text-dark underline"><input type="checkbox" /> Injections & Drips <span className="float-right text-muted">(7)</span> </Link>
                            </div>
                            <div className="mt-2">
                                <Link to="/" className="text-dark underline"><input type="checkbox" /> Syrings & Drip Sets <span className="float-right text-muted">(9)</span> </Link>
                            </div>
                            <div className="mt-2">
                                <Link to="/" className="text-dark underline"><input type="checkbox" /> Tablets & Drops <span className="float-right text-muted">(700)</span> </Link>
                            </div>
                            <div className="mt-2">
                                <Link to="/" className="text-dark underline"><input type="checkbox" /> Liquid & Pyodine <span className="float-right text-muted">(70)</span> </Link>
                            </div>
                            <div className="mt-2">
                                <Link to="/" className="text-dark underline"><input type="checkbox" /> Face Mask & Gloves <span className="float-right text-muted">(25)</span> </Link>
                            </div>
                            <div className="mt-2">
                                <Link to="/" className="text-dark underline"><input type="checkbox" /> Cotton & Bandages <span className="float-right text-muted">(13)</span> </Link>
                            </div>
                            <div className="mt-2">
                                <Link to="/" className="text-dark underline"><input type="checkbox" /> Syrup & Suspensions <span className="float-right text-muted">(95)</span> </Link>
                            </div>
                            <div className="mt-2">
                                <Link to="/" className="text-dark underline"><input type="checkbox" /> Gadgets <span className="float-right text-muted">(21)</span> </Link>
                            </div>
                            <div className="mt-2">
                                <Link to="/" className="text-dark underline"><input type="checkbox" /> Kits & Strips <span className="float-right text-muted">(8)</span> </Link>
                            </div>
                            <div className="mt-2">
                                <Link to="/" className="text-dark underline"><input type="checkbox" /> Medical Equipments <span className="float-right text-muted">(17)</span> </Link>
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

export default electronicaccessories
