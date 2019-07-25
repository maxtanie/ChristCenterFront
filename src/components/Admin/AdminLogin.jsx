import React, { Component } from "react";
import "./AdminLogin.css";
import axios from "axios";

class AdminLogin extends Component {
  constructor(props) {
    super(props);
    this.state = {
      apiAdmin: [],
      username: "Maxtanie",
      password: "vafc2012"
    };
    this.api = axios.create({ baseURL: process.env.REACT_APP_BACKEND_API });
  }

  handleChange = e => {
    console.log(e.target.value);
    e.preventDefault();
    this.setState({
      [e.target.name]: e.target.value
    });
  };

  GetAdminPage = () => {
    this.api
      .post("/admin/login", this.state)
      .then(res => {
        // this.props.history.push("/page");
        console.log("RESSSSSSSS", res);
      })
      .catch(err => {
        console.log("ERRRRRR", err);
      });
  };

  handleSubmitLogin = e => {
    e.preventDefault();
    console.log(this.state);
    this.api.post("/admin/login", this.state).then(res => {
      console.log("yo", res.data);
      window.localStorage.setItem("admin", JSON.stringify(res.data));
      this.props.history.push("/admin/index");
      // console.log(this.state.apiAdmin);
    });
  };

  componentDidMount = () => {
    this.GetAdminPage();
  };

  render() {
    console.log(this.state.username, "herrreeee");
    console.log(this.props);
    const { username, password } = this.state;
    return (
      <section className="adminLoginHome">
        <div className="containerAdminLogin contentCenter">
          <form
            action=""
            className="formAdminLogin"
            onChange={this.handleChange}
            onSubmit={this.handleSubmitLogin}
          >
            <h1 className="center mBot grey">Log In</h1>
            <input
              type="text"
              name="username"
              placeholder="Username"
              className="inputAdmin"
              value={username}
            />
            <input
              type="password"
              name="password"
              placeholder="Password"
              className="inputAdmin"
              id=""
              value={password}
            />
            <button className="btnLogin">Log In</button>
          </form>
        </div>
      </section>
    );
  }
}

{
  /* const SayHello = ({ sayHello }) => {
  return <div className="bloc" id={sayHello} />;
}; */
}

export default AdminLogin;
