import React from "react";
import PropTypes from "prop-types";
import classNames from "classnames";
import { withStyles } from "@material-ui/core/styles";
import { ArrowDownward } from "@material-ui/icons";
import LayoutBody from "../../components/LayoutBody";
import { layout as styles } from "./styles";

function ProductHeroLayout(props) {
  const { backgroundClassName, children, classes } = props;

  return (
    <section className={classes.root}>
      <LayoutBody className={classes.layoutBody} width="full">
        <img src="/img/dharmabot-logo-round.png" alt="wonder" width="147" height="147" />
        {children}
        <div className={classes.backdrop} />
        <div className={classNames(classes.background, backgroundClassName)} />
        <ArrowDownward />
      </LayoutBody>
    </section>
  );
}

ProductHeroLayout.propTypes = {
  backgroundClassName: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(ProductHeroLayout);
