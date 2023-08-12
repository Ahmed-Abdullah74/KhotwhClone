import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import { faFacebookF, faInstagram, faPinterestP } from '@fortawesome/free-brands-svg-icons'


function FooterLinks() {
    return (
        <>
            <div className="footer-links pt-4 pb-4">
                <div className="row">
                    <div className="col-6">
                        <div className="row">
                            <div className="col-4 text-start">
                                <h6 className="text-uppercase ">shop</h6>
                                <ul className="list-unstyled">
                                    <li><a href = "/#" alt = "..." >Sale</a></li>
                                    <li><a href = "/#" alt = "..." >New Arrivals</a></li>
                                    <li><a href = "/#" alt = "..." >Women</a></li>
                                    <li><a href = "/#" alt = "..." >Men</a></li>
                                    <li><a href = "/#" alt = "...">Uniform By Khotwh</a></li>
                                </ul>
                            </div>
                            <div className="col-4 text-start">
                                <h6 className="text-uppercase ">information</h6>
                                <ul className="list-unstyled">
                                    <li><a href = "/#" alt = "..." >About Us</a></li>
                                    <li><a href = "/#" alt = "..." >Our Stores</a></li>
                                    <li><a href = "/#" alt = "..." >COntact US </a></li>
                                    <li><a href = "/#" alt = "..." >Return or Exchange Order</a></li>
                                    <li><a href = "/#" alt = "...">Terms of Service</a></li>
                                    <li><a href = "/#" alt = "...">Refund policy</a></li>
                                    <li><a href = "/#" alt = "...">Blogs</a></li>
                                </ul>
                            </div>
                            <div className="col-4 text-start">
                                <h6 className="text-uppercase ">POLICIES</h6>
                                <ul className="list-unstyled">
                                    <li><a href = "/#" alt = "..." >Privacy Policy</a></li>
                                    <li><a href = "/#" alt = "..." >Privacy Policy</a></li>
                                    <li><a href = "/#" alt = "..." >Shipping Policy</a></li>
                                    <li><a href = "/#" alt = "..." >Return Policy</a></li>
                                    <li><a href = "/#" alt = "...">Terms of Service</a></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div className="col-6">
                        <h6 className="text-uppercase">NEWSLETTER SUBSCRIPTION</h6>
                        <p>Sign up for Khotwh updates to receive information about new arrivals, future discounts and specials.</p>
                        <form className="row g-2">
                        
                        <div className="col-8">
                            <input type="text" className="form-control" id="" placeholder="Enter Your Email Address"/>
                        </div>
                        <div className="col-4">
                            <button type="submit" className="btn btn-primary mb-4">Confirm identity</button>
                        </div>
                        </form>
                        <h6 className="text-uppercase">follow us</h6>
                        
                          <FontAwesomeIcon icon={faFacebookF} className='me-2' />
                          <FontAwesomeIcon icon={faInstagram} className='me-2' />
                          <FontAwesomeIcon icon={faPinterestP} />

                    </div>
                </div>
            </div>
        </>
    )
}

export default FooterLinks;