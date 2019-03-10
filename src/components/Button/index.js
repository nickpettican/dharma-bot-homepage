import React from "react";
import { withStyles } from "@material-ui/core/styles";
import MuiButton from "@material-ui/core/Button";
import styles from "./styles";

function Button(props) {
  return <MuiButton {...props} />;
}

export default withStyles(styles)(Button);
