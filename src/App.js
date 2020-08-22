import React, { Component, Suspense, lazy } from "react";
import { BrowserRouter as Router } from "react-router-dom";
import Home from "./Components/Home";

const param = window.location.pathname.slice(1);

export default class App extends Component {
  render() {
    if (param === "") {
      return <Home />;
    } else {
      const Places = lazy(() => import("./Clients/places"));

      return (
        <Router>
          <Suspense fallback={<Home />}>
            <Places />
          </Suspense>
        </Router>
      );
    }
  }
}

