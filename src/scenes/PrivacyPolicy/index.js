import withRoot from "../../modules/withRoot";
// --- Post bootstrap -----
import React from "react";
import { withRouter } from "react-router-dom";
import Typography from "../../components/Typography";
import LayoutBody from "../../components/LayoutBody";
import AppAppBar from "../../views/AppAppBar";
import AppFooter from "../../views/AppFooter";
import Content from "./content";

function Privacy() {
  return (
    <React.Fragment>
      <AppAppBar />
      <LayoutBody margin marginBottom>
        <Typography variant="h3" gutterBottom marked="center" align="center">
          Privacy Policy
        </Typography>
        <Content />
      </LayoutBody>
      <AppFooter />
    </React.Fragment>
  );
}

export default withRouter(withRoot(Privacy));
