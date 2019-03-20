import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import Link from "@material-ui/core/Link";
import Button from "../../components/Button";
import Typography from "../../components/Typography";
import ProductHeroLayout from "./layout";
import styles, { backgroundImage } from "./styles";

function ProductHero(props) {
  const { classes } = props;

  return (
    <ProductHeroLayout backgroundClassName={classes.background}>
      {/* Increase the network loading priority of the background image. */}
      <img style={{ display: "none" }} src={backgroundImage} alt="" />
      <br />
      <Typography color="inherit" align="center" variant="h3" marked="center">
        The Interactive Buddhist Calendar
      </Typography>
      <Typography
        color="inherit"
        align="center"
        variant="h5"
        className={[classes.h5, classes.subHeading]}
      >
        Receive inspirational Dharma quotes directly in your Messenger inbox along with timely
        reminders of important Buddhist holidays and the anniversaries of Sakya teachers.
      </Typography>
      <Button
        color="secondary"
        variant="contained"
        size="medium"
        className={classes.button}
        component={(linkProps) => (
          <Link {...linkProps} href="https://m.me/dharmabot" variant="button" />
        )}
      >
        Chat now
      </Button>
      <Typography variant="body2" color="inherit" className={classes.more}>
        Learn more
      </Typography>
    </ProductHeroLayout>
  );
}

ProductHero.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(ProductHero);
