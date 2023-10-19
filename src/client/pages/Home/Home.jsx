import { useState } from 'react';
import carpenter from '/austin-ramsey-unsplash.png'
import Popup from '../../components/Popup';
import arrow from '/arrow-white.svg';
import star from '/blue-star.svg';
// keep styles here for whole project
import styles from '../Home/styles.scss';

const Home = () => {
    const [readMore, setReadMore] = useState(false);

    return (
        <>
        <div className='newContainer'>
        <Popup action={readMore} setAction={setReadMore}>
            Our woodworkers care about sustaining strong forests and building quality goods,
            that is why we source 70% of our materials from reclamation lots. Cutting
            down trees is never our first stop.
        </Popup>
            <div className='content'>
                <div className='with-button'>
                <div className='titleCard'>
                    <h3>Sustainable Carpentry</h3>
                    <div className='subtitle'>
                        We source the highest quality materials
                        <br/>
                        so your piece will last a lifetime,
                        <br/>
                        and longer.
                    </div>
                </div>
                    <button className='read-more-btn' onClick={() => setReadMore(true)}>
                        Read More <img src={arrow} className='arrow' alt='read more arrow' />
                    </button>
                </div>
                <img className='carpenter-img' src={carpenter} alt='carpenter' />
                <div className='list'>
                    <p><img src={star} alt='bullet point' />Custom designs</p>
                    <p><img src={star} alt='bullet point' />Expert craftspeople</p>
                    <p><img src={star} alt='bullet point' />Sustainable sourcing</p>
                    <p><img src={star} alt='bullet point' />Energy efficient practices</p>
                    <p><img src={star} alt='bullet point' />Hand made with care</p>
                </div>
                <button className='read-more-btn-mbl' onClick={() => setReadMore(true)}>
                    Read More <img src={arrow} className='arrow' alt='read more arrow' />
                </button>
            </div>
        </div>
        </>
    );
};

export default Home;