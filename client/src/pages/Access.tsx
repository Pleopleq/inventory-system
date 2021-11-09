import React, { useEffect } from "react";
import logging from "../config/logging";
import { IAccess } from "../interfaces/AccessInterface/IAccess";

const Access: React.FC<IAccess> = ({ name, title, formType }) => {
  useEffect(() => {
    logging.info(`Loading ${name}`);
  }, [name]);

  return (
    <div>
      <h1>{title}</h1>
      {formType}
    </div>
  );
};

export default Access;
