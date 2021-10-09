import React from "react";
import PopupWithForm from "./PopupWithForm";

function AddPlacePopup(props){

  const [name, setName] = React.useState('')
  const [link, setLink] = React.useState('')

  function handleNameChange(e) {
    setName(e.target.value)
  }
  function handleLinkChange(e) {
    setLink(e.target.value)
  }

  React.useEffect(() => {
    setName('');
    setLink('');
  }, [props.isOpen]);

  function handleSubmit(e){
    e.preventDefault()
    props.onChangeLoading();
    props.onAddPlace({
      name,
      link,
    });
  }

  function overlayClick(e){
    props.overlay(e.target)
  }

  const handleButtonText = (`${props.isLoading ? 'Сохранение...' : 'Сохранение'}`);

    return(
        <PopupWithForm overlayClick={overlayClick} onSubmit={handleSubmit} isOpen={props.isOpen} onClose={props.onClose} name="add" title="Новое место" buttonText={handleButtonText}>
          <input className="popup__item popup__item_title_add" value={name}
                 onChange={handleNameChange} type="text" name="name" placeholder="Название" required minLength="2" maxLength="30" />
            <span className="text-input-name-error popup__input-error"></span>
            <input className="popup__item popup__item_type_job" value={link} onChange={handleLinkChange}
                   type="url" name="link" placeholder="Ссылка на картинку" required minLength="2" maxLength="200" />
            <span className="text-input-job-error popup__input-error"></span>
        </PopupWithForm>
    )
}

export default AddPlacePopup;
