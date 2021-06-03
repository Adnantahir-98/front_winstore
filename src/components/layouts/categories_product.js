import React from 'react'
import { Link } from 'react-router-dom'


function categories_product() {
    return (
        <div>
            <section className="bg-light pt-5">
                <div className="container">
                    <h3>Categories</h3>
                    <div className="row">
                        <div className="col-md-2 cat_shadow bg-white border">
                            <Link className="text-dark underline" to="/">
                            <img src="imgs/321be1f57107ab45fde45168ba113ff2.jpg" className="img-fluid cat_img" alt="" style={{height:"150px", width:"160px"}} />
                                <h6 className="text-center font-weight-normal">Deep Fryers</h6>
                            </Link>
                        </div>
                        <div className="col-md-2 cat_shadow bg-white border">
                            <Link className="text-dark underline" to="/">
                                <img src="imgs/e46e839859e439a3972aaf0ad27390ea.jpg" className="img-fluid cat_img" alt="" />
                                <h6 className="text-center font-weight-normal">Lifestyle Books</h6>
                            </Link>
                        </div>
                        <div className="col-md-2 cat_shadow bg-white border">
                            <Link className="text-dark underline" to="/">
                                <img src="imgs/3a4863fa8715284f37a6732323a93af2.png" className="img-fluid cat_img" alt="" />
                                <h6 className="text-center font-weight-normal">Garbage Bin</h6>
                            </Link>
                        </div>
                        <div className="col-md-2 cat_shadow bg-white border">
                            <Link className="text-dark underline" to="/">
                                <img src="imgs/f254f7ba12609e765b583c49427cea61.jpg" className="img-fluid cat_img" alt="" />
                                <h6 className="text-center font-weight-normal">Cleaning Products</h6>
                            </Link>
                        </div>
                        <div className="col-md-2 cat_shadow bg-white border">
                            <Link className="text-dark underline" to="/">
                                <img src="imgs/e46e839859e439a3972aaf0ad27390ea.jpg" className="img-fluid cat_img" alt="" />
                                <h6 className="text-center font-weight-normal">Lifestyle Books</h6>
                            </Link>
                        </div>
                        <div className="col-md-2 cat_shadow bg-white border">
                            <Link className="text-dark underline" to="/">
                                <img src="imgs/f254f7ba12609e765b583c49427cea61.jpg" className="img-fluid cat_img" alt="" />
                                <h6 className="text-center font-weight-normal">Cleaning Products</h6>
                            </Link>
                        </div>
                        <div className="col-md-2 cat_shadow bg-white border">
                            <Link className="text-dark underline" to="/">
                                <img src="imgs/f254f7ba12609e765b583c49427cea61.jpg" className="img-fluid cat_img" alt="" />
                                <h6 className="text-center font-weight-normal">Cleaning Products</h6>
                            </Link>
                        </div>
                        <div className="col-md-2 cat_shadow bg-white border">
                            <Link className="text-dark underline" to="/">
                                <img src="imgs/321be1f57107ab45fde45168ba113ff2.jpg" className="img-fluid cat_img" alt="" style={{height:"150px", width:"160px"}} />
                                <h6 className="text-center font-weight-normal">Deep Fryers</h6>
                            </Link>
                        </div>
                        <div className="col-md-2 cat_shadow bg-white border">
                            <Link className="text-dark underline" to="/">
                                <img src="imgs/f254f7ba12609e765b583c49427cea61.jpg" className="img-fluid cat_img" alt="" />
                                <h6 className="text-center font-weight-normal">Cleaning Products</h6>
                            </Link>
                        </div>
                        <div className="col-md-2 cat_shadow bg-white border">
                            <Link className="text-dark underline" to="/">
                                <img src="imgs/3a4863fa8715284f37a6732323a93af2.png" className="img-fluid cat_img" alt="" />
                                <h6 className="text-center font-weight-normal">Garbage Dust Bin</h6>
                            </Link>
                        </div>
                        <div className="col-md-2 cat_shadow bg-white border">
                            <Link className="text-dark underline" to="/">
                                <img src="imgs/f254f7ba12609e765b583c49427cea61.jpg" className="img-fluid cat_img" alt="" />
                                <h6 className="text-center font-weight-normal">Insect Killers</h6>
                            </Link>
                        </div>
                        <div className="col-md-2 cat_shadow bg-white border">
                            <Link className="text-dark underline" to="/">
                                <img src="imgs/e46e839859e439a3972aaf0ad27390ea.jpg" className="img-fluid cat_img" alt="" />
                                <h6 className="text-center font-weight-normal">Gadgets</h6>
                            </Link>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default categories_product
