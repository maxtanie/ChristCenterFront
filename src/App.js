import React, { Component } from "react";
import { Route, Router, Switch, BrowserRouter } from "react-router-dom";
import { browserHistory } from "react-router";
import { withRouter } from "react-router-dom";
import "./App.css";
import axios from "axios";

// Components
import Nav from "./components/Nav/Nav";
import Footer from "./components/Footer/Footer";
import Home from "./components/Home/Home";
import Films from "./components/Films/Films";
import Series from "./components/Series/Series";
import SeeMore from "./components/SeeMore/SeeMore";
import Enseignements from "./components/Enseignements/Enseignements";
import MoviesLists from "./components/MoviesLists/MoviesLists";
import FilterSearch from "./components/FilterSearch/FilterSearch";
import MainMovie from "./components/MainMovie/MainMovie";
import Teachings from "./components/Teachings/Teachings";
import FormTeachingsAdults from "./components/FormTeachingsAdults/FormTeachingsAdults";
import ManageTeachings from "./components/ManageTeachings/ManageTeachings";
import EditTeachings from "./components/ManageTeachings/EditTeachings/EditTeachings";
// ADMIN
import AdminLogin from "./components/Admin/AdminLogin";
import AdminPage from "./components/Admin/AdminPage/AdminPage";

// import ScrollToTop from "./ScrollToTop";

class App extends Component {
  state = {
    apiMovies: [],
    apiSeeMoreByID: {},
    searchMovies: "",
    // showLayer: "",
    muteVideo: "",
    poster: "",
    showLayer: false,
    hideNav: "",
    hideFooter: "",
    hideLayer: "",
    loader: "",
    loggedInUser: null
  };

  constructor(props) {
    super(props);
    this.props.history.listen((location, action) => {
      console.log("on route change");
      this.setState(
        {
          loggedInUser: JSON.parse(window.localStorage.getItem("admin"))
        },
        () => {
          console.log("updated state ???", this.state.loggedInUser);
        }
      );
    });
  }

  api = axios.create({ baseURL: process.env.REACT_APP_BACKEND_API });

  // loader = () => {
  //   setTimeout(() => {
  //     this.setState({
  //       loader: (
  //         <video id="background-video" loop autoPlay>
  //           <source src="./components/MainMovie/intro3.mp4" type="video/mp4" />
  //           <source src="./components/MainMovie/intro3.mp4" type="video/ogg" />
  //         </video>
  //       )
  //     });
  //   });
  // };
  componentWillMount() {
    // this.unlisten = this.props.history.listen((location, action) => {
    //   console.log("on route change");
    //   this.setState({ showLayer: false });
    // });
  }

  static getDerivedStateFromProps(newProp, newState) {
    console.log("ici");
    console.log(newProp);
    return null;
  }

  callAPI = () => {
    this.api
      .get()
      .then(res => {
        console.log(res);
        this.setState({ apiMovies: res.data });
      })
      .catch(err => err);
  };

  callSeeMoreMovieId = id => {
    this.api
      .get("/movies/see-more/" + id)
      .then(res => {
        console.log(res);
        this.setState({ apiSeeMoreByID: res.data });
      })
      .catch(err => err);
  };

  HandleInput = e => {
    e.preventDefault();

    if (e.target.value !== "") {
      this.setState({ showLayer: true });
    } else {
      this.setState({ showLayer: false });
    }

    this.setState({
      searchMovies: e.target.value
    });
  };

  // removeElem = () => {
  //   if (window.location.pathname.includes("/admin")) {
  //     let nav = document.querySelector(".nav");
  //     let footer = document.querySelector(".footer");
  //     let layer = document.querySelector(".layer");
  //     this.setState({
  //       hideNav: nav.parentNode.removeChild(nav),
  //       hideFooter: footer.parentNode.removeChild(footer),
  //       hideLayer: layer.parentNode.removeChild(layer)
  //     });
  //   }
  // };

  componentDidMount = () => {
    // this.loader();
    this.callAPI();
    this.callSeeMoreMovieId();
    // this.removeElem();
  };

  render() {
    let filterMovies = this.state.apiMovies.filter(movies => {
      return (
        movies.titleFr
          .toLocaleLowerCase()
          .includes(this.state.searchMovies.toLocaleLowerCase()) ||
        movies.released
          .toLocaleLowerCase()
          .includes(this.state.searchMovies.toLocaleLowerCase())
      );
    });
    console.log(this.props.history, "app js ---------------------");
    return (
      <React.Fragment>
        {!this.props.history.location.pathname.includes("admin") && (
          <Nav handleInput={this.HandleInput} moveNav={this.state.showLayer} />
        )}
        <div className={`layer ${this.state.showLayer ? "" : "hide"}`}>
          <div className="bloc-movie-filtered">
            <MoviesLists filterMovies={filterMovies} />
          </div>
        </div>

        <div className={`App ${this.state.showLayer ? "hide" : ""}`}>
          <Switch>
            <Route path="/" exact component={Home}>
              <MainMovie />
              <MoviesLists filterMovies={filterMovies} />
            </Route>
            <Route path="/movies" exact component={Films} />
            <Route path="/movies/see-more/:id" exact component={SeeMore} />
            <Route path="/series" exact component={Series} />
            <Route path="/added-recently" exact component={Series} />
            <Route path="/teachings/adults" exact component={Teachings} />
            <Route path="/teachings/adults/:id" exact component={Teachings} />
            {/* <Route
              path="/add-teachings-adults"
              exact
              component={FormTeachingsAdults}
            /> */}
            {/* <Route
              path="/admin/add-teachings-adults"
              exact
              component={FormTeachingsAdults}
            /> */}
            <Route
              path="/admin/add-teachings-adults"
              exact
              render={({ match, history }) => {
                return (
                  <FormTeachingsAdults
                    match={match}
                    history={history}
                    loggedInUser={this.state.loggedInUser}
                  />
                );
              }}
            />
            <Route
              path="/admin/manage-teachings-adults"
              exact
              render={({ match }) => {
                return (
                  <ManageTeachings
                    match={match}
                    loggedInUser={this.state.loggedInUser}
                  />
                );
              }}
            />
            <Route
              path="/admin/manage-teachings-adults"
              exact
              component={ManageTeachings}
            />

            <Route path="/edit/teachings/:id" exact component={EditTeachings} />
            <Route path="/teachings/teenager" exact component={Enseignements} />
            <Route path="/teachings/kids" exact component={Enseignements} />

            <Route
              path="/delete-teachings-adults/:id"
              exact
              component={ManageTeachings}
            />
            <Route path="/admin/login" exact component={AdminLogin} />
            <Route path="/admin/index" exact component={AdminPage} />
          </Switch>
          {!this.props.history.location.pathname.includes("admin") && (
            <Footer />
          )}
        </div>
      </React.Fragment>
    );
  }
}

export default withRouter(App);
