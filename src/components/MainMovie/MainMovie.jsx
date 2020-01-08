"use strict";

import React, { Component } from "react";
import Jesus from "./movies/lavoixdupardon.mp4";

class MainMovie extends Component {
  constructor(props) {
    super(props);

    this.state = {
      videoURL: Jesus,
      isVideoMuted: false,
      isVideoPlayed: true
    };
  }

  // pauseVideo = () => {
  //   this.setState({ isVideoPlayed: !this.state.isVideoPlayed });
  // };

  // playVideo = () => {
  //   this.state.playBtn = onclick = () => {
  //     this.setState({
  //       play: document.querySelector("#background-video").play()
  //     });
  //   };
  // };

  // removeSound = () => {
  //   this.setState({ isVideoMuted: !this.state.isVideoMuted });
  // };

  componentDidMount() {
    document.getElementById("body").className = "darktheme";
    console.log(document.getElementById("body"));
  }
  componentWillUnmount() {
    document.getElementById("body").className = "";
  }

  render() {
    return (
      <div id="wrapper-video " className="flex-movies">
        <div className="info">
          <div className="content-center">
            <div className="title-movie">
              <h2 className="small-title-movie">I can only imagine</h2>
            </div>
            <div className="bloc-quote-main-movie">
              <q className="center">
                Le <b className="red">pardon, </b> une puissance qui libère
              </q>
            </div>
            <div className="see-more" />
            {/* <span onClick={this.pauseVideo} className="pause btn-action-movie">
              {this.state.isVideoPlayed ? (
                <i class="fa fa-play icon-manipe mIcon" />
              ) : (
                <i class="fa fa-pause icon-manipe mIcon" />
              )}
            </span>
            <span onClick={this.removeSound} className="mute btn-action-movie">
              {this.state.isVideoMuted ? (
                <i class="fa fa-volume-mute icon-manipe" />
              ) : (
                <i class="fa fa-volume-up icon-manipe" />
              )}
            </span>
            {/* <span onClick={this.addSound} className="sound btn-action-movie">
              Sound
            </span> */}
          </div>
        </div>
        <video id="background-video" loop autoPlay muted>
          <source src={this.state.videoURL} type="video/mp4" />
          <source src={this.state.videoURL} type="video/ogg" />
          Your browser does not support the video tag.
        </video>
      </div>
    );
  }
}

export default MainMovie;
