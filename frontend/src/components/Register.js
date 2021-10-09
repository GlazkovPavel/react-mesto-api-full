import React from "react";
import {Link} from "react-router-dom";


export function Register(props) {

  const [email, setEmail] = React.useState('');
  const [password, setPassword] = React.useState('');

  function handleSubmit(e){
    e.preventDefault();
    props.register(email, password)
  }

  return(
      <div className="login">
        <p className="login__title">Регистрация</p>
        <form onSubmit={handleSubmit} className="login__form" type="form">
          <input
              className="login__input"
              type="email"
              name="email"
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Email"
               />
          <input
              className="login__input"
              type="password"
              name="email"
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Пароль"
               />
        </form>
        <button className="login__button" type="submit" onClick={handleSubmit}>Зарегистрироваться</button>
        <Link className="login__link" to="/signin">Уже зарегистрированы? Войти</Link>
      </div>
  )
}
