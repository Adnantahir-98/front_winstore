import React from 'react'
import './style.css'

function contactus() {
    return (
        <div>

            <header className="pb-4 mb-4">

                <div className="row pb-4 contact_img mb-3">
                    <div className="container overlay_img text-center img-fluid"><br /> <br />
                        <h1 className="mx-4 float-left my-5 py-4 about_head text-dark">Contact Us</h1>
                    </div>
                </div>

            </header>


            <div className="container">
                <h2 className="font-weight-bold text-center my-5">Let's Start a Conversation</h2>
                <div className="row">
                    <div className="col-md-6">
                        <h5 className="font-weight-bold mb-3">Ask how we can help you:</h5>
                        <h6 className="font-weight-bold">Information & sales</h6>
                        <span><i className="fa fa-envelope-square text-dark" aria-hidden="true"></i> marketing@winstore.com</span>
                        <p><i className="fa fa-phone-square text-dark" aria-hidden="true"></i> 0324-1111090</p>

                        <h6 className="font-weight-bold">Support</h6>
                        <span><i className="fa fa-envelope-square text-dark" aria-hidden="true"></i> Support@winstore.com</span>
                        
                        <h5 className="font-weight-bold my-3"> Office Location </h5>
                        <h2 className="font-weight-light">Pakistan:</h2>
                        <p>FNE House, 179-B, Abu Bakar Block New Garden Town, Lahore.</p>
                    </div>
                    <div className="col-md-6">
                        <p>Please note: all fields are required.</p>
                        <form className="" method="POST">
                            <div className="form-group">
                                <label>Full Name</label>
                                <input type="text" required placeholder="Your FullName" className="form-control" />
                            </div>
                            <div className="form-group">
                                <label>Email</label>
                                <input type="email" required placeholder="Your Email Address" className="form-control" />
                            </div>
                            <div className="form-group">
                                <label>Message</label>
                                <textarea className="form-control" required placeholder="You Message here." rows="4"></textarea>
                            </div>
                            <button className="btn btn-outline-success">Submit</button>
                        </form>
                        
                    </div>
                </div>
            </div>
            {/* Google Maps Embeded API 'fne trades' */}
            <div class="embed-responsive embed-responsive-16by9 mt-5 mb-4">
                <iframe class="embed-responsive-item" src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d3401.266571376775!2d74.3216653!3d31.5168377!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x391905fce2f809bf%3A0xc2dbd5903e652883!2sFirst%20National%20Equities%20Limited!5e0!3m2!1sen!2snl!4v1621842897987!5m2!1sen!2snl" width="600" height="450" style={{border:"0"}} allowfullscreen="" loading="lazy"></iframe>
            </div>
        </div>
    )
}

export default contactus
