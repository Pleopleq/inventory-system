import React, { useState } from "react"
import UserService from "../services/users";

const RegisterForm: React.FC<{}> = () => {
  const [registerState, setRegisterState] = useState({
    username: '',
    email: '',
    password: '',
    confirmation: ''
  })
  const userService = new UserService() 

  function handleChange(evt: React.ChangeEvent<HTMLInputElement>) {
    const value = evt.target.value

    setRegisterState({
      ...registerState,
      [evt.target.name]: value
    })
  }

  async function handleOnSubmit(e: React.FormEvent) {
    e.preventDefault()

    if(registerState.password !== registerState.confirmation) {
      return alert("The password is not the same.")
    }

    const newUser = await userService.register({username: registerState.username, password: registerState.password, email: registerState.email})

    if(newUser === '') {
      return alert("This username and email is already taken.")
    }
    console.log(newUser)
  }

  return (
    <form onSubmit={handleOnSubmit}>
      <div>
        <label>Username</label>
        <input name="username" type='text' value={registerState.username} onChange={handleChange}></input>
      </div>
      <div>
        <label>Email</label>
        <input name="email" type='text' value={registerState.email} onChange={handleChange}></input>
      </div>
      <div>
        <label>Password</label>
        <input name="password" type='password' value={registerState.password} onChange={handleChange}></input>
      </div>
      <div>
        <label>Confirmed Password</label>
        <input name="confirmation" type='password' value={registerState.confirmation} onChange={handleChange}></input>
      </div>
      <button type="submit">Submit</button>
    </form>
  );
};

export default RegisterForm;
