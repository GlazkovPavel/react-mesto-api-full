import React from "react";

function PopupWithForm(props){
    return(
        <div onClick={props.overlayClick} className={`popup popup_type_${props.name} ${props.isOpen && 'popup_opened'}`}>
            <div className="popup__container">
                <button className="popup__close" type="button" onClick={props.onClose}></button>
                <h2 className="popup__heading">{`${props.title}`}</h2>
                <form className="popup__form form" onSubmit={props.onSubmit} name="form" type="form">
                    {props.children}

                    <button className="popup__save" type="submit">{`${props.buttonText}`}</button>
                </form>
            </div>
        </div>
    )
}

export default PopupWithForm;