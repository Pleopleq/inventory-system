import React, { useState } from "react"
import UserService from "../services/users";
import FormNotification from "./FormNotification";

const RegisterForm: React.FC<{}> = () => {
  const userService = new UserService()
  const [alert, setAlert] = useState({
    type: '',
    message: ''
  })
  const [registerState, setRegisterState] = useState({
    username: '',
    email: '',
    password: '',
    confirmation: ''
  })

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
      setAlert({type: 'red', message: "The password is not the same."})
      return setTimeout(() => {
        setAlert({type: '', message: ' '})
      }, 3000);
    }

    const newUser = await userService.register({username: registerState.username, password: registerState.password, email: registerState.email})

    if(newUser === '') {
      setAlert( {type: 'red', message: "This username or email is already taken."})
      return setTimeout(() => {
        setAlert({type: '', message: ' '})
      }, 3000);
    }

    setRegisterState({
      username: '',
      email: '',
      password: '',
      confirmation: ''
    })

    setAlert({type: 'green', message: "Your account is registered!"})
      return setTimeout(() => {
        window.location.reload()
        setAlert({type: '', message: ' '})
      }, 3000);
  }

  return (
    <div>
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
      <FormNotification className={''} type={alert.type} message={alert.message}></FormNotification>
    </div>
  );
};

export default RegisterForm;
