import React, { useEffect, useState } from "react";
import Logo from '../assets/logo-alone.png';
import Fackbook_icon from '../assets/facebook-logo.png';
import Instagram_icon from '../assets/instagram-logo.png';
import Twitter_icon from '../assets/twitter-logo.png';
import Youtube_icon from '../assets/youtube-logo.png';


const Footer = (prop) => {
    return (
        <>
            <footer style={{ margin: '50px 0 20px 10px' }} >
                <div className="row">
                    <div className="col-sm-12 col-lg-2">
                        <img className="mb-2" src={Logo} alt="" />
                    </div>
                    <div className="col-sm-12 col-lg-6">
                        {(prop.width < 991) ? (
                            <ul className="list-unstyled text-small">
                                <li className="mb-1"><a className="link-secondary text-decoration-none" href="#">Ornare</a></li>
                                <li className="mb-1"><a className="link-secondary text-decoration-none" href="#">Mattis</a></li>
                                <li className="mb-1"><a className="link-secondary text-decoration-none" href="#">Pellentesque</a></li>
                            </ul>
                        ) : (
                            <div className='d-flex justify-content-start align-content-center' style={{ gap: '10px', paddingTop: '20px' }}>
                                <a className="link-secondary text-decoration-none" href="#">Ornare</a>
                                <a className="link-secondary text-decoration-none" href="#">Accumsan</a>
                                <a className="link-secondary text-decoration-none" href="#">Mattis</a>
                            </div>
                        )}
                    </div>
                    <div className="col-sm-12 col-lg-4">
                        <div className='d-flex justify-content-start' style={{ gap: '10px' }}>
                            <img className="mb-2" src={Fackbook_icon} alt="" />
                            <img className="mb-2" src={Instagram_icon} alt="" />
                            <img className="mb-2" src={Twitter_icon} alt="" />
                            <img className="mb-2" src={Youtube_icon} alt="" />
                        </div>

                    </div>
                </div>
            </footer>
        </>
    );
};

export default Footer;
