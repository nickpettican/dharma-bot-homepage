import React from "react";
import PropTypes from "prop-types";
import Button from "@material-ui/core/Button";
import { withStyles } from "@material-ui/core/styles";
import LayoutBody from "../../components/LayoutBody";
import Typography from "../../components/Typography";
import styles from "./styles";

function ProductSmokingHero(props) {
  const { classes } = props;

  return (
    <LayoutBody className={classes.root} component="section">
      <Button className={classes.button}>
        <Typography variant="h4" component="span">
          Got any questions? Need help?
        </Typography>
      </Button>
      <Typography variant="subtitle1" className={classes.link}>
        We are here to help. Get in touch!
      </Typography>
      <img src="/img/dharmabot-logo-round.png" className={classes.buoy} alt="dharmabot-logo" />
    </LayoutBody>
  );
}

ProductSmokingHero.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(ProductSmokingHero);
