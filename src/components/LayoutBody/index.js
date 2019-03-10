import React from "react";
import PropTypes from "prop-types";
import classNames from "classnames";
import { withStyles } from "@material-ui/core/styles";
import { capitalize } from "@material-ui/core/utils/helpers";
import styles from "./styles";

function LayoutBody(props) {
  const {
    children,
    classes,
    className,
    component: Component,
    fullHeight,
    fullWidth,
    margin,
    marginBottom,
    style,
    width,
    ...other
  } = props;

  return (
    <Component
      className={classNames(
        classes.root,
        {
          [classes[`width${capitalize(width)}`]]: !fullWidth,
          [classes.fullHeight]: fullHeight,
          [classes.margin]: margin,
          [classes.marginBottom]: marginBottom
        },
        className
      )}
      style={style}
      {...other}
    >
      {children}
    </Component>
  );
}

LayoutBody.propTypes = {
  children: PropTypes.node,
  classes: PropTypes.object.isRequired,
  className: PropTypes.string,
  component: PropTypes.oneOfType([PropTypes.string, PropTypes.func]),
  fullHeight: PropTypes.bool,
  fullWidth: PropTypes.bool,
  margin: PropTypes.bool,
  marginBottom: PropTypes.bool,
  style: PropTypes.object,
  width: PropTypes.oneOf(["small", "medium", "large", "xlarge", "full"])
};

LayoutBody.defaultProps = {
  component: "div",
  fullHeight: false,
  fullWidth: false,
  margin: false,
  marginBottom: false,
  width: "medium"
};

export default withStyles(styles)(LayoutBody);
