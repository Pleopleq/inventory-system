import React from "react";

const RegisterForm: React.FC<{}> = () => {
  return (
    <form>
      <label>Username</label>
      <input type='text'></input>
      <label>Password</label>
      <input type='password'></input>
      <label>Confirmed Password</label>
      <input type='password'></input>
      <button onSubmit={alert}></button>
    </form>
  );
};

export default RegisterForm;
