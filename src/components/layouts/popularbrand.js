import React from 'react'
import { Link } from 'react-router-dom'


function popularbrand() {
    return (
        <div>
            <section>
                <div className="container mt-5">
                    <h2 className="">Popular Brands</h2>
                    <div className="row">
                        <div className="col-md-3 mt-3">
                                {/* <img src="imgs/cf9a45356e37e8b5496c09382789ff28.jpg" alt="" className="img-fluid" />
                                <h5 className="font-weight-normal">Superb Bass Earphones</h5> */}
                                
                                <div class="card border-0 p_shadow" style={{width: "16rem"}}>
                                    <Link className="text-dark underline" to="/"><img class="card-img-top" src="imgs/cf9a45356e37e8b5496c09382789ff28.jpg" alt="Card image cap" /></Link>
                                    <div className="border-bottom">
                                        <Link to="/"><img class="card-img-top" src="imgs/cf9a45356e37e8b5496c09382789ff28.jpg" alt="img-fluid mb-3" style={{height:"75px", width:"80px", position:"absolute", left:"35%", top:"57%", border:"5px solid #eee"}} /></Link>
                                    </div>
                                    <div class="card-body text-center">
                                        <Link className="text-dark underline" to="/"><h5 class="card-title font-weight-light mt-4">Faster</h5></Link>
                                        <p class="card-text font-weight-light">Entertainment</p>
                                    </div>
                                </div>

                            </div>
                            <div className="col-md-3 mt-3">
                                <div class="card border-0 p_shadow" style={{width: "16rem"}}>
                                    <Link className="text-dark underline" to="/"><img class="card-img-top" src="imgs/hp-elitebookfolio1040-laptop.jpg" alt="Card image cap" /></Link>
                                    <div className="border-bottom">
                                        <Link to="/"><img class="card-img-top" src="imgs/hp-elitebookfolio1040-laptop.jpg" alt="img-fluid mb-3" style={{height:"75px", width:"80px", position:"absolute", left:"35%", top:"57%", border:"5px solid #eee"}} /></Link>
                                    </div>
                                    <div class="card-body text-center">
                                        <Link className="text-dark underline" to="/"><h5 class="card-title font-weight-light mt-4">HP</h5></Link>
                                        <p class="card-text font-weight-light">Tech</p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-3 mt-3">
                                {/* <img src="imgs/cf9a45356e37e8b5496c09382789ff28.jpg" alt="" className="img-fluid" />
                                <h5 className="font-weight-normal">Superb Bass Earphones</h5> */}
                                <div class="card border-0 p_shadow" style={{width: "16rem"}}>
                                    <Link className="text-dark underline" to="/"><img class="card-img-top" src="imgs/AC_brand-image.jpg" alt="Card image cap" /></Link>
                                    <div className="border-bottom">
                                        <Link to="/"><img class="card-img-top" src="imgs/AC_brand-image.jpg" alt="img-fluid mb-3" style={{height:"75px", width:"80px", position:"absolute", left:"35%", top:"57%", border:"5px solid #eee"}} /></Link>
                                    </div>
                                    <div class="card-body text-center">
                                        <Link className="text-dark underline" to="/"><h5 class="card-title font-weight-light mt-4">Dawlance</h5></Link>
                                        <p class="card-text font-weight-light">Air Conditioning</p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-3 mt-3">
                                {/* <img src="imgs/cf9a45356e37e8b5496c09382789ff28.jpg" alt="" className="img-fluid" />
                                <h5 className="font-weight-normal">Superb Bass Earphones</h5> */}
                                <div class="card border-0 p_shadow" style={{width: "16rem"}}>
                                    <Link className="text-dark underline" to="/"><img class="card-img-top" src="imgs/cf9a45356e37e8b5496c09382789ff28.jpg" alt="Card image cap" /></Link>
                                    <div className="border-bottom">
                                    <Link className="text-dark underline" to="/"><img class="card-img-top" src="imgs/cf9a45356e37e8b5496c09382789ff28.jpg" alt="img-fluid mb-3" style={{height:"75px", width:"80px", position:"absolute", left:"35%", top:"57%", border:"5px solid #eee"}} /></Link>
                                    </div>
                                    <div class="card-body text-center">
                                        <Link className="text-dark underline" to="/"><h5 class="card-title font-weight-light mt-4">Faster</h5></Link>
                                        <p class="card-text font-weight-light">Faster</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

            </section>
        </div>
    )
}

export default popularbrand
