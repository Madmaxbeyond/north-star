import { useState } from 'react';
import Popup from '../Popup';
import star from '/grey-star.svg';
import email from '/letter-icon.svg'
import footerCurve from '/footer-curve-2.svg';
import 'bootstrap/dist/css/bootstrap.min.css';

const Footer = () => {
    const [request, setRequest] = useState(false);

    return (
        <>
        <Popup action={request} setAction={setRequest}>
            <div className='popup-text'>Send us an email at <a href="mailto:info@northstarcarpentry.com">info@<br className="d-md-none"/>northstarcarpentry.com</a>
            {'  '}to start the custom design process and get a quote!</div>
        </Popup>
        <img src={footerCurve} className='svg-curve-footer' alt='footer curve' />
        <div className='footer'>
            <div className="footer-inner">
                <div className='logo-container col-12 col-sm-6 col-md-7'>
                    <img className='star-img' src={star} alt='north star carpentry logo' />
                    <button onClick={() => setRequest(true)}>Request a Quote</button>
                </div>
                <div className='location-container col-12'>
                    <div className='col-6 col-xl-7'>
                        <img className='email-icon' src={email} alt='email' />
                        <a href="mailto:info@northstarcarpentry.com">info@northstarcarpentry.com</a>
                    </div>
                    <div className='address col-lg-4'>
                        PO Box 1234
                        <br/>
                        Seattle, WA 98888, USA
                        <br/>
                        425-123-4567
                    </div>
                    <div>
                        <b>Hours</b>
                        Monday - Friday: 8am - 5pm
                        <br/>
                        (Pacific Standard Time)
                    </div>
                </div>
            </div>
        </div>
        </>
    );
};

export default Footer;