
const Modal = ({ children }) => {
    return (
        <div>
             <input type="checkbox" id="openModal" className="modal-toggle" />
            <div className="modal" role="dialog">

                <div className="modal-box">
                    <div className="modal-action">
                        <label htmlFor="openModal" className="btn">Close!</label>
                    </div>
                    {children}
                </div>
            </div>
        </div>
    );
};

export default Modal;