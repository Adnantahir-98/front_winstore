import React from 'react'
import { Link } from 'react-router-dom'
import { Card } from 'react-bootstrap'
import Rating from './rating'


function foryouproductssection({ product }) {
    return (
        <div className=" p_shadow rounded border-0" style={{border:"none"}}>
            <Card classname="my-2 py-3 bg-white border-0">
                <Link to={`/productdetails/${product._id}`}>
                    <Card.Img src={product.image} className="border-bottom border-light" />
                </Link>
                <Card.Body>
                    <Card.Title as="div">
                        <Link to={`/productdetails/${product._id}`} className="text-dark underline">
                            <h5>{product.name}</h5>
                        </Link>
                    </Card.Title>
                    <Card.Text as="h6" className="my-2">
                        <div>
                            Rs { product.price}
                        </div>
                    </Card.Text>
                    <Card.Text as="div" className="my-2">
                        <div className="my-2">
                            <Rating value={product.rating} text={`${product.numReviews} reviews`} color={'#ffde00'} />
                        </div>
                    </Card.Text>
                </Card.Body>
            </Card>
        </div>
    )
}

export default foryouproductssection



// <div className="row">
{/* <div className="col-md-3 mt-3"> */}
{/* <img src="imgs/cf9a45356e37e8b5496c09382789ff28.jpg" alt="" className="img-fluid" />
<h5 className="font-weight-normal">Superb Bass Earphones</h5> */}
{/* <Link className="text-dark underline" to="/productdetails">
    <div class="card border-0 p_shadow" style={{width: "16rem"}}>
        <Link to={`/productdetails/${product._id}`}>
            <img class="card-img-top" src="imgs/StereoWirelessHeadset2.jpg" alt="Card image cap" />
        </Link>
        <div class="card-body">
            <Link to={`/productdetails/${product._id}`}>
                <h5 class="card-title">Stereo Wireless Headset</h5>
            </Link>
            <p class="card-text">Rs.1210</p>
            <strike className="mr-2">Rs.190</strike>
            <span>-15%</span>
            <br /> <br />
            <span>
                <i class="fa fa-star text-warning" aria-hidden="true"></i>
                <i class="fa fa-star text-warning" aria-hidden="true"></i>
                <i class="fa fa-star text-warning" aria-hidden="true"></i>
                <i class="fa fa-star-half-o text-warning" aria-hidden="true"></i>
                <i class="fa fa-star-half-o text-warning" aria-hidden="true"></i>
            </span>
        </div>
    </div>
</Link>
</div>
<div className="col-md-3 mt-3">
{/* <img src="imgs/cf9a45356e37e8b5496c09382789ff28.jpg" alt="" className="img-fluid" />
<h5 className="font-weight-normal">Superb Bass Earphones</h5> */}
{/* <Link className="text-dark underline" to="/productdetails">
    <div class="card border-0 p_shadow" style={{width: "16rem"}}>
        <Link to={`/productdetails/${product._id}`}>
            <img class="card-img-top" src="imgs/82fc17762586c9370141b76712c45bfd.png" alt="Card image cap" />
        </Link>
        <div class="card-body">
            <h5 class="card-title">Nido Forti-grow 900 gm</h5>
            <p class="card-text">Rs.990</p>
            <strike className="mr-2">Rs.1030</strike>
            <span>-4%</span>
            <br /> <br />
            <span>
                <i class="fa fa-star text-warning" aria-hidden="true"></i>
                <i class="fa fa-star text-warning" aria-hidden="true"></i>
                <i class="fa fa-star text-warning" aria-hidden="true"></i>
                <i class="fa fa-star text-warning" aria-hidden="true"></i>
                <i class="fa fa-star-half-o text-warning" aria-hidden="true"></i>
            </span>
        </div>
    </div>
</Link>
</div>
<div className="col-md-3 mt-3"> */}
{/* <img src="imgs/cf9a45356e37e8b5496c09382789ff28.jpg" alt="" className="img-fluid" />
<h5 className="font-weight-normal">Superb Bass Earphones</h5> */}
{/* <Link className="text-dark underline" to="/productdetails">
    <div class="card border-0 p_shadow" style={{width: "16rem"}}>
        <img class="card-img-top" src="imgs/cf9a45356e37e8b5496c09382789ff28.jpg" alt="Card image cap" />
        <div class="card-body">
            <h5 class="card-title">Superb Bass Earphones 2 in One</h5>
            <p class="card-text">Rs.310</p>
            <strike className="mr-2">Rs.420</strike>
            <span>-26%</span>
            <br /> <br />
            <span>
                <i class="fa fa-star text-warning" aria-hidden="true"></i>
                <i class="fa fa-star text-warning" aria-hidden="true"></i>
                <i class="fa fa-star text-warning" aria-hidden="true"></i>
                <i class="fa fa-star text-warning" aria-hidden="true"></i>
                <i class="fa fa-star text-warning" aria-hidden="true"></i>
                <span className="text-muted ml-2">(19)</span>
            </span>
        </div>
    </div>
</Link>
</div>
<div className="col-md-3 mt-3"> */}
{/* <img src="imgs/cf9a45356e37e8b5496c09382789ff28.jpg" alt="" className="img-fluid" />
<h5 className="font-weight-normal">Superb Bass Earphones</h5> */}
{/* <Link className="text-dark underline" to="/productdetails">
    <div class="card border-0 p_shadow" style={{width: "16rem"}}>
        <img class="card-img-top" src="imgs/Powered_eggs_product.jpg" alt="Card image cap" />
        <div class="card-body">
            <h5 class="card-title">Sponge Beauty Powder Puff set</h5>
            <p class="card-text">Rs.90</p>
            <strike className="mr-2">Rs.420</strike>
            <span>-26%</span>
            <br /> <br />
            <span>
                <i class="fa fa-star text-warning" aria-hidden="true"></i>
                <i class="fa fa-star text-warning" aria-hidden="true"></i>
                <i class="fa fa-star-half-o text-warning" aria-hidden="true"></i>
                <i class="fa fa-star-half-o text-warning" aria-hidden="true"></i>
                <i class="fa fa-star-half-o text-warning" aria-hidden="true"></i>
            </span>
        </div>
    </div>
</Link>
</div>
<div className="col-md-3 mt-3"> */}
{/* <img src="imgs/cf9a45356e37e8b5496c09382789ff28.jpg" alt="" className="img-fluid" />
<h5 className="font-weight-normal">Superb Bass Earphones</h5> */}
{/* <Link className="text-dark underline" to="/productdetails">
    <div class="card border-0 p_shadow" style={{width: "16rem"}}>
        <img class="card-img-top" src="imgs/supremetealeaves.jpg" alt="Card image cap" />
        <div class="card-body">
            <h5 class="card-title">Supreme Black Tea 475gm</h5>
            <p class="card-text">Rs.428</p>
            <strike className="mr-2">Rs.475</strike>
            <span>-10%</span>
            <br /> <br />
            <span>
                <i class="fa fa-star text-warning" aria-hidden="true"></i>
                <i class="fa fa-star text-warning" aria-hidden="true"></i>
                <i class="fa fa-star text-warning" aria-hidden="true"></i>
                <i class="fa fa-star-half-o text-warning" aria-hidden="true"></i>
                <i class="fa fa-star-half-o text-warning" aria-hidden="true"></i>
                <span className="text-muted ml-2">(189)</span>
            </span>
        </div>
    </div>
</Link>
</div>
<div className="col-md-3 mt-3"> */}
{/* <img src="imgs/cf9a45356e37e8b5496c09382789ff28.jpg" alt="" className="img-fluid" />
<h5 className="font-weight-normal">Superb Bass Earphones</h5> */}
{/* <Link className="text-dark underline" to="/productdetails">
    <div class="card border-0 p_shadow" style={{width: "16rem"}}>
        <img class="card-img-top" src="imgs/extrawhite-facewash_100ml.jpg" alt="Card image cap" />
        <div class="card-body">
            <h5 class="card-title">Extra White Face Wash 100ml</h5>
            <p class="card-text">Rs.999</p>
            <strike className="mr-2">Rs.1050</strike>
            <span>-4%</span>
            <br /> <br />
            <span>
                <i class="fa fa-star text-warning" aria-hidden="true"></i>
                <i class="fa fa-star text-warning" aria-hidden="true"></i>
                <i class="fa fa-star text-warning" aria-hidden="true"></i>
                <i class="fa fa-star text-warning" aria-hidden="true"></i>
                <i class="fa fa-star-half-o text-warning" aria-hidden="true"></i>
            </span>
        </div>
    </div>
</Link>
</div>
<div className="col-md-3 mt-3"> */}
{/* <img src="imgs/cf9a45356e37e8b5496c09382789ff28.jpg" alt="" className="img-fluid" />
<h5 className="font-weight-normal">Superb Bass Earphones</h5> */}
{/* <Link className="text-dark underline" to="/productdetails">
    <div class="card border-0 p_shadow" style={{width: "16rem"}}>
        <img class="card-img-top" src="imgs/laptop_battery.jpg" alt="Card image cap" />
        <div class="card-body">
            <h5 class="card-title">Gateway Laptop Battery GW500</h5>
            <p class="card-text">Rs.3010</p>
            <strike className="mr-2">Rs.920</strike>
            <span>-25%</span>
            <br /> <br />
            <span>
                <i class="fa fa-star text-warning" aria-hidden="true"></i>
                <i class="fa fa-star text-warning" aria-hidden="true"></i>
                <i class="fa fa-star-half-o text-warning" aria-hidden="true"></i>
                <i class="fa fa-star-half-o text-warning" aria-hidden="true"></i>
                <i class="fa fa-star-half-o text-warning" aria-hidden="true"></i>
            </span>
        </div>
    </div>
</Link>
</div>
<div className="col-md-3 mt-3"> */}
{/* <img src="imgs/cf9a45356e37e8b5496c09382789ff28.jpg" alt="" className="img-fluid" />
<h5 className="font-weight-normal">Superb Bass Earphones</h5> */}
{/* <Link className="text-dark underline" to="/productdetails">
    <div class="card border-0 p_shadow" style={{width: "16rem"}}>
        <img class="card-img-top" src="imgs/BottleOpener_cutter.jpg" alt="Card image cap" />
        <div class="card-body">
            <h5 class="card-title">Stainless Steel Cutter & Bottle Opener</h5>
            <p class="card-text">Rs.399</p>
            <strike className="mr-2">Rs.550</strike>
            <span>-27%</span>
            <br /> <br />
            <span>
                <i class="fa fa-star text-warning" aria-hidden="true"></i>
                <i class="fa fa-star text-warning" aria-hidden="true"></i>
                <i class="fa fa-star-half-o text-warning" aria-hidden="true"></i>
                <i class="fa fa-star-half-o text-warning" aria-hidden="true"></i>
                <i class="fa fa-star-half-o text-warning" aria-hidden="true"></i>
            </span>
        </div>
    </div>
</Link>
</div>

</div> */}
