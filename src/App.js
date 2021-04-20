import React from "react";
import GlobalStyle from "./components/GlobalStyle";
import Nav from "./components/Nav";
import AboutUs from "./pages/AboutUs";
import ContactUs from "./pages/ContactUs";
import OurWork from "./pages/OurWork";

import { Route, Switch } from "react-router-dom";
function App() {
  return (
    <div className="App">
      <GlobalStyle />
      <Nav />

      <Switch>
        <Route path="/" exact>
          <AboutUs />
        </Route>

        <Route path="/contact">
          <ContactUs />
        </Route>
        <Route path="/work">
          <OurWork />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
