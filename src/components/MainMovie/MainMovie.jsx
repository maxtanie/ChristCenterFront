"use strict";

import React, { Component } from "react";
import Jesus from "./bible.mp4";

class MainMovie extends Component {
  constructor(props) {
    super(props);

    this.state = {
      videoURL: Jesus,
      backVideo: document.querySelector("video #background-video"),
      playBtn: document.querySelector(".play"),
      pauseBtn: document.querySelector(".pause"),
      muteBtn: document.querySelector(".mute"),
      soundBtn: document.querySelector(".sound"),
      backMute: "",
      mvMute: "",
      play: "",
      pause: "",
      isVideoMuted: false
    };
  }

  MuteVideo = () => {
    this.setState({
      backMute: (document.querySelector("#background-video").muted = true)
    });
  };

  pauseVideo = () => {
    this.state.pauseBtn = onclick = () => {
      this.setState({
        pause: document.querySelector("#background-video").pause()
      });
    };
  };

  // playVideo = () => {
  //   this.state.playBtn = onclick = () => {
  //     this.setState({
  //       play: document.querySelector("#background-video").play()
  //     });
  //   };
  // };

  removeSound = () => {
    this.setState({ isVideoMuted: !this.state.isVideoMuted });
  };

  addSound = () => {
    this.state.soundBtn = onclick = () => {
      if ((document.querySelector("#background-video").muted = true)) {
        this.setState({
          mvMute: (document.querySelector("#background-video").muted = false)
        });
      } else {
        this.setState({
          mvMute: (document.querySelector("#background-video").muted = true)
        });
      }
    };
  };

  componentDidMount = () => {
    //this.MuteVideo();
  };

  render() {
    return (
      <div id="wrapper-video " className="flex-movies">
        {/* <div className="bloc-content-video">
          <span onClick={this.playVideo} className="play btn-action-movie">
            Play
          </span>
          <span onClick={this.pauseVideo} className="pause btn-action-movie">
            Pause
          </span>
          <span onClick={this.removeSound} className="mute btn-action-movie">
            {this.state.isVideoMuted ? "Unmute" : "Muted"}
          </span>
          <span onClick={this.addSound} className="sound btn-action-movie">
            Sound
          </span>
        </div> */}
        <div className="info" />
        <video
          id="background-video"
          loop
          autoPlay
          muted={this.state.isVideoMuted}
        >
          <source src={this.state.videoURL} type="video/mp4" />
          <source src={this.state.videoURL} type="video/ogg" />
          Your browser does not support the video tag.
        </video>
      </div>
    );
  }
}

export default MainMovie;
