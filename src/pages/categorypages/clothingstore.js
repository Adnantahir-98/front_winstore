import React from 'react'
import { Link } from 'react-router-dom'


function clothingstore() {
    return (
        <div>
            <section>
                <div className="container border-top">
                    <div className="row">
                    {/* Shop Page Side Bar  */}
                        <div className="col-md-3 bg-white px-3 mt-5">
                            <h2 className="pt-2">Categories </h2>
                            <hr />
                            <h4 className="pt-2 font-weight-bold text-muted disabled border-bottom pb-2">Clothing Store <span className="float-right text-muted"> <i class="fa fa-angle-double-down floating" aria-hidden="true"></i></span></h4>
                            <div className="text-muted mt-4 mb-2">
                                <Link to="/" className="text-dark underline font-weight-bold"><input type="checkbox" /> Men's <span className="float-right text-muted">(90)</span> </Link>
                            </div>
                            {/* Sub Categories of Men's Clothing Store */}
                                <div className="text-muted ml-2 border-bottom">
                                    <Link to="/" className="text-dark underline"><input type="checkbox" /> T-Shirts & Tanks <span className="float-right text-muted">(121)</span> </Link>
                                </div>
                                <div className="text-muted ml-2 border-bottom">
                                    <Link to="/" className="text-dark underline"><input type="checkbox" /> Shirts & Polo <span className="float-right text-muted">(200)</span> </Link>
                                </div>
                                <div className="text-muted ml-2 border-bottom">
                                    <Link to="/" className="text-dark underline"><input type="checkbox" /> Jeans, Pants & Shorts <span className="float-right text-muted">(76)</span> </Link>
                                </div>
                                <div className="text-muted ml-2 border-bottom">
                                    <Link to="/" className="text-dark underline"><input type="checkbox" /> Traditional Clothing <span className="float-right text-muted">(55)</span> </Link>
                                </div>
                                <div className="text-muted ml-2 border-bottom">
                                    <Link to="/" className="text-dark underline"><input type="checkbox" /> Rain Coat <span className="float-right text-muted">(5)</span> </Link>
                                </div>
                                <div className="text-muted ml-2 border-bottom">
                                    <Link to="/" className="text-dark underline"><input type="checkbox" /> Kurtas & Shalwar Kameez <span className="float-right text-muted">(19)</span> </Link>
                                </div>
                                <div className="text-muted ml-2 border-bottom">
                                    <Link to="/" className="text-dark underline"><input type="checkbox" /> Suits <span className="float-right text-muted">(11)</span> </Link>
                                </div>
                                <div className="text-muted ml-2 border-bottom">
                                    <Link to="/" className="text-dark underline"><input type="checkbox" /> Winter Clothing <span className="float-right text-muted">(14)</span> </Link>
                                </div>
                                <div className="text-muted ml-2 border-bottom">
                                    <Link to="/" className="text-dark underline"><input type="checkbox" /> Inner Wear <span className="float-right text-muted">(8)</span> </Link>
                                </div>
                                <div className="text-muted ml-2 border-bottom">
                                    <Link to="/" className="text-dark underline"><input type="checkbox" /> Shoes <span className="float-right text-muted">(25)</span> </Link>
                                </div>
                                <div className="text-muted ml-2 border-bottom">
                                    <Link to="/" className="text-dark underline"><input type="checkbox" /> Boys Clothing <span className="float-right text-muted">(19)</span> </Link>
                                </div>

                            {/* Women's Section */}
                            <div className="mt-3 mb-2">
                            <Link to="/" className="text-dark underline font-weight-bold"><input type="checkbox" /> Women's <span className="float-right text-muted">(90)</span> </Link>
                            </div>
                            {/* Sub Categories of Men's Clothing Store */}
                                <div className="text-muted ml-2 border-bottom">
                                    <Link to="/" className="text-dark underline"><input type="checkbox" /> Unstitched Fabric <span className="float-right text-muted">(29)</span> </Link>
                                </div>
                                <div className="text-muted ml-2 border-bottom">
                                    <Link to="/" className="text-dark underline"><input type="checkbox" /> Cosmetics <span className="float-right text-muted">(27)</span> </Link>
                                </div>
                                <div className="text-muted ml-2 border-bottom">
                                    <Link to="/" className="text-dark underline"><input type="checkbox" /> Bras, Penties & Lingerie <span className="float-right text-muted">(16)</span> </Link>
                                </div>
                                <div className="text-muted ml-2 border-bottom">
                                    <Link to="/" className="text-dark underline"><input type="checkbox" /> Traditional Clothing <span className="float-right text-muted">(93)</span> </Link>
                                </div>
                                <div className="text-muted ml-2 border-bottom">
                                    <Link to="/" className="text-dark underline"><input type="checkbox" /> Rain Coat <span className="float-right text-muted">(9)</span> </Link>
                                </div>
                                <div className="text-muted ml-2 border-bottom">
                                    <Link to="/" className="text-dark underline"><input type="checkbox" /> Kurtas & Shalwar Kameez <span className="float-right text-muted">(39)</span> </Link>
                                </div>
                                <div className="text-muted ml-2 border-bottom">
                                    <Link to="/" className="text-dark underline"><input type="checkbox" /> Winter Clothing <span className="float-right text-muted">(49)</span> </Link>
                                </div>
                                <div className="text-muted ml-2 border-bottom">
                                    <Link to="/" className="text-dark underline"><input type="checkbox" /> Sleep Wear & Inner Wear <span className="float-right text-muted">(13)</span> </Link>
                                </div>
                                <div className="text-muted ml-2 border-bottom">
                                    <Link to="/" className="text-dark underline"><input type="checkbox" /> Shoes <span className="float-right text-muted">(79)</span> </Link>
                                </div>
                                <div className="text-muted ml-2 border-bottom mb-3">
                                    <Link to="/" className="text-dark underline"><input type="checkbox" /> Girls Clothing <span className="float-right text-muted">(17)</span> </Link>
                                </div>
                            <div>
                            <Link to="/" className="text-dark underline"><input type="checkbox" /> Kid's <span className="float-right text-muted">(90)</span> </Link>
                            </div>
                            <div>
                            <Link to="/" className="text-dark underline"><input type="checkbox" /> Teen's <span className="float-right text-muted">(90)</span> </Link>
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

export default clothingstore
