import React, { Component, useState, useEffect } from "react";
// import "./FormTeachings.css";
import axios from "axios";
import { fdatasync } from "fs";

class EditTeachings extends Component {
  constructor(props) {
    super(props);
    this.state = {
      // title: "",
      // text: "",
      // image: ""
      titleTeachings: "",
      sliderCitation: [],
      titleArticle: "",
      imageArticle: "",
      articlePartOne: [
        {
          title: ""
        }
      ],
      articlePartTwo: [],
      conclusion: "",
      article: ""
    };
    this.api = axios.create({ baseURL: process.env.REACT_APP_BACKEND_API });
  }

  handleChange = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };
  componentDidMount() {
    console.log(this.props.match.params.id);
    console.log("PROPSSSSSS", this.state);
    this.api
      .get("/add-teachings-adults/" + this.props.match.params.id)
      .then(res =>
        this.setState({
          titleTeachings: res.data.titleTeachings,
          titleArticle: res.data.titleArticle,
          imageArticle: res.data.imageArticle,
          conclusion: res.data.conclusion,
          articlePartOne: res.data.articlePartOne
        })
      )
      .catch(err => console.log(err));
  }
  handleSubmit = e => {
    // const fd = new FormData();
    // fd.append("image", image.files[0]);
    // fd.append("title", this.state.title)

    e.preventDefault();
    console.log(this.state.data);
    console.log(this.state);
    this.api
      .patch("/teachings/" + this.props.match.params.id, this.state)
      .then(res => {
        console.log(res);
        // res.send("/manage-teachings-adults");
        this.props.history.push("/admin/manage-teachings-adults");
      })
      .catch(err => err);

    // axios
    //   .post("http://localhost:8000/add-teachings-adults/", this.props.match)
    //   .then(res => {
    //     console.log(res);
    //     this.setState({
    //       apiAddTeachings: res.data,
    //       apiAddTeachings: this.state.title,
    //       apiAddTeachings: this.state.text
    //     });
    //   })
    //   .catch(err => err);
  };
  render() {
    const { title, text, image } = this.state;
    return (
      <div className="container-teachings-form">
        <form
          onChange={this.handleChange}
          onSubmit={this.handleSubmit}
          method="post"
          className="form-container"
        >
          <h3 className="center">Teachings Adults Form</h3>
          <div className="form-item mtop">
            <input
              value={this.state.titleTeachings}
              className="input-style"
              type="text"
              name="titleTeachings"
              placeholder="Add title"
            />
          </div>
          <div className="form-item">
            <input
              value={this.state.imageArticle}
              className="input-style"
              type="text"
              name="imageArticle"
              placeholder="Add link"
            />
          </div>
          <div className="form-item">
            <textarea
              value={this.state.titleArticle}
              className="input-style"
              name="titleArticle"
              id=""
              cols="30"
              rows="10"
              placeholder="Add Title Article"
            />
          </div>

          <div className="form-item">
            <textarea
              value={this.state.conclusion}
              className="input-style"
              name="conclusion"
              id=""
              cols="30"
              rows="10"
              placeholder="Add Conclusion"
            />
          </div>

          <div className="form-item">
            <input
              value={this.state.articlePartOne}
              className="input-style"
              name="articlePartOne"
              id=""
              placeholder="Add Article Part One Title"
            />
          </div>
          <button type="submit" className="btn-add">
            Edit
          </button>
        </form>
      </div>
    );
  }
}
// const FormTeachingsAdults = () => {
//   const [setPosts] = useState([]);
//   const [setLoading] = useState(false);
//   // const [currentPage, setCurrentPage] = useState(1);
//   // const [postsPerPage] = useState(1);

//   useEffect(() => {
//     const fetchPosts = async () => {
//       setLoading(true);
//       const res = await axios.post(
//         "http://localhost:8000/add-teachings-adults"
//       );
//       setPosts(res.data);
//       setLoading(false);
//     };

//     fetchPosts();
//   }, []);

// };

export default EditTeachings;
