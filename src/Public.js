import React, { Component } from "react";

export default class Public extends Component {
  state = {
    message: "",
  };

  componentDidMount() {
    fetch("/public")
      .then((res) => {
        if (res.ok) return res.json();
        throw new Error("response was not OK");
      })
      .then((res) => this.setState({ message: res.message }))
      .catch((err) => this.setState({ message: err }));
  }
  render() {
    return <p>{this.state.message}</p>;
  }
}
