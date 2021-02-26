import React, { Component } from "react";
import { BrowserRouter as Router } from "react-router-dom";
import Places from './Clients/places';

export default class App extends Component {
  render() {

      return (
        <Router>
         
            <Places />
         
        </Router>
      );
    }
  }


