import React from "react";
import { Alert, AlertTitle } from "@material-ui/lab";
const Message = ({ severity, value }) => {
  return (
    <Alert severity={severity}>
      <AlertTitle>{value}</AlertTitle>
    </Alert>
  );
};

Message.defaultProps = {
  severity: "info",
};

export default Message;
