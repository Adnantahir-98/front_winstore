import React from 'react'
import { Link } from 'react-router-dom'


function foodrestaurant() {
    return (
        <div>
            <section>
                <div className="container border-top">
                    <div className="row">
                    {/* Shop Page Side Bar  */}
                        <div className="col-md-3 bg-white px-3 mt-5">
                            <h2 className="pt-2">Categories </h2>
                            <hr />
                            <h4 className="pt-2 font-weight-bold text-muted disabled border-bottom pb-2">Food & Restaurant <span className="float-right text-muted"> <i class="fa fa-angle-double-down floating" aria-hidden="true"></i></span></h4>
                            <div className="text-muted mt-3 mb-2">
                                <Link to="/" className="text-dark underline font-weight-bold"><input type="checkbox" /> Fast Food <span className="float-right text-muted">(15)</span> </Link>
                            </div>
                            {/* Sub Categories of Men's Clothing Store */}
                                {/* Sub Categories of Men's Clothing Store */}
                                <div className="text-muted ml-2 border-bottom">
                                    <Link to="/" className="text-dark underline"><input type="checkbox" /> Pizza <span className="float-right text-muted">(112)</span> </Link>
                                </div>
                                <div className="text-muted ml-2 border-bottom">
                                    <Link to="/" className="text-dark underline"><input type="checkbox" /> Burger <span className="float-right text-muted">(250)</span> </Link>
                                </div>
                                <div className="text-muted ml-2 border-bottom">
                                    <Link to="/" className="text-dark underline"><input type="checkbox" /> Shawarma <span className="float-right text-muted">(76)</span> </Link>
                                </div>
                                <div className="text-muted ml-2 border-bottom">
                                    <Link to="/" className="text-dark underline"><input type="checkbox" /> Paratha Roll <span className="float-right text-muted">(15)</span> </Link>
                                </div>
                                <div className="text-muted ml-2 border-bottom">
                                    <Link to="/" className="text-dark underline"><input type="checkbox" /> Sandwich <span className="float-right text-muted">(10)</span> </Link>
                                </div>
                                <div className="text-muted ml-2 border-bottom">
                                    <Link to="/" className="text-dark underline"><input type="checkbox" /> Fries <span className="float-right text-muted">(6)</span> </Link>
                                </div>
                                <div className="text-muted ml-2 border-bottom">
                                    <Link to="/" className="text-dark underline"><input type="checkbox" /> Pasta <span className="float-right text-muted">(110)</span> </Link>
                                </div>
                                <div className="text-muted ml-2 border-bottom">
                                    <Link to="/" className="text-dark underline"><input type="checkbox" /> Steaks <span className="float-right text-muted">(40)</span> </Link>
                                </div>
                                <div className="text-muted ml-2 border-bottom">
                                    <Link to="/" className="text-dark underline"><input type="checkbox" /> Fish Cracker <span className="float-right text-muted">(25)</span> </Link>
                                </div>
                                <div className="text-muted ml-2 border-bottom">
                                    <Link to="/" className="text-dark underline"><input type="checkbox" /> Nuggets <span className="float-right text-muted">(1000)</span> </Link>
                                </div>
                                <div className="text-muted ml-2 border-bottom">
                                    <Link to="/" className="text-dark underline"><input type="checkbox" /> Platter <span className="float-right text-muted">(12)</span> </Link>
                                </div>
                                <div className="text-muted ml-2 border-bottom">
                                    <Link to="/" className="text-dark underline"><input type="checkbox" /> Chicken Piece <span className="float-right text-muted">(81)</span> </Link>
                                </div>

                            <div className="text-muted mt-4 mb-2">
                            <Link to="/" className="text-dark underline font-weight-bold"><input type="checkbox" /> Pakistani Cuisine <span className="float-right text-muted">(14)</span> </Link>
                            </div>
                                {/* Sub Categories of Pakistani Cuisine */}
                                <div className="text-muted ml-2 border-bottom">
                                    <Link to="/" className="text-dark underline"><input type="checkbox" /> Pulao <span className="float-right text-muted">(76)</span> </Link>
                                </div>
                                <div className="text-muted ml-2 border-bottom">
                                    <Link to="/" className="text-dark underline"><input type="checkbox" /> Karachi <span className="float-right text-muted">(15)</span> </Link>
                                </div>
                                <div className="text-muted ml-2 border-bottom">
                                    <Link to="/" className="text-dark underline"><input type="checkbox" /> Handi <span className="float-right text-muted">(10)</span> </Link>
                                </div>
                                <div className="text-muted ml-2 border-bottom">
                                    <Link to="/" className="text-dark underline"><input type="checkbox" /> Tawa Piece <span className="float-right text-muted">(6)</span> </Link>
                                </div>
                                <div className="text-muted ml-2 border-bottom">
                                    <Link to="/" className="text-dark underline"><input type="checkbox" /> Haleem <span className="float-right text-muted">(10)</span> </Link>
                                </div>
                                <div className="text-muted ml-2 border-bottom">
                                    <Link to="/" className="text-dark underline"><input type="checkbox" /> Korma <span className="float-right text-muted">(40)</span> </Link>
                                </div>
                                <div className="text-muted ml-2 border-bottom">
                                    <Link to="/" className="text-dark underline"><input type="checkbox" /> Bar B.Q <span className="float-right text-muted">(25)</span> </Link>
                                </div>
                                <div className="text-muted ml-2 border-bottom">
                                    <Link to="/" className="text-dark underline"><input type="checkbox" /> Pani Puri <span className="float-right text-muted">(200)</span> </Link>
                                </div>
                                <div className="text-muted ml-2 border-bottom">
                                    <Link to="/" className="text-dark underline"><input type="checkbox" /> Chest Piece & Leg Piece <span className="float-right text-muted">(12)</span> </Link>
                                </div>
                                <div className="text-muted ml-2 border-bottom">
                                    <Link to="/" className="text-dark underline"><input type="checkbox" /> Fried Fish <span className="float-right text-muted">(81)</span> </Link>
                                </div>
                                <div className="text-muted ml-2 border-bottom">
                                    <Link to="/" className="text-dark underline"><input type="checkbox" /> Grilled Fish <span className="float-right text-muted">(4)</span> </Link>
                                </div>
                                <div className="text-muted ml-2 border-bottom">
                                    <Link to="/" className="text-dark underline"><input type="checkbox" /> Seekh Kabab <span className="float-right text-muted">(14)</span> </Link>
                                </div>
                                <div className="text-muted ml-2 border-bottom">
                                    <Link to="/" className="text-dark underline"><input type="checkbox" /> Malai Boti & Tikka Boti <span className="float-right text-muted">(18)</span> </Link>
                                </div>
                                <div className="text-muted ml-2 border-bottom">
                                    <Link to="/" className="text-dark underline"><input type="checkbox" /> Paratha Roll <span className="float-right text-muted">(8)</span> </Link>
                                </div>

                            <div className="text-muted mt-4 mb-2">
                                <Link to="/" className="text-dark underline font-weight-bold"><input type="checkbox" /> Sides <span className="float-right text-muted">(5)</span> </Link>
                            </div>
                                {/* Sub Categories of Pakistani Cuisine */}
                                <div className="text-muted ml-2 border-bottom">
                                    <Link to="/" className="text-dark underline"><input type="checkbox" /> Raita <span className="float-right text-muted">(3)</span> </Link>
                                </div>
                                <div className="text-muted ml-2 border-bottom">
                                    <Link to="/" className="text-dark underline"><input type="checkbox" /> Salad <span className="float-right text-muted">(15)</span> </Link>
                                </div>
                                <div className="text-muted ml-2 border-bottom">
                                    <Link to="/" className="text-dark underline"><input type="checkbox" /> Shami Kabab <span className="float-right text-muted">(10)</span> </Link>
                                </div>
                                <div className="text-muted ml-2 border-bottom">
                                    <Link to="/" className="text-dark underline"><input type="checkbox" /> Zarda <span className="float-right text-muted">(6)</span> </Link>
                                </div>
                                <div className="text-muted ml-2 border-bottom">
                                    <Link to="/" className="text-dark underline"><input type="checkbox" /> Extra Rice <span className="float-right text-muted">(10)</span> </Link>
                                </div>

                            <div className="text-muted mt-4 mb-2">
                                <Link to="/" className="text-dark underline font-weight-bold"><input type="checkbox" /> Beverages <span className="float-right text-muted">(5)</span> </Link>
                            </div>
                                {/* Sub Categories of Pakistani Cuisine */}
                                <div className="text-muted ml-2 border-bottom">
                                    <Link to="/" className="text-dark underline"><input type="checkbox" /> Juices & Shake <span className="float-right text-muted">(3)</span> </Link>
                                </div>
                                <div className="text-muted ml-2 border-bottom">
                                    <Link to="/" className="text-dark underline"><input type="checkbox" /> Coffee & Tea <span className="float-right text-muted">(15)</span> </Link>
                                </div>

                            <div className="text-muted mt-4 mb-2">
                                <Link to="/" className="text-dark underline font-weight-bold"><input type="checkbox" /> Chinese Cuisine <span className="float-right text-muted">(5)</span> </Link>
                            </div>
                                {/* Sub Categories of Pakistani Cuisine */}
                                <div className="text-muted ml-2 border-bottom">
                                    <Link to="/" className="text-dark underline"><input type="checkbox" /> Chicken Manchurian <span className="float-right text-muted">(3)</span> </Link>
                                </div>
                                <div className="text-muted ml-2 border-bottom">
                                    <Link to="/" className="text-dark underline"><input type="checkbox" /> Kung Pao Chicken <span className="float-right text-muted">(15)</span> </Link>
                                </div>
                                <div className="text-muted ml-2 border-bottom">
                                    <Link to="/" className="text-dark underline"><input type="checkbox" /> Chicken Chilli Dry <span className="float-right text-muted">(15)</span> </Link>
                                </div>
                                <div className="text-muted ml-2 border-bottom">
                                    <Link to="/" className="text-dark underline"><input type="checkbox" /> Soup <span className="float-right text-muted">(15)</span> </Link>
                                </div>
                                <div className="text-muted ml-2 border-bottom">
                                    <Link to="/" className="text-dark underline"><input type="checkbox" /> Noodles <span className="float-right text-muted">(15)</span> </Link>
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

export default foodrestaurant
