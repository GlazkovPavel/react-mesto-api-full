import React from "react";
import PopupWithForm from "./PopupWithForm";


function EditAvatarPopup({isOpen, onClose, onUpdateAvatar, overlay, isLoading, onChangeLoading}){
  const inputAvatarRef = React.useRef();

  function handleSubmit(e) {
    e.preventDefault();
    onChangeLoading();
    onUpdateAvatar({
      avatar: inputAvatarRef.current.value /* Значение инпута, полученное с помощью рефа */,
    });
  }

  function overlayClick(e){
    overlay(e.target)
  }

  const handleButtonText = (`${isLoading ? 'Сохранение...' : 'Сохранение'}`);


  return(
        <PopupWithForm overlayClick={overlayClick} onSubmit={handleSubmit} isOpen={isOpen} onClose={onClose} name="avatar" title="Обновить аватар" buttonText={handleButtonText}>
            <input ref={inputAvatarRef} className="popup__item popup__item_type_foto" id="url-inputAvatar"
                   type="url" name="link" placeholder="Ссылка на фото" required />
                <span className="url-inputAvatar-error popup__input-error"></span>
        </PopupWithForm>
    )
}

export default EditAvatarPopup;