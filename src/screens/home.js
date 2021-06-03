
import React from 'react'
import 'react-slideshow-image/dist/styles.css'
import { Link } from 'react-router-dom'
import { Fade } from 'react-slideshow-image'
import {Col, Row, Container} from 'react-bootstrap'
import SliderMenu from '../components/layouts/slidermenu'
import FlashProducts from '../pages/flashproducts'
import CatProducts from '../components/layouts/categories_product'
import JustForYourProducts from '../components/layouts/foryouproductssection'
import CollectionProducts from '../components/layouts/collection'
import PopularBrands from '../components/layouts/popularbrand'
import products from '../products'



function home(history) {

    // SlideShow images and indicators...
    const fadeImages = [
        'imgs/2bde2551-84c6-4797-9133-cbd2d2664040.jpg',
        'imgs/44355d7c-3d2c-488e-abd6-f37f0bcf264d.jpg',
        'imgs/8052670f-43c1-4e89-985f-edd45e3e97ed.jpg',
        'imgs/Share-&-Win-web2.jpg',
    ];
    const fade = {
        arrows: false,
        indicators: true,
        scale: 0.4,
        indicators: i => (<div className="indicator"></div>)
    }


    return (
        <div className="">
            
            {/* Header Slider Section */}
            <section>
                <div className="row">
                    <div className="slider_dropdown bg-white">
                        <div className="slider_menu">
                            <SliderMenu />
                        </div>  
                            {/* <Nav className="m-auto bg-light">                       
                                <NavDropdown title="All" id="collasible-nav-dropdown-right" className=" bg-light mt-1 small ml-auto border border-right-0 All_cat">
                                    <NavDropdown.Item to="/" className="text-dark"><Nav.Link to="/" className="nav-links nav-item text-dark"><Link to="/" className="text-dark underline">Arts & Crafts</Link></Nav.Link></NavDropdown.Item>
                                    <NavDropdown.Item to="/" className="text-dark"><Nav.Link to="/" className="nav-links nav-item text-dark"><Link to="/" className="text-dark underline">Automotive</Link></Nav.Link></NavDropdown.Item>
                                    <NavDropdown.Item to="/" className="text-dark"><Nav.Link to="/" className="nav-links nav-item text-dark"><Link to="/" className="text-dark underline">Home & Kitchen</Link></Nav.Link></NavDropdown.Item>
                                    <NavDropdown.Item to="/" className="text-dark"><Nav.Link to="/" className="nav-links nav-item text-dark"><Link to="/" className="text-dark underline">Men's Fashion</Link></Nav.Link></NavDropdown.Item>
                                    <NavDropdown.Item to="/" className="text-dark"><Nav.Link to="/" className="nav-links nav-item text-dark"><Link to="/" className="text-dark underline">Women's Fashion</Link></Nav.Link></NavDropdown.Item>
                                    <NavDropdown.Item to="/" className="text-dark"><Nav.Link to="/" className="nav-links nav-item text-dark"><Link to="/" className="text-dark underline">Sports & Outdoors</Link></Nav.Link></NavDropdown.Item>
                                    <NavDropdown.Item to="/" className="text-dark"><Nav.Link to="/" className="nav-links nav-item text-dark"><Link to="/" className="text-dark underline">Toys & Games</Link></Nav.Link></NavDropdown.Item>
                                    <NavDropdown.Item to="/" className="text-dark"><Nav.Link to="/" className="nav-links nav-item text-dark"><Link to="/" className="text-dark underline">Electronics</Link></Nav.Link></NavDropdown.Item>
                                    <NavDropdown.Item to="/" className="text-dark"><Nav.Link to="/" className="nav-links nav-item text-dark"><Link to="/" className="text-dark underline">Books</Link></Nav.Link></NavDropdown.Item>
                                    <NavDropdown.Item to="/" className="text-dark"><Nav.Link to="/" className="nav-links nav-item text-dark"><Link to="/" className="text-dark underline">Computers</Link></Nav.Link></NavDropdown.Item>
                                </NavDropdown>
                            </Nav> */}
                    </div>
                    <div className="col header_slider">
                        <Fade {...fade}>
                            <div className="each-fade">
                                <div>
                                    <img src={fadeImages[0]} class="img-fluid slider_img"/>
                                </div>
                            </div>
                            <div className="each-fade">
                                <div>
                                    <img src={fadeImages[1]} class="img-fluid slider_img" />
                                </div>
                            </div>
                            <div className="each-fade">
                                <div>
                                    <img src={fadeImages[2]} class="img-fluid slider_img" />
                                </div>
                            </div>
                            <div className="each-fade">
                                <div>
                                    <img src={fadeImages[3]} class="img-fluid slider_img" />
                                </div>
                            </div>
                        </Fade>
                    </div>
                </div>
            </section>
            

            {/* Main Product of Body Section of Home Page */}
            <section className="bg-light">

                {/* <FlashProducts /> */}
                <Container>
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
                    
                    <h3 className="font-weight-normal mt-3"> Flash Sale </h3>

                    <div className="border-bottom row bg-white py-1">
                        <div className="col-md-4">
                            <h6 className="text-danger font-weight-normal ml-2 mt-3"> On Sale Now </h6>
                        </div>
                        <div className="col-md-4">
                            <div className="mt-3 ml-2 pb-3 countdown_timer">
                                <span className="">Ending In: </span>
                                <span className="px-3 rounded py-2 bg-info">7</span> <span> : </span> 
                                <span className="px-3 rounded py-2 bg-info">09</span> <span> : </span>  
                                <span className="px-3 rounded py-2 bg-info">00</span>
                            </div>
                        </div>
                        <div className="col-md-4">
                            <Link to="/shop"><button className="btn btn-outline-danger rounded-0 mb-2 mt-2 mr-2 ml-2 float-right shop_more-btn">Shop More</button></Link>
                        </div>
                    </div>
                    <Row className="bg-white px-2 pb-1 mb-4">
                        {products.map(product => (
                            <Col key={product._id} sm={12} md={6} lg={4} xl={3}>
                                <FlashProducts product={product} className="" />
                            </Col>
                        ))}
                    </Row>
                </Container>
            </section>
            {/* Flash Product Section Ends here */}

            <section>
                <CollectionProducts />
            </section>

            <section>
                <PopularBrands />
            </section>
            
            <section>
                <CatProducts />
            </section>

            <section>
                <JustForYourProducts />
            </section>

            
        </div>
    )
}

export default home
