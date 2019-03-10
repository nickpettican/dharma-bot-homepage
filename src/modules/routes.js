import React from "react";
import { Route, Switch } from "react-router-dom";

// scenes
import Home from "../scenes/Home";
import PrivacyPolicy from "../scenes/PrivacyPolicy";

// components
import AppliedRoute from "../components/AppliedRoute";

/**
 * Custom router that uses Switch to iterate over each route until
 * it finds the one matching the current pathname and renders it
 */
export default (props) => {
  return (
    <Switch>
      <AppliedRoute path="/" exact component={Home} />
      <AppliedRoute path="/privacy-policy" exact component={PrivacyPolicy} />
      {/* Finally, catch all unmatched routes */}
      <Route component={Home} />
    </Switch>
  );
};
