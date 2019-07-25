import React, { Component } from "react";
import "./VideosTeachingsSlider.css";

const VideoTeachingsSlider = ({ video }) => {
  console.log(video);
  return (
    <div className="wrapper">
      <section className="section-slider-video" id="section1">
        <a href="#section1" className="anchor-video">
          <i class="fa fa-angle-left" />
        </a>
        <div className="item">
          <iframe
            src="https://www.youtube.com/embed/bPTX8DuJxUE"
            frameborder="0"
            allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
            allowfullscreen
          />
          <p>{video}</p>
        </div>
        <div className="item">
          <iframe
            src="https://www.youtube.com/embed/bPTX8DuJxUE"
            frameborder="0"
            allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
            allowfullscreen
          />
        </div>
        <div className="item">
          <iframe
            src="https://www.youtube.com/embed/bPTX8DuJxUE"
            frameborder="0"
            allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
            allowfullscreen
          />
        </div>
      </section>
      <a href="#section2" className="anchor-video">
        <i class="fa fa-angle-right" />
      </a>
      <section className="section-slider-video bg2" id="section2">
        <a href="#section1" className="anchor-video">
          <i class="fa fa-angle-left" />
        </a>
        <div className="item">
          <iframe
            src="https://www.youtube.com/embed/bPTX8DuJxUE"
            frameborder="0"
            allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
            allowfullscreen
          />
          <p>{video}</p>
        </div>
        <div className="item">
          <iframe
            src="https://www.youtube.com/embed/bPTX8DuJxUE"
            frameborder="0"
            allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
            allowfullscreen
          />
        </div>
        <div className="item">
          <iframe
            src="https://www.youtube.com/embed/bPTX8DuJxUE"
            frameborder="0"
            allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
            allowfullscreen
          />
        </div>
      </section>
    </div>
  );
};
export default VideoTeachingsSlider;
