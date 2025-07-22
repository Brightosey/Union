import "./Modal.scss";

function Modal ({isOpen, message, onClose}) {

    if(!isOpen) return null;
    
    return(
        <section className="modal__overlay">
            <div className="modal">
                <p className="modal__message">{message}</p>
                <button className="modal__button" onClick={onClose}>OK</button>
            </div>
        </section>
    );
}

export default Modal;