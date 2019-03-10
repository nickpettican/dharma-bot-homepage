import React from "react";
import PropTypes from "prop-types";
import compose from "recompose/compose";
import pure from "recompose/pure";
import { withStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Link from "@material-ui/core/Link";
import LayoutBody from "../../components/LayoutBody";
import Typography from "../../components/Typography";
import TextField from "../../components/TextField";
import styles from "./styles";

const LANGUAGES = [
  {
    code: "en-US",
    name: "English"
  },
  {
    code: "es-ES",
    name: "Español"
  }
];

function AppFooter(props) {
  const { classes } = props;

  return (
    <Typography component="footer" className={classes.root}>
      <LayoutBody className={classes.layoutBody} width="large">
        <Grid container spacing={40}>
          <Grid item xs={6} sm={4} md={2}>
            <Grid
              container
              direction="column"
              justify="flex-end"
              className={classes.iconsWrapper}
              spacing={16}
            >
              <Grid item className={classes.icons}>
                <a href="https://facebook.com/dharmabot" className={classes.icon}>
                  <img src="/img/appFooterFacebook.png" alt="Facebook" />
                </a>
                <a href="https://m.me/dharmabot" className={classes.icon}>
                  <img src="/img/appFooterTwitter.png" alt="Messenger" />
                </a>
              </Grid>
              <Grid item>© 2018 Dharma Bot</Grid>
            </Grid>
          </Grid>
          <Grid item xs={6} sm={4} md={2}>
            <Typography variant="h6" marked="left" gutterBottom>
              Legal
            </Typography>
            <ul className={classes.list}>
              <li className={classes.listItem}>
                <Link href="/privacy-policy">Privacy</Link>
              </li>
            </ul>
          </Grid>
          <Grid item xs={6} sm={8} md={4}>
            <Typography variant="h6" marked="left" gutterBottom>
              Language
            </Typography>
            <TextField
              select
              SelectProps={{
                native: true
              }}
              className={classes.language}
            >
              {LANGUAGES.map((language) => (
                <option value={language.code} key={language.code}>
                  {language.name}
                </option>
              ))}
            </TextField>
          </Grid>
        </Grid>
      </LayoutBody>
    </Typography>
  );
}

AppFooter.propTypes = {
  classes: PropTypes.object.isRequired
};

export default compose(
  pure,
  withStyles(styles)
)(AppFooter);
