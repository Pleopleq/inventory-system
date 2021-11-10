import React from "react";

const LoginForm: React.FC<{}> = () => {
  return (
    <form>
      <div>
        <label>Username</label>
        <input type='text'></input>
      </div>
      <div>
        <label>Password</label>
        <input type='password'></input>
      </div>
      <button onSubmit={alert}>Login</button>
    </form>
  );
};

export default LoginForm;
