import React, { Component } from "react";
import { Route, Switch, Redirect } from "react-router-dom";
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
import ScrollToTop from "./ScrollToTop";

class App extends Component {
  constructor({ props }) {
    super(props);
    this.state = {
      apiMovies: [],
      apiSeeMoreByID: {},
      searchMovies: "",
      // showLayer: "",
      muteVideo: "",
      poster: "",
      showLayer: false
    };
    this.api = axios.create({ baseURL: process.env.REACT_APP_BACKEND_API });
  }

  componentWillMount() {
    this.unlisten = this.props.history.listen((location, action) => {
      console.log("on route change");
      this.setState({ showLayer: false });
    });
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

  componentDidMount = () => {
    this.callAPI();
    this.callSeeMoreMovieId();
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

    return (
      <React.Fragment>
        <Nav handleInput={this.HandleInput} moveNav={this.state.showLayer} />
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
            <Route
              path="/add-teachings-adults"
              exact
              component={FormTeachingsAdults}
            />
            <Route path="/edit/teachings/:id" exact component={EditTeachings} />
            <Route path="/teachings/teenager" exact component={Enseignements} />
            <Route path="/teachings/kids" exact component={Enseignements} />
            <Route
              path="/manage-teachings-adults"
              exact
              component={ManageTeachings}
            />
            <Route
              path="/delete-teachings-adults/:id"
              exact
              component={ManageTeachings}
            />
          </Switch>
          <Footer />
        </div>
      </React.Fragment>
    );
  }
}

export default App;
