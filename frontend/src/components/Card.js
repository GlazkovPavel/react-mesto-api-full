import React from "react";
import {CurrentUserContext} from "../contexts/CurrentUserContext";

function Card({ card, onCardClick, onCardLike, onCardDelete }){

  const currentUser = React.useContext(CurrentUserContext)

  function handleClick() {
    onCardClick(card)
  }
  function handleLikeClick() {
    onCardLike(card)
  }
  function handleDeleteClick() {
    onCardDelete(card)
  }
  // Определяем, являемся ли мы владельцем текущей карточки
  const isOwn = card.owner._id === currentUser._id;

// Создаём переменную, которую после зададим в `className` для кнопки удаления
  const cardDeleteButtonClassName = (
      `element__trash ${isOwn ? '' : 'element__trash_hidden'}`
  );

  // Определяем, есть ли у карточки лайк, поставленный текущим пользователем
  const isLiked = card.likes.some(i => i._id === currentUser._id);

// Создаём переменную, которую после зададим в `className` для кнопки лайка
  const cardLikeButtonClassName = (
      `element__description-like ${isLiked ? 'element__description-like_active' : ' '}`
  );

  return(

        <li className="element__container">
          <div className="element__foto-container">
            <img className="element__foto" onClick={handleClick} src={card.link} alt={card.name} />
            <button className={cardDeleteButtonClassName} onClick={handleDeleteClick}></button>
          </div>
          <div className="element__description">
            <h2 className="element__description-text">{card.name}</h2>
            <div className="element__container-like">
              <button className={cardLikeButtonClassName} onClick={handleLikeClick} type="button"></button>
              <span className="element__likes">{card.likes.length}</span>
            </div>
          </div>
        </li>
  )
}

export default Card;