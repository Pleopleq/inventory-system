import React from "react";
import Access from "./pages/Access";
import "./styles/styles.css";

const Application: React.FC<{}> = (props) => {
  return (
    <div>
      <Access name={"AccessPage"}></Access>
    </div>
  );
};

export default Application;
