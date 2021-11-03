import React, { useEffect } from "react";
import IPage from "../interfaces/Page";
import logging from "../config/logging";

const HomePage: React.FunctionComponent<IPage> = (props) => {
  useEffect(() => {
    logging.info(`Loading ${props.name}`);
  }, [props.name]);
  return <p>This is the home page</p>;
};

export default HomePage;
