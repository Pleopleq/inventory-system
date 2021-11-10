import React from "react";

const RegisterForm: React.FC<{}> = () => {
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
      <div>
        <label>Confirmed Password</label>
        <input type='password'></input>
      </div>
      <button onSubmit={alert}>Submit</button>
    </form>
  );
};

export default RegisterForm;
