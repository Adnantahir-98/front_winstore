import React from 'react'
import { Link } from 'react-router-dom'


function aboutus() {
    return (
        <div>
            <header className="pb-4 mb-4">

                <div className="row pb-4 about_img mb-3">
                    <div className="container overlay_img text-center img-fluid"><br /> <br />
                        <h1 className="mx-4 float-left my-5 py-4 about_head text-white">About Us</h1>
                    </div>
                </div>

            </header>

            <section className=" mt-5">
                <div className="container">
                    {/* Who We are Section */}
                    <h2 className="font-weight-bold text-center my-3">Who We Are</h2>
                    <h5 className="text-center"><q>Winstore is building the world’s one of the best platform for marketing partnerships.</q> <br /> <i className="font-weight-light">Adviser</i></h5>
                    <div className="row">
                        <div className="col-md-6 my-5">
                            <h4 className="font-weight-light text-right">As one of the first cloud-based SaaS platforms to support affiliate marketing, our mission has evolved since our founding in 2009. Today, we support the growth of every performance partnership that marketers and their teams want to manage. In the past few years, affiliate marketing has expanded and evolved into a larger category called partner marketing. This category includes traditional affiliate marketing, but also includes business development relationships, influencers, content publishers, networks, and many other kinds of partnerships.</h4>
                        </div>
                        <div className="col-md-6 my-5">
                            <img src="imgs/fauxels-3184291.jpg" alt="" className="img-fluid" />
                        </div>
                    </div>
                    <h5 className="text-center"><q>Our approach to partner marketing is different.</q> <br /> <i className="font-weight-light">General Manager</i></h5>
                    <div className="row">
                        <div className="col-md-6 my-5">
                            <img src="imgs/fauxels-3184291.jpg" alt="" className="img-fluid" />
                        </div>
                        <div className="col-md-6 my-5">
                            <h4 className="font-weight-light">We believe that every business can benefit from better technology to manage marketing partnerships. And we believe this need extends beyond advertisers and affiliate programs. Ad networks, agencies, and publisher businesses are also managing partnerships at scale. Winstore’s partner marketing platform is designed to support the unique needs of these business models and make it easier for each to work with the others. This is why Winstore has never and will never compete with these models. Instead, we strive to open new opportunities for all of our customers to connect, integrate, and customize their partner marketing relationships.</h4>
                        </div>
                    </div>

                    {/* Our Values Section */}
                    <h2 className="font-weight-bold text-center mb-3">Our Values</h2>
                    <div className="container">
                        <h4 className="font-weight-light text-center mb-5">We strive to embody these ideals in our interactions with each other and in everything we do, from product development and customer-first thinking to personal growth and our impact on the community.</h4>
                    </div>
                    <div className="row">
                        <div className="col-md-1 mr-3 mt-3">
                            <i class="fa fa-handshake-o text-muted text-center" aria-hidden="true" style={{fontSize:"68px"}}></i>
                        </div>
                        <div className="col-md-10 mt-3">
                            <h5>Be Excellent to Each Other</h5>
                            <p className="font-weight-light">As humans who share common needs, we treat each other with care and respect. We value diversity of people and ideas. We have faith in each other’s ability to succeed and cultivate that potential by inspiring and nurturing growth. We recognize and express sincere gratitude for each other’s contributions.</p>
                        </div>
                        <div className="col-md-1 mr-3">
                            <i class="fa fa-graduation-cap text-muted text-center" aria-hidden="true" style={{fontSize:"68px"}}></i>
                        </div>
                        <div className="col-md-10">
                            <h5>Be Confident and Coachable</h5>
                            <p className="font-weight-light">We leverage our strengths, and pursue growth in areas where improvement is needed. When we make mistakes or don’t know something, we are not afraid to be vulnerable and admit it. We continuously pursue knowledge and are happy to share it with others.</p>
                        </div>
                        <div className="col-md-1 mr-3">
                            <i class="fa fa-cogs text-muted text-center" aria-hidden="true" style={{fontSize:"68px"}}></i>
                        </div>
                        <div className="col-md-10">
                            <h5>Start With Why</h5>
                            <p className="font-weight-light">As humans who share common needs, we treat each other with care and respect. We value diversity of people and ideas. We have faith in each other’s ability to succeed and cultivate that potential by inspiring and nurturing growth. We recognize and express sincere gratitude for each other’s contributions.</p>
                        </div>
                        <div className="col-md-1 mr-3">
                            <i class="fa fa-line-chart text-muted text-center" aria-hidden="true" style={{fontSize:"68px"}}></i>
                        </div>
                        <div className="col-md-10">
                            <h5>Fail and Advance</h5>
                            <p className="font-weight-light">When we strive, we may fail. Failure gives us unparalleled knowledge about ourselves and our subject matter. We face our failures with resilience, using what we learn from failures to advance.</p>
                        </div>
                        <div className="col-md-1 mr-3">
                            <i class="fa fa-cubes text-muted text-center" aria-hidden="true" style={{fontSize:"68px"}}></i>
                        </div>
                        <div className="col-md-10">
                            <h5>Fail and Advance</h5>
                            <p className="font-weight-light">We are committed to delivering high-quality work in a timely fashion. When we believe that something should be done, we assertively take action to make it happen. When setbacks or roadblocks threaten our ability to succeed, we dig deep inside ourselves and rise to the occasion.</p>
                        </div>
                    </div>

                    {/* Connect with us section */}
                    <div className="row my-4">
                        <div className="text-center m-auto text-dark" style={{fontSize: "30px"}}>
                            <h2>Connect With Us</h2>
                            <a href="https://www.facebook.com/winstorepk/" target="blank"><i className="fa fa-facebook-official mr-3"></i></a>
                            <a href="https://twitter.com/Winstorepk" target="blank" className="text-info"><i class="fa fa-twitter-square mr-3" aria-hidden="true"></i></a>
                            <a href="https://www.instagram.com/winstorepk/" target="blank" className="text-danger"><i className="fa fa-instagram mr-3"></i></a>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default aboutus
