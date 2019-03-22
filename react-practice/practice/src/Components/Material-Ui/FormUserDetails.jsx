import React, { Component } from "react";
import { AppBar } from "@material-ui/core/AppBar";

class FormUserDetails extends Component {
  state = {
    step: 1,
    firstName: "",
    LastName: "",
    Email: ""
  };

  render() {
      return <AppBar  position="fixed">About</AppBar>
  }
}

export default FormUserDetails;
