import React from 'react'
import { Link } from 'react-router-dom'


function footer() {
    return (
        <div>
            <section>
                <footer className=" mt-5" style={{background:"#eaedef"}}>
                    {/* Footers Main menu */}
                    <section className="mt-3 pt-5">
                        <div className="container">
                            <div className="row">
                                <div className="col-md-3">
                                    <h6 className="font-weight-bold mb-3">Download App</h6>
                                    <a href=""><img src="imgs/apple_grey_2.jpg" alt="apple_grey" className="img-fluid" /></a>
                                    <img src="imgs/play_grey_2.jpg" alt="play_grey_2" className="img-fluid" />

                                    <h4>Follow us</h4>
                                    <div className="row mb-2">
                                        <a href="https://www.facebook.com/winstorepk/" target="blank"><h2><i className="fa fa-facebook-official pr-1 pl-3 rounded-lg"></i></h2></a>
                                        <a href="https://twitter.com/Winstorepk" target="blank"><h2><i className="fa fa-instagram px-1" style={{color: "#0ec12f"}}></i></h2></a>
                                        <a href="https://www.instagram.com/winstorepk/" target="blank"><h2><i className="fa fa-twitter-square text-info px-1"></i></h2></a>
                                        <a href="https://www.youtube.com/channel/UCJh6Ws807wL84fPXN8XMWeA" target="blank"><h2><i className="fa fa-youtube text-danger px-1"></i></h2></a>
                                    </div>

                                </div>

                                <div className="col-md-3">
                                    <h6 className="font-weight-bold mb-3">Winstore</h6>
                                    <ul className="navbar-nav">
                                        <li className="nav-item"><Link to="/faq" className="text-dark">FAQs</Link></li>
                                        <li className="nav-item"><Link to="#" className="text-dark">Our Press</Link></li>
                                        <li className="nav-item"><Link to="/termsconditions" className="text-dark">Terms and Conditions</Link></li>
                                        <li className="nav-item"><Link to="/privacypolicy" className="text-dark">Privacy Policy</Link></li>
                                        <li className="nav-item"><Link to="/shippingpolicy" className="text-dark">Shipping Policy</Link></li>
                                        <li className="nav-item"><Link to="/cancellationpolicy" className="text-dark">Cancellation and Exchange Policy</Link></li>
                                        <li className="nav-item"><Link to="#" className="text-dark">Payment Method</Link></li>
                                    </ul>
                                </div>

                                <div className="col-md-3">
                                    <h6 className="font-weight-bold mb-3">Categories</h6>
                                    <ul className="navbar-nav">
                                        <li className="nav-item"><Link to="/electronicdevices" className="text-dark">Electronics</Link></li>
                                        <li className="nav-item"><Link to="#" className="text-dark">Sport and Outdoors</Link></li>
                                        <li className="nav-item"><Link to="/clothingstore" className="text-dark">Men Store</Link></li>
                                        <li className="nav-item"><Link to="/clothingstore" className="text-dark">Women Store</Link></li>
                                        <li className="nav-item"><Link to="#" className="text-dark">Home & Lifestyle</Link></li>
                                        <li className="nav-item"><Link to="#" className="text-dark">Book & Stationery</Link></li>
                                        <li className="nav-item"><Link to="/grocery" className="text-dark">Grocery</Link></li>
                                        <li className="nav-item"><Link to="#" className="text-dark">Harware & Tools</Link></li>
                                        <li className="nav-item"><Link to="#" className="text-dark">Automative</Link></li>
                                    </ul>
                                </div>

                                <div className="col-md-3">
                                    <h6 className="font-weight-bold mb-3">Pages</h6>
                                    <ul className="navbar-nav">
                                        <li className="nav-item"><Link to="#" className="text-dark">Our Partners</Link></li>
                                        <li className="nav-item"><Link to="#" className="text-dark">Vendor Regisration</Link></li>
                                        <li className="nav-item"><Link to="/about" className="text-dark">About Us</Link></li>
                                        <li className="nav-item"><Link to="/contact" className="text-dark">Contact Us</Link></li>
                                        <li className="nav-item"><Link to="/blog" className="text-dark">Blog</Link></li>
                                    </ul>
                                </div>

                                <div className="payment-method-footer-imgs m-auto pb-5 pt-5">
                                    <img src="imgs/MasterCard.png" alt="MasterCard.png" className="img-fluid" style={{height: "60px", width: "100px"}} />
                                    <img src="imgs/Visa.png" alt="Visa.png" className="img-fluid ml-3" style={{height: "60px", width: "100px"}} />
                                    <img src="imgs/easypaisa.png" alt="easypaisa.ong" className="img-fluid ml-3" style={{height: "60px", width: "100px"}} />
                                </div>
                                <br />
                            </div>
                        </div>
                    </section>
                    {/* Back to Top Button */}
                    {/* <div className="container">
                        <div className="row">
                            <div className="col-md-1 m-auto">
                                <div className="text-center">
                                    <div className="bg-dark rounded-circle text-white px-1 shadow-lg">
                                        <Link to="" id="#head"><i className="fa fa-arrow-up" id="#head"></i></Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div> */}
                    {/* Footer Trade-Mark Text Area */}
                    <div className="m-auto bg-warning">
                        <p className="text-center m-0 p-4 text-white" style={{background: "#232f3e"}}>&copy; 2021 Winstore.pk All Rights Reserved. Designed by <span className="text-success">winstore.pk</span></p>
                    </div>

                </footer>

            </section>
        </div>
    )
}

export default footer
