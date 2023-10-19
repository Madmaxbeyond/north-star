import { useState } from 'react';
import Popup from '../Popup';
import star from '/grey-star.svg';
import footerCurve from '/footer-curve.svg';

const Footer = () => {
    const [request, setRequest] = useState(false);

    return (
        <>
        <Popup action={request} setAction={setRequest}>
            Send us an email at <a href="mailto:info@northstarcarpentry.com">info@northstarcarpentry.com</a> for a quote!
        </Popup>
        <img src={footerCurve} className='svg-curve-footer' alt='footer curve' />
        <div className='footer'>
            <div className='contactContainer'>
                <img className='star-img' src={star} alt='north star carpentry logo' />
                <button onClick={() => setRequest(true)}>Request a Quote</button>
            </div>
            <div className='locationContainer'>
                <div><a href="mailto:info@northstarcarpentry.com">info@northstarcarpentry.com</a></div>
                <div className='address'>
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
        </>
    );
};

export default Footer;