import React from 'react';
import './styles.css'

interface ModalProps{
    isOpen: boolean;
    setIsOpen: (e: boolean) => void
    elements: string[]
}

const Modal = ({isOpen, setIsOpen, elements}: ModalProps) => {
    return (
        <div className="modal">
            <div className="modal_content">
                <h1>{eval(elements.join('')).toFixed(2)}</h1>
                <button className='modal_btn' onClick={() => setIsOpen(!isOpen)}>Закрыть</button>
            </div>
        </div>
    );
};

export default Modal;