import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import {
  Landing,
  FlashCards,
  Memorize,
  Profile,
  Register,
  Login,
  AddCards,
  Boxes,
} from "../components";

function Routes() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={Landing} />
        <Route path="/cards" exact component={FlashCards} />
        <Route path="/addCards" exact component={AddCards} />
        <Route path="/memorize" exact component={Memorize} />
        <Route path="/boxes" exact component={Boxes} />
        <Route path="/profile" exact component={Profile} />
        <Route path="/register" exact component={Register} />
        <Route path="/login" exact component={Login} />
      </Switch>
    </BrowserRouter>
  );
}

export default Routes;
