import headerCurve from '/header-curve.svg'

const Header = () => {

    return (
        <div className='header'>
            <img src={headerCurve} className='svg-curve-header' alt='header curve' />
        </div>
    );
};

export default Header;