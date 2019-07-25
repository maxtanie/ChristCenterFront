import React, { Component } from "react";
import axios from "axios";
import NavAdmin from "../NavAdmin/NavAdmin";
import "./AdminPage.css";

class AdminPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: "",
      password: ""
    };
    this.api = axios.create({ baseURL: process.env.REACT_APP_BACKEND_API });
  }

  render() {
    console.log(this.state.username, "icicicici");
    // console.log(this.props.username)
    return (
      <section className="adminPage">
        <NavAdmin />
      </section>
    );
  }
}

{
  /* const SayHello = ({ sayHello }) => {
  return <div className="bloc" id={sayHello} />;
}; */
}

export default AdminPage;
