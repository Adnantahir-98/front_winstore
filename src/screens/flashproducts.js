import React from 'react'
import { Link } from 'react-router-dom'


function catproducts() {
    return (
        <div className="">


            <section className="bg-light pt-3 pb-3">
                <div className="container">
                    <div className="row m-auto">
                        <div className="col-md-3">
                            <div className="p_shadow bg-white rounded-lg py-2">
                                <Link className="text-dark underline" to="/"><i class="fa fa-eercast mx-3 text-dark" aria-hidden="true"></i><span>Winstore Mall</span></Link>
                            </div>
                        </div>
                        <div className="col-md-3">
                            <div className="p_shadow bg-white rounded-lg py-2">
                                <Link className="text-dark underline" to="/"><i class="fa fa-eercast mx-3 text-dark" aria-hidden="true"></i><span>New Arrivals</span></Link>
                            </div>
                        </div>
                        <div className="col-md-3">
                            <div className="p_shadow bg-white rounded-lg py-2">
                                <Link className="text-dark underline" to="/"><i class="fa fa-eercast mx-3 text-dark" aria-hidden="true"></i><span>Global Collection</span></Link>
                            </div>
                        </div>
                        <div className="col-md-2 p_shadow bg-white rounded-lg py-2">
                            <Link className="text-dark underline" to="/"><i class="fa fa-eercast mr-3 text-dark" aria-hidden="true"></i><span>Win Mart</span></Link>
                        </div>
                    </div>
                </div>

                <div className="container my-4 pt-2">
                    <h3>Flash Sale</h3>
                    <div className="row bg-white pb-5">
                        <div className="product_counter bg-white p-3 w-100 border-bottom">
                            <span className="text-danger w-25 mr-4">On Sale Now</span>
                                <span>
                                    <span>Ending On: <span className="bg-info px-3 py-2">1</span> : <span className="bg-info px-3 py-2">09</span> : <span className="bg-info px-3 py-2">00</span> </span>
                                </span>
                                <Link to="/">
                                    <button className="btn btn-outline-danger float-right rounded-0">
                                        Shop More
                                    </button>
                                </Link>
                        </div>
                        
                        <div className="col-md-3 mt-3">
                            {/* <img src="imgs/cf9a45356e37e8b5496c09382789ff28.jpg" alt="" className="img-fluid" />
                            <h5 className="font-weight-normal">Superb Bass Earphones</h5> */}
                            <Link className="text-dark underline" to="/productdetails">
                                <div class="card border-0 p_shadow" style={{width: "16rem"}}>
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
                            <Link className="text-dark underline" to="/">
                                <div class="card border-0 p_shadow" style={{width: "16rem"}}>
                                    <img class="card-img-top" src="imgs/82fc17762586c9370141b76712c45bfd.png" alt="Card image cap" />
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
                            <Link className="text-dark underline" to="/">
                                <div class="card border-0 p_shadow" style={{width: "16rem"}}>
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
                            <Link className="text-dark underline" to="/">
                                <div class="card border-0 p_shadow" style={{width: "16rem"}}>
                                    <img class="card-img-top" src="imgs/82fc17762586c9370141b76712c45bfd.png" alt="Card image cap" />
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

            </section>


            {/* <section className="bg-light pt-5 pb-4" style={{background:"url('imgs/categorial_products_bg-img-header.jpg')"}}>
                <div className="container">
                    <div className="row py-2">
                        <div className="col-md-3">
                            <div class="card rounded-0 border-0 pt-3" style={{width: "17rem"}}>
                                <div className=" ml-3 pl-1">
                                    <h5 class="card-title font-weight-bold">Food</h5>
                                </div>
                                <Link to="/"><img class="card-img-top img-fluid px-3" src="imgs/mozerella-sticks-250x300.jpg" alt="Winstore Mozerella-Sticks" /></Link>
                                <div class="card-body">
                                    <Link to="/" class="shopnow_btn">Shop now</Link>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-3">
                            <div class="card rounded-0 border-0 pt-3" style={{width: "17rem"}}>
                                <div className=" ml-3 pl-1">
                                    <h5 class="card-title font-weight-bold">Accessories</h5>
                                </div>
                                <Link to="/"><img class="card-img-top img-fluid px-3" src="imgs/mozerella-sticks-250x300.jpg" alt="Winstore Mozerella-Sticks" /></Link>
                                <div class="card-body">
                                    <Link to="/" class="shopnow_btn">Shop now</Link>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-3">
                            <div class="card rounded-0 border-0 pt-3" style={{width: "17rem"}}>
                                <div className=" ml-3 pl-1">
                                    <h5 class="card-title font-weight-bold">Games</h5>
                                </div>
                                <Link to="/"><img class="card-img-top img-fluid px-3" src="imgs/mozerella-sticks-250x300.jpg" alt="Winstore Mozerella-Sticks" /></Link>
                                <div class="card-body">
                                    <Link to="/" class="shopnow_btn">Shop now</Link>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-3">
                                <Link to="/"><img src="imgs/special_offer-banner.jpg" alt="" className="img-fluid blinking mb-3" style={{width: "315px", height:"95px"}} /></Link>
                                <Link to="/"><img src="imgs/tmg-article_default_mobile.jpg" alt="" className="img-fluid mb-3" style={{width: "333px", height:"295px"}} /></Link>
                        </div>
                    </div>      

                    <div className="row">
                        <div className="col-md-3">
                            <div class="card rounded-0 border-0 pt-3" style={{width: "17rem"}}>
                                <div className=" ml-3 pl-1">
                                    <h5 class="card-title font-weight-bold">Top Rated</h5>
                                </div>
                                <Link to="/"><img class="card-img-top img-fluid px-3" src="imgs/mozerella-sticks-250x300.jpg" alt="Winstore Mozerella-Sticks" /></Link>
                                <div class="card-body">
                                    <Link to="/" class="shopnow_btn">Shop now</Link>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-3">
                            <div class="card rounded-0 border-0 pt-3" style={{width: "17rem"}}>
                                <div className=" ml-3 pl-1">
                                    <h5 class="card-title font-weight-bold">Most Popular</h5>
                                </div>
                                <Link to="/"><img class="card-img-top img-fluid px-3" src="imgs/mozerella-sticks-250x300.jpg" alt="Winstore Mozerella-Sticks" /></Link>
                                <div class="card-body">
                                    <Link to="/" class="shopnow_btn">Shop now</Link>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-3">
                            <div class="card rounded-0 border-0 pt-3" style={{width: "17rem"}}>
                                <div className=" ml-3 pl-1">
                                    <h5 class="card-title font-weight-bold">Find your ideal Laptop</h5>
                                </div>
                                <Link to="/"><img class="card-img-top img-fluid px-3" src="imgs/mozerella-sticks-250x300.jpg" alt="Winstore Mozerella-Sticks" /></Link>
                                <div class="card-body">
                                    <Link to="/" class="shopnow_btn">Shop now</Link>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-3">
                            <div class="card rounded-0 border-0 pt-3" style={{width: "17rem"}}>
                                <div className=" ml-3 pl-1">
                                    <h5 class="card-title font-weight-bold">Shop by Category</h5>
                                </div>
                                <Link to="/"><img class="card-img-top img-fluid px-3" src="imgs/mozerella-sticks-250x300.jpg" alt="Winstore Mozerella-Sticks" /></Link>
                                <div class="card-body">
                                    <Link to="/" class="shopnow_btn">Shop now</Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section> */}


        </div>

    )
}

export default catproducts
