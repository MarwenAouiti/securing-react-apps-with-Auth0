import React, { Component } from "react";

export default class Callback extends Component {
  componentDidMount() {
    // Handle Auth if url has the expected values
    if (/access_token|id_token|error/.test(this.props.location.hash)) {
      this.props.auth.handleAuthentication();
    } else {
      throw new Error("Invalid callback url");
    }
  }
  render() {
    return <h1> Loading...</h1>;
  }
}
