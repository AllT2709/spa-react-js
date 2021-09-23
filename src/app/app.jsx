import React from "react";
import Home from "../pages/Home.jsx";
import Error404 from "../pages/Error404.jsx";
import Character from "../pages/Character.jsx";
import About from "../pages/About.jsx";
import Header from "../templates/Header.jsx";

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

const App = () => {
  return (
    <Router>
      <main className="Main">
        <Header />
        <section id="content">
          <div className="loading">
            <Switch>
              <Route exact path="/">
                <Home />
              </Route>
              <Route path="/about">
                <About />
              </Route>
              <Route path="/:id" children={<Character />}></Route>
              <Route path="*">
                <Error404 />
              </Route>
            </Switch>
          </div>
        </section>
      </main>
    </Router>
  );
};

export default App;
