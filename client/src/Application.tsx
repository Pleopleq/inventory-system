import React from "react";
import LoginForm from "./components/LoginForm";
import Access from "./pages/Access";

const Application: React.FC<{}> = (props) => {
  return (
    <Access
      name={"AccessPage"}
      title={"Login"}
      formType={<LoginForm></LoginForm>}></Access>
  );
};

export default Application;
