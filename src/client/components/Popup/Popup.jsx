import PropTypes from 'prop-types';

const Popup = (props) => {

    return (props.action) ? (
        <div className='popup'>
            <div className="popup-inner">
                { props.children }
                <button className="close-btn" onClick={()=> props.setAction(false)}>
                    Close
                </button>
            </div>
        </div>
    ) : null;
};

Popup.propTypes = {
    action: PropTypes.func.isRequired,
    setAction: PropTypes.func.isRequired,
    children: PropTypes.node,
};

Popup.defaultProps = {
    children: null,
};

export default Popup;