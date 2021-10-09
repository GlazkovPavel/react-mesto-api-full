import React from "react";

export function Login(props) {

  const [email, setEmail] = React.useState('');
  const [password, setPassword] = React.useState('');

  function handleSubmit(e){
    e.preventDefault();
    props.enter(email, password)
  }

  return(
      <div className="login">
        <p className="login__title">Вход</p>
        <form className="login__form" type="form" onSubmit={handleSubmit}>
          <input
              className="login__input"
              type="email"
              placeholder="Email"
              onChange={(e) => setEmail(e.target.value)}/>
          <input
              className="login__input"
              type="password"
              placeholder="Пароль"
              onChange={(e) => setPassword(e.target.value)} />
        </form>
        <button className="login__button" type="submit" onClick={handleSubmit}>Войти</button>
      </div>
  )
}