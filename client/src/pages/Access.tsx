import React, { useEffect, useState } from "react";
import LoginForm from "../components/LoginForm";
import RegisterForm from "../components/RegisterForm";
import logging from "../config/logging";
import IPage from "../interfaces/Page";

const Access: React.FC<IPage> = ({ name }) => {
  const [formTitle, setFormTitle] = useState("Login");
  const [formType, setFormType] = useState(<LoginForm></LoginForm>);

  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    if (event.currentTarget.value === "login") {
      setFormTitle("Login");
      setFormType(<LoginForm></LoginForm>);
      return;
    }
    if (event.currentTarget.value === "register") {
      setFormTitle("Register");
      setFormType(<RegisterForm></RegisterForm>);
      return;
    }
  };

  useEffect(() => {
    logging.info(`Loading ${name}`);
  }, [name]);

  return (
    <>
      <div className='access-container'>
        <div className='access-form__container'>
          <h1>{formTitle}</h1>
          {formType}
          <div className='access-options__container'>
            <button value='login' onClick={handleClick}>
              Login
            </button>
            <button value='register' onClick={handleClick}>
              Register
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Access;
