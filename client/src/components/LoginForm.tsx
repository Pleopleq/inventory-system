import React from "react";

const LoginForm: React.FC<{}> = () => {
  return (
    <form>
      <label>Username</label>
      <input type='text'></input>
      <label>Password</label>
      <input type='password'></input>
      <button onSubmit={alert}></button>
    </form>
  );
};

export default LoginForm;
