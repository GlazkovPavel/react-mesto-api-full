import React from 'react';
import Card from "./Card";
import {CurrentUserContext} from "../contexts/CurrentUserContext";

function Main(props){

    const currentUser = React.useContext(CurrentUserContext);

    return(
        <main className="content">
            <section className="profile">
                <div className="profile__foto-container" onClick={props.onEditAvatar}>
                    <button className="profile__foto-edit"></button>
                    <img className="profile__foto" alt={currentUser.name} src={currentUser.avatar}  />
                </div>
                <div className="profile__container-text">
                    <h1 className="profile__title">{currentUser.name}</h1>
                    <p className="profile__subtitle">{currentUser.about}</p>
                </div>
                <button className="profile__button-edit" type="button" onClick={props.onEditProfile}></button>
                <button className="profile__button-add" type="button" onClick={props.onAddPlace}></button>
            </section>

            <section className="element">
                <ul className="element__grid">
                  {props.cards.map(card =>(
                      <Card
                        key={card._id}
                        card={card}
                        onCardClick={props.onCardClick}
                        onCardLike={props.onCardLike}
                        onCardDelete={props.onCardDelete}

                      />
                  ))}

                </ul>
            </section>
        </main>
    )
}

export default Main;
