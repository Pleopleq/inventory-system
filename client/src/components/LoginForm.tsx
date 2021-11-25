import React, { useState } from "react";
import UserService from "../services/users";
import FormNotification from './FormNotification'

const LoginForm: React.FC<{}> = () => {
  // const [alert, setAlert] = useState({
  //   type: '',
  //   message: ''
  // })
  const [loginState, setLoginState] = useState({
    username: '',
    password: ''
  })
  
  const userService = new UserService()

  function handleChange(evt: React.ChangeEvent<HTMLInputElement>) {
    const value = evt.target.value

    setLoginState({
      ...loginState,
      [evt.target.name]: value
    })
  }

  async function handleOnSubmit(evt: React.FormEvent) {
    evt.preventDefault()

    const loggedUser = await userService.login({ username: loginState.username, password: loginState.password})
    
    console.log(loggedUser)

  }

  return (
    <form onSubmit={handleOnSubmit}>
      <div>
        <label>Username</label>
        <input onChange={handleChange} value={loginState.username} name="username" type='text'></input>
      </div>
      <div>
        <label>Password</label>
        <input onChange={handleChange} value={loginState.password} name="password" type='password'></input>
      </div>
      <button type="submit">Login</button>
    </form>
  );
};

export default LoginForm;
