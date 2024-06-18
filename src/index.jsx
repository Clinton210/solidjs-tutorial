/* @refresh reload */
import { render } from "solid-js/web";
import "./assets/styles.scss";
// import App from "./App";
import { Router, Route } from "@solidjs/router";
import App from "./App";
import { Callback } from "./pages/callback";
import { Home } from "./pages/home";
import { SignUp } from "./pages/sign-up";

const root = document.getElementById("root");

if (import.meta.env.DEV && !(root instanceof HTMLElement)) {
  throw new Error(
    "Root element not found. Did you forget to add it to your index.html? Or maybe the id attribute got misspelled?",
  );
}

render(
  () => (
    <Router root={App}>
      <Route path={"/"} component={Home}></Route>
      <Route path={"/signup"} component={SignUp}></Route>
      <Route path={"/callback"} component={Callback}></Route>
    </Router>
  ),
  root,
);