import React, { Component } from "react";
// import MainMovie from "../MainMovie/MainMovie";
// import { NavLink } from "react-router-dom";
import "./SeeMore.css";
import axios from "axios";
// COMPONENT
import Resume from "./Resume/Resume";
import Infos from "./Infos/Infos";
// import TitreSimilaire from "./TitreSimilaire/TitreSimilaire";
import Casting from "./Casting/Casting";
// import { Slide } from "react-slideshow-image";
// import slide from "react-slideshow-image/lib/components/slideshow/slide";
import Slider from "react-animated-slider";
import "react-animated-slider/build/horizontal.css";

class SeeMore extends Component {
  constructor(props) {
    super(props);
    // this.sysnopsis = React.createRef();
    // this.infos = React.createRef();
    // this.casting = React.createRef();
    this.state = {
      movie: [],
      imagesSlide: [],
      detailsWidget: {
        resume: true,
        infos: false,
        casting: false
      }
    };
    this.api = axios.create({
      baseURL: process.env.REACT_APP_BACKEND_API
    });
    // this.ShowContentResume = this.ShowContentResume.bind(this);
    // this.ShowContentInfos = this.ShowContentInfos.bind(this);
    // // this.ShowContentTitreSim = this.ShowContentTitreSim.bind(this);
    // this.ShowContentCasting = this.ShowContentCasting.bind(this);
  }

  // ShowContentResume = () => {
  //   this.setState({

  //     resume: !this.state.resume
  //   });
  // };

  // ShowContentInfos = () => {
  //   this.setState({

  //     infos: !this.state.infos
  //   });
  // };

  // // ShowContentTitreSim = () => {
  // //   this.setState({
  // //     titresSim: "#titreSimilaire",
  // //     titresSim: !this.state.titresSim
  // //   });
  // // };

  // ShowContentCasting = () => {
  //   this.setState({

  //     casting: !this.state.casting
  //   });
  // };
  callSeeMoreMovieId = id => {
    console.log(
      this.props,
      "props of history",
      this.props.match.params.id,
      "match-params id"
    );
    this.api
      .get("/movies/see-more/" + this.props.match.params.id)
      .then(res => {
        console.log("db res -------------", res);
        this.setState({ movie: res.data });
      })
      .catch(err => err);
  };
  componentDidMount() {
    this.callSeeMoreMovieId(this.props.match.params.id);
  }
  ShowContent = () => {
    this.setState({
      resume: !this.state.resume
    });
  };

  handleClick = name => {
    const detailsWidget = { ...this.state.detailsWidget };
    for (let key in detailsWidget) {
      detailsWidget[key] = false;
    }
    detailsWidget[name] = true;
    this.setState({ detailsWidget });
  };
  render() {
    // const seeMoreImg = {
    //   backgroundImage: url(`${this.state.movie.imagesSlide}`),
    //   height: "500px"
    // };
    // console.log(
    //   this.props.match.params,
    //   "--------------------------------PARAMS"
    // );
    const { detailsWidget } = this.state;
    console.log(this.state.detailsWidget);

    return (
      <React.Fragment>
        {/* <div className="container-slide"> */}
        {/* <Slide>
            <div className="each-slide">
              <div>
                {this.state.movie.actors &&
                  this.state.movie.actors.map(elem => {
                    return <p>{elem}</p>;
                  })}
              </div>
            </div>
          </Slide> */}
        {/* {this.state.movie.imageSlide &&
            this.state.movie.imageSlide.map(img => {
              return (
                <React.Fragment>
                  <div className="slide">
                    <img src={img} alt="" className="show-image" />
                  </div>
                </React.Fragment>
              );
            })}
        </div> */}
        {/* <Slider>
          {this.state.movie.imageSlide &&
            this.state.movie.imageSlide.map((img, index) => (
              <section key={index}>
                <img src={img} className="show-image" />
              </section>
            ))}
        </Slider> */}

        <div className="poster-movie">
          <img src={this.state.movie.imageSlide} />
        </div>

        <section className="see-more infos infos-absolute">
          <div className="container-movies">
            <div className="bloc-content-infos">
              <div className="bloc-info-title">
                <span className="title-info red bold size-small size-big">
                  {this.state.movie.titleFr}
                </span>
                <span className="year-info red size-small">
                  ({this.state.movie.released})
                </span>
                <div className="original-title red size-small">
                  Hacksaw Ridge
                </div>
              </div>
              <div className="trailer-movie-see-more">
                <iframe
                  title="iframe"
                  src={this.state.movie.trailer}
                  frameborder="0"
                  allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                  allowfullscreen
                />
              </div>

              <nav className="nav-infos">
                <ul className="center">
                  <li
                    ref={this.ShowContentSynopsis}
                    onClick={e => this.handleClick("resume")}
                    className="list-infos black"
                  >
                    Synopsis
                  </li>
                  <li
                    ref={this.ShowContentInfos}
                    onClick={e => this.handleClick("infos")}
                    className="list-infos black"
                  >
                    Infos
                  </li>
                  <li
                    ref={this.ShowContentCasting}
                    onClick={e => this.handleClick("casting")}
                    className="list-infos black"
                  >
                    Casting
                  </li>
                </ul>
              </nav>
              <div class="show-info">
                <Resume
                  isDisplayed={detailsWidget.resume}
                  resume={this.state.movie.synopsisEn}
                />
                {detailsWidget.infos && (
                  <Infos
                    infos={this.state.movie}
                    average={this.state.movie.average}
                    age={this.state.movie.age}
                    productor={this.state.movie.productor}
                  />
                )}
                {detailsWidget.casting && (
                  <Casting
                    casting={this.state.movie.casting}
                    actor={this.state.movie.actors}
                  />
                )}
              </div>
            </div>
          </div>
        </section>
      </React.Fragment>
    );
  }
}

export default SeeMore;
