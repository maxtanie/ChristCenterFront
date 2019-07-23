import React from "react";
import "./Enseignements.css";
import imgFemme from "../../images/femme.jpg";

const Enseignements = () => {
  return (
    <section className="section-teachings">
      <h1 className="red center size-title">Teachings Adults</h1>
      <div className="bloc-slide-quotation center">
        <q>Je suis le chemin la vérité et la vie.</q>
        <span className="bold red"> Jean 6: 35</span>
      </div>
      <div className="container">
        <div className="bloc-info-theme">
          <div className="flex-between">
            <div className="bloc-title-theme-and-img">
              <h1 className="red bold">Qui est réellement Jésus ?</h1>
              <div className="bloc-img-theme">
                <img src={imgFemme} alt="" />
              </div>
            </div>
            <div className="bloc-msg-theme mtop">
              <h2>Title Part I</h2>
              <br />
              <h3>Title sub title</h3>
              <br />
              <p>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                Asperiores tempore consequatur explicabo dolore excepturi
                accusamus cumque molestias porro eum in. Optio ea cumque
                inventore impedit quae doloribus hic, possimus ipsa.
                <br />
                Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                Asperiores tempore consequatur explicabo dolore excepturi
                accusamus cumque molestias porro eum in. Optio ea cumque
                inventore impedit quae doloribus hic, possimus ipsa.
                <br />
              </p>
              <br />

              <h2>Title Part II</h2>
              <br />
              <h3>Title sub title</h3>
              <br />
              <p>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                Asperiores tempore consequatur explicabo dolore excepturi
                accusamus cumque molestias porro eum in. Optio ea cumque
                inventore impedit quae doloribus hic, possimus ipsa.
                <br />
                Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                Asperiores tempore consequatur explicabo dolore excepturi
                accusamus cumque molestias porro eum in. Optio ea cumque
                inventore impedit quae doloribus hic, possimus ipsa.
                <br />
              </p>
              <br />
              <h2>Conclusion</h2>
              <br />
              <p>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                Asperiores tempore consequatur explicabo dolore excepturi
                accusamus cumque molestias porro eum in. Optio ea cumque
                inventore impedit quae doloribus hic, possimus ipsa.
                <br />
                Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                Asperiores tempore consequatur explicabo dolore excepturi
                accusamus cumque molestias porro eum in. Optio ea cumque
                inventore impedit quae doloribus hic, possimus ipsa.
                <br />
              </p>
            </div>
          </div>
        </div>
        <div className="bloc-video-edification">
          <h2 className="red">
            Vidéos édifiantes sur la connaissance de Jésus
          </h2>
        </div>
      </div>
    </section>
  );
};

export default Enseignements;
