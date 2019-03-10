import React from "react";
import classNames from "classnames";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import MuiTextField from "@material-ui/core/TextField";
import { capitalize } from "@material-ui/core/utils/helpers";
import styles from "./styles";

function TextField(props) {
  const {
    classes,
    InputProps: {
      classes: { input: InputPropsClassesInput, ...InputPropsClassesOther } = {},
      ...InputPropsOther
    } = {},
    InputLabelProps,
    noBorder,
    size,
    SelectProps,
    ...other
  } = props;

  return (
    <MuiTextField
      InputProps={{
        disableUnderline: true,
        classes: {
          root: classes.root,
          input: classNames(
            classes.input,
            classes[`inputSize${capitalize(size)}`],
            {
              [classes.inputBorder]: !noBorder
            },
            InputPropsClassesInput
          ),
          disabled: classes.disabled,
          ...InputPropsClassesOther
        },
        ...InputPropsOther
      }}
      InputLabelProps={{
        ...InputLabelProps,
        shrink: true,
        className: classes.formLabel
      }}
      SelectProps={{
        ...SelectProps,
        classes: {
          select: classes.select,
          icon: classes.selectIcon
        }
      }}
      {...other}
    />
  );
}

TextField.propTypes = {
  classes: PropTypes.object.isRequired,
  InputLabelProps: PropTypes.object,
  InputProps: PropTypes.object,
  noBorder: PropTypes.bool,
  SelectProps: PropTypes.object,
  size: PropTypes.oneOf(["small", "medium", "large", "xlarge"])
};

TextField.defaultProps = {
  noBorder: false,
  size: "medium"
};

export default withStyles(styles)(TextField);
