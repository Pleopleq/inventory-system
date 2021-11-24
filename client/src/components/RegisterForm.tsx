import React, { useState } from "react";

const RegisterForm: React.FC<{}> = () => {
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

  return (
    <form>
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
      <button onSubmit={alert}>Submit</button>
    </form>
  );
};

export default RegisterForm;
