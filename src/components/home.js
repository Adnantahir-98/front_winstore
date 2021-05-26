
import React from 'react'
import 'react-slideshow-image/dist/styles.css'
import { Link } from 'react-router-dom'
import { Fade } from 'react-slideshow-image'
import {Navbar, NavDropdown, Nav, Dropdown,DropdownButton, ButtonGroup} from 'react-bootstrap'
import SliderMenu from './layouts/slidermenu'
import FlashProducts from '../screens/flashproducts'
import CatProducts from './layouts/categories_product'
import JustForYourProducts from './layouts/foryouproductssection'
import CollectionProducts from './layouts/collection'


function home() {

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

                        <SliderMenu />

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
                                    <img src={fadeImages[0]} class="img-fluid" />
                                </div>
                            </div>
                            <div className="each-fade">
                                <div>
                                    <img src={fadeImages[1]} class="img-fluid" />
                                </div>
                            </div>
                            <div className="each-fade">
                                <div>
                                    <img src={fadeImages[2]} class="img-fluid" />
                                </div>
                            </div>
                            <div className="each-fade">
                                <div>
                                    <img src={fadeImages[3]} class="img-fluid" />
                                </div>
                            </div>
                        </Fade>
                    </div>
                </div>
            </section>
            

            
            <section className="bg-light">
                <FlashProducts />
            </section>

            <section>
                <CollectionProducts />
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
