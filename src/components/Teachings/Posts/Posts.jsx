import React from "react";
import "./Posts.css";
// import { Navlink } from "react-router-dom";
import VideosTeachingsSlider from "../VideosTeachingsSlider/VideosTeachingsSlider";

const Posts = ({ posts, loading }) => {
  if (loading) {
    // return <h2 className="center">Loading...</h2>;
  }

  return (
    <React.Fragment>
      {posts.map(post => (
        // <section className="section-teachings" key={post._id}>
        //   {/* <h1 className="red center size-title oswald">Teachings Adults</h1> */}
        //   <div className="bloc-slide-quotation center">
        //     <q>Je suis le chemin la vérité et la vie.</q>
        //     <span className="bold red"> Jean 6: 35</span>
        //   </div>
        //   <div className="container-posts flex-between">
        //     <div className="bloc-info-theme">
        //       <div>
        //         <div className="bloc-title-theme-and-img">
        //           <h1 className="red bold">{post.title}</h1>
        //           <div className="bloc-img-theme">
        //             <img src={post.image} alt="" />
        //           </div>
        //         </div>
        //         <div className="bloc-msg-theme mtop">
        //           <h2>Title Part I</h2>
        //           <br />
        //           <h3>Title sub title</h3>
        //           <br />
        //           <p>
        //             {post.text}
        //             <br />
        //             {/* Lorem ipsum dolor, sit amet consectetur adipisicing elit.
        //             Asperiores tempore consequatur explicabo dolore excepturi
        //             accusamus cumque molestias porro eum in. Optio ea cumque
        //             inventore impedit quae doloribus hic, possimus ipsa. */}
        //             <br />
        //           </p>
        //           <br />

        //           <h2>Title Part II</h2>
        //           <br />
        //           <h3>Title sub title</h3>
        //           <br />
        //           <p>
        //             {/* Lorem ipsum dolor, sit amet consectetur adipisicing elit.
        //             Asperiores tempore consequatur explicabo dolore excepturi
        //             accusamus cumque molestias porro eum in. Optio ea cumque
        //             inventore impedit quae doloribus hic, possimus ipsa.
        //             <br />
        //             Lorem ipsum dolor, sit amet consectetur adipisicing elit.
        //             Asperiores tempore consequatur explicabo dolore excepturi
        //             accusamus cumque molestias porro eum in. Optio ea cumque
        //             inventore impedit quae doloribus hic, possimus ipsa. */}
        //             <br />
        //           </p>
        //           <br />
        //           <h2>Conclusion</h2>
        //           <br />
        //           <p>
        //             {/* Lorem ipsum dolor, sit amet consectetur adipisicing elit.
        //             Asperiores tempore consequatur explicabo dolore excepturi
        //             accusamus cumque molestias porro eum in. Optio ea cumque
        //             inventore impedit quae doloribus hic, possimus ipsa.
        //             <br />
        //             Lorem ipsum dolor, sit amet consectetur adipisicing elit.
        //             Asperiores tempore consequatur explicabo dolore excepturi
        //             accusamus cumque molestias porro eum in. Optio ea cumque
        //             inventore impedit quae doloribus hic, possimus ipsa.
        //             <br /> */}
        //           </p>
        //         </div>
        //       </div>
        //     </div>
        //     <div className="bloc-video-edification">
        //       <h2 className="red">
        //         Vidéos édifiantes sur la connaissance de Jésus
        //       </h2>
        //     </div>
        //   </div>
        // </section>
        <section className="section-teachings justify">
          <h1 className="red center size-title">{post.titleTeachings}</h1>
          {/* <div className="bloc-slide-quotation center">
           
            <span className="bold red"> Jean 6: 35</span>
          </div> */}

          {/* <q>Je suis le chemin la vérité et la vie.</q>
            <span className="bold red"> Jean 6: 35</span> */}
          {post.sliderCitation &&
            post.sliderCitation.map(elem => {
              return (
                elem.citations &&
                elem.citations.map((ele, i) => {
                  return (
                    <div className="bloc-slide-quotation center absolute">
                      <span>
                        <div>
                          <q>{ele}</q>
                          <span className="red bold"> {elem.verses[i]}</span>
                        </div>
                      </span>
                    </div>
                  );
                })
              );
            })}

          <div className="container mTop">
            <div className="bloc-info-theme">
              <div className="flex-between">
                <div className="bloc-title-theme-and-img">
                  <h1 className="red bold">{post.titleArticle}</h1>
                  <div className="bloc-img-theme">
                    <img src={post.imageArticle} alt="" />
                  </div>
                </div>
                <div className="bloc-msg-theme mtop">
                  <React.Fragment>
                    <h2>I {post.articlePartOneTitle}</h2>
                    <br />
                    <h3>1. {post.articlePartOneSubTitle}</h3>
                    <br />
                    <p>{post.articlePartOnetextArticle}</p>
                    <span>
                      <a
                        className="red"
                        href={post.articlePartOneLinkWebPage}
                        target="_blank"
                      >
                        Learn More...
                      </a>
                    </span>
                  </React.Fragment>

                  <div className="mtop">
                    <p>
                      <h2>II {post.articlePartTwoTitle}</h2>
                      <br />
                      <h3>1. {post.articlePartTwoSubTitle}</h3>
                      <br />
                      <p>{post.articlePartTwotextArticle}</p>
                      <span>
                        <a
                          className="red"
                          href={post.articlePartTwoLinkWebPage}
                          target="_blank"
                        >
                          Learn More...
                        </a>
                      </span>
                    </p>
                  </div>

                  <br />
                  <h2>Conclusion</h2>
                  <br />
                  <p>{post.conclusion}</p>
                  <br />
                  <p>
                    {/* Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                    Asperiores tempore consequatur explicabo dolore excepturi
                    accusamus cumque molestias porro eum in. Optio ea cumque
                    inventore impedit quae doloribus hic, possimus ipsa.
                    <br />
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                    Asperiores tempore consequatur explicabo dolore excepturi
                    accusamus cumque molestias porro eum in. Optio ea cumque
                    inventore impedit quae doloribus hic, possimus ipsa. */}
                    <br />
                  </p>
                </div>
              </div>
            </div>
            <div className="bloc-video-edification">
              <h2 className="red">
                Vidéos édifiantes sur la connaissance de Jésus
              </h2>
              <div className="bloc-video-edification">
                <div className="flex">
                  <iframe
                    src="https://www.youtube.com/embed/sW2IaDC1rWc"
                    frameborder="0"
                    allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                    allowfullscreen
                    className="videoEdifiante"
                  />
                  <iframe
                    src="https://www.youtube.com/embed/kjrcpC8Fu8s"
                    frameborder="0"
                    allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                    allowfullscreen
                  />
                </div>
              </div>
            </div>
            {/* <VideosTeachingsSlider video={post.text} /> */}
          </div>
        </section>
      ))}
    </React.Fragment>
  );
};

export default Posts;
