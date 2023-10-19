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

export default Popup;