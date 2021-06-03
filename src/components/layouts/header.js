import React from 'react'
import { Link } from 'react-router-dom'
import {Navbar, NavDropdown, Nav, Dropdown,DropdownButton, ButtonGroup} from 'react-bootstrap'
import SearchBox from './SearchBox'


function header() {
    return (
        <div>

             <header>

                <div className="top-bar bg-dark w-100">
                    <div className="container">
                        <div className="row">
                            <div className="col-md-2 mt-2">
                                <i className="fa fa-envelope-square mr-2 text-white" aria-hidden="true"></i>
                                <Link to="#" type="email" className="text-white">
                                    info@winstore.pk
                                </Link>
                            </div>
                            <div className="col-md-2 mt-2">
                                <i className="fa fa-phone-square mr-2 text-white" aria-hidden="true"></i>
                                <Link to="#" type="phone" className="text-white underline">
                                    0311 1666144
                                </Link>
                            </div>
                            <div className=" col-md-1 ml-auto">
                            </div>
                            <div className="col-md-7 ml-auto">
                                <nav className="navbar navbar-expand-lg navbar-dark bg-dark text-white p-0 float-right">
                                    <ul className="navbar-nav">
                                        {/* <li className="nav-item">
                                            <Link className="nav-link text-white" to="/"> Customer Services <span className="ml-1"> | </span> </Link>
                                        </li> */}
                                        <li className="nav-item">
                                            <Link className="nav-link text-white" to="/"> Shop By Brand <span className="ml-1"> | </span> </Link>
                                        </li>
                                        <li className="nav-item">
                                            <Link className="nav-link text-white" to="/">Sell On Winstore <span className="ml-1"> | </span></Link>
                                        </li>
                                        <li className="nav-item">
                                            <Link className="nav-link text-white" to="/"> Track Your Order <span className="ml-1"> | </span> </Link>
                                        </li>
                                        <li className="nav-item">
                                            <Link className="nav-link text-white" to="/" id="head">Buy Wincard</Link>
                                        </li>
                                    </ul>
                                </nav>
                            </div>
                            
                        </div>
                    </div>
                </div>

                <Navbar collapseOnSelect expand="lg" bg="light" variant="light" className="bg-light text-dark sticky-top">
                    <Navbar.Brand to="/"><Link to="/" className="text-white mr-5"><img src="imgs/logo.png" className="img-fluid" alth="logo" /></Link></Navbar.Brand>
                
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav bg-light text-white">
                        <Nav className="m-auto bg-light">    
                            {/* <div className="mb-2">
                                {['down'].map((direction) => (
                                <DropdownButton
                                    as={ButtonGroup}
                                    key={direction}
                                    id={`dropdown-button-drop-${direction}`}
                                    drop={direction}
                                    variant="default"
                                    title={` All `}
                                    className="border mt-1 small bg-light mt-1 small ml-auto border border-right-0 All_cat"
                                >
                                    <Dropdown.Item eventKey="1"><Link to="/" className="text-dark underline">Arts & Crafts</Link></Dropdown.Item>
                                    <Dropdown.Item eventKey="2"><Link to="/" className="text-dark underline">Automotive</Link></Dropdown.Item>  
                                    <Dropdown.Divider />
                                    <Dropdown.Item eventKey="4">Separated link</Dropdown.Item>
                                </DropdownButton>
                                ))}
                            </div> */}
                            <div className="row">
                                <NavDropdown title="All" id="collasible-nav-dropdown" className=" bg-light mt-1 small ml-auto border border-right-0 All_cat" style={{borderTopLeftRadius:"4px",borderBottomLeftRadius:"4px"}}>
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
                                {/* <form className="d-flex mr-auto" id="main-search">
                                    <input className="form-control me-2 mt-1 border-right-0 rounded-0 main-search-input" type="search" placeholder="Search" aria-label="Search" style={{borderTopRightRadius: "0%", borderBottomRightRadius: "0%", width: "375px"}} />
                                    <button className="btn btn-success border-left-0 mt-1" type="submit" style={{borderTopLeftRadius: "0%", borderBottomLeftRadius: "0%",}}><i className="fa fa-search"></i></button>
                                </form> */}
                                <SearchBox />
                                
                            </div>
                        </Nav>

                        <Nav className="bg-light">
                            {/* <Nav.Link className="nav-item"> */}
                                {/* <Link className="nav-link mx-0 px-0" to="#" tabindex="-1" aria-disabled="true" style={{fontSize: "20px"}} data-toggle="tooltip" data-placement="left" title="Your Wishlist">
                                    <i className="fa fa-heart-o" aria-hidden="true" style={{color:"darkred"}}></i>
                                    <span className="h6 px-1 cart-count rounded-circle text-white bg-success">0</span>
                                </Link> */}
                                <a href="https://play.google.com/store/apps/details?id=com.inspireui.winstore.vendor" target="blank"><img src="imgs/special_offer-onmobileapp.png" alt="Special Mobile Offer Winstore.pk" className="img-fluid blinking" style={{height:"50px"}} /></a>
                            {/* </Nav.Link> */}
                            <Nav.Link className="nav-item mr-2">
                                <Link className="nav-link" to="/cart" tabindex="-1" aria-disabled="true">
                                    <i className="fa fa-shopping-cart" aria-hidden="true" style={{fontSize: "28px"}}></i>
                                    <span className="h6 px-1 cart-count rounded-circle text-white bg-success">2</span>
                                </Link>
                            </Nav.Link>
                            <Nav.Link to="/login" className="nav-links nav-item mt-2"><Link to="/login" className="text-dark underline">Login</Link></Nav.Link>
                            <Nav.Link to="/register" className="nav-links nav-item mt-2"><Link to="/register" className="text-secondary underline">Register</Link></Nav.Link>
                        </Nav>

                    </Navbar.Collapse>
                </Navbar>


            </header>

        </div>
    )
}

export default header
