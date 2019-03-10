import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import LayoutBody from "../../components/LayoutBody";
import Typography from "../../components/Typography";
import styles from "./styles";

function ProductValues(props) {
  const { classes } = props;

  return (
    <section className={classes.root}>
      <LayoutBody className={classes.layoutBody} width="large">
        <img
          src="/static/themes/onepirate/productCurvyLines.png"
          className={classes.curvyLines}
          alt="curvy lines"
        />
        <Grid container spacing={40}>
          <Grid item xs={12} md={4}>
            <div className={classes.item}>
              <img
                className={classes.image}
                src="/static/themes/onepirate/productValues1.svg"
                alt="suitcase"
              />
              <Typography variant="h6" className={classes.title}>
                Easy and fun
              </Typography>
              <Typography variant="h5">
                {"Subscribe in just a few steps in a fun and interactive way. "}
                {"You are in control of what you receive and when you receive it."}
              </Typography>
            </div>
          </Grid>
          <Grid item xs={12} md={4}>
            <div className={classes.item}>
              <img
                className={classes.image}
                src="/static/themes/onepirate/productValues2.svg"
                alt="graph"
              />
              <Typography variant="h6" className={classes.title}>
                The best quotes
              </Typography>
              <Typography variant="h5">
                {"Dharma Bot provides you with curated and inspiring quotes "}
                {"from various teachers, Buddhas and Boddhisattvas."}
              </Typography>
            </div>
          </Grid>
          <Grid item xs={12} md={4}>
            <div className={classes.item}>
              <img
                className={classes.image}
                src="/static/themes/onepirate/productValues3.svg"
                alt="clock"
              />
              <Typography variant="h6" className={classes.title}>
                Reminders and updates
              </Typography>
              <Typography variant="h5">
                {"Get reminded of the most important days in the Tibetan Buddhist calendar. "}
                {"Dharma Bot will remind you automatically and even give you more information."}
              </Typography>
            </div>
          </Grid>
        </Grid>
      </LayoutBody>
    </section>
  );
}

ProductValues.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(ProductValues);
