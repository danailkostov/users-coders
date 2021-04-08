import { Typography } from "@material-ui/core";
import React, { useContext } from "react";
import { AppContext } from "../../context/context";

const Error = () => {
  const { error } = useContext(AppContext);
  const { msg } = error;
  return (
    <Typography color="secondary" align="center" gutterBottom paragraph>
      {msg}
    </Typography>
  );
};

export default Error;
