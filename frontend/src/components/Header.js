import React from "react";
import logo from "../images/mesto.svg";
import { Route, Link} from "react-router-dom";



function Header(props) {

  return(
        <header className="header">
          <img className="header__logo" src={logo} alt="Место" />
          <Route path="/signup">
            <Link to="/signin" className="header__button">Войти</Link>
          </Route>
          <Route path="/signin">
            <Link to="/signup" className="header__button">Регистрация</Link>
          </Route>
          <Route exact path="/">
            <div className="header__container">
              <p className="header__email">{props.email}</p>
              <button className="header__button" onClick={props.signOut}>Выйти</button>
            </div>
          </Route>
        </header>
    )
}
export default Header;
