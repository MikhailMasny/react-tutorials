import React from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import AboutPage from "./pages/AboutPage";
import HomePage from "./pages/HomePage";
import SecretPage from "./pages/SecretPage";
import ShopPage from "./pages/ShopPage";

export const useRoutes = (token) => {
  if (token && token !== '') {
    return (
      <Switch>
        <Route path="/" exact>
          <HomePage />
        </Route>
        <Route path="/about" exact>
          <AboutPage />
        </Route>
        <Route path="/shop" exact>
          <ShopPage />
        </Route>
        <Route path="/secret" exact>
          <SecretPage />
        </Route>
        <Redirect to="/" />
      </Switch>
    );
  }
  return (
    <Switch>
      <Route path="/" exact>
        <HomePage />
      </Route>
      <Route path="/about" exact>
        <AboutPage />
      </Route>
      <Route path="/shop" exact>
        <ShopPage />
      </Route>
      <Redirect to="/" />
    </Switch>
  );
};
