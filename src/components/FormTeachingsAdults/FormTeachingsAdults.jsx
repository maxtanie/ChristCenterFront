import React, { Component, useState, useEffect } from "react";
import "./FormTeachings.css";
import axios from "axios";
import NavAdmin from "../Admin/NavAdmin/NavAdmin";

class FormTeachingsAdults extends Component {
  constructor(props) {
    super(props);
    this.state = {
      apiAddTeachings: [],
      // index: [],
      titleTeachings: "",
      sliderCitation: [],
      titleArticle: "",
      imageArticle: "",
      articlePartOne: [
        {
          title: "",
          subTitle: ""
        }
      ],
      articlePartTwo: [],
      conclusion: "",
      article: ""
    };
    this.api = axios.create({ baseURL: process.env.REACT_APP_BACKEND_API });
  }

  componentDidMount() {
    document.getElementById("body").className = "paddingNone";
    console.log(document.getElementById("body"));
  }
  componentWillUnmount() {
    document.getElementById("body").className = "";
  }

  // getAPI = () => {
  //   this.api
  //     .get("/add-teachings-adults")
  //     .then(res => {
  //       console.log("BIG DATA", res);
  //       this.setState({
  //         apiAddTeachings: res.data,
  //         apiAddTeachings: this.state.title,
  //         apiAddTeachings: this.state.text
  //       });
  //     })
  //     .catch(err => err);
  // };

  // postAPI = () => {
  //   this.api
  //     .post("/add-teachings-adults/")
  //     .then(res => {
  //       console.log(res);
  //       this.setState({
  //         apiAddTeachings: res.data
  //         // apiAddTeachings: this.state.title,
  //         // apiAddTeachings: this.state.text
  //       });
  //     })
  //     .catch(err => err);
  // };

  // postAPITeachings = () => {
  //   this.api
  //     .post("/teachings/adults")
  //     .then(res => {
  //       console.log(res);
  //       this.setState({ apiAddTeachings: res.data });
  //     })
  //     .catch(err => err);
  // };

  // componentDidMount = () => {
  //   this.getAPI();
  //   this.postAPI();
  //   // this.postAPITeachings();
  // };

  handleChange = e => {
    if (e.target.name === "articlePartOne") {
      const articlePartOne = [...this.state.articlePartOne];
      const position = e.target.getAttribute("data-attr");
      const obj = { ...articlePartOne[position] };
      obj.title = e.target.value;
      articlePartOne[position] = obj;
      this.setState({ articlePartOne });
    } else
      this.setState({
        [e.target.name]: e.target.value
      });
  };

  handleSubmit = e => {
    e.preventDefault();
    // console.log(this.state.data);
    console.log(this.state.apiAddTeachings);
    this.api
      .post("/teachings/adults", this.state)
      .then(res => {
        console.log(res);
        console.log("***", this.props);
        this.setState({
          apiAddTeachings: res.data,
          apiAddTeachings: this.state.titleTeachings,
          apiAddTeachings: this.state.sliderCitation,
          apiAddTeachings: this.state.titleArticle,
          apiAddTeachings: this.state.imageArticle,
          apiAddTeachings: this.state.articlePartOne.push(this.state.article),

          apiAddTeachings: this.state.articlePartTwo,
          apiAddTeachings: this.state.conclusion
        });
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
    console.log("ARTICLEE3", this.state);
    const { title, text, image } = this.state;
    return (
      <div className="container-teachings-form">
        <form
          onChange={this.handleChange}
          onSubmit={this.handleSubmit}
          method="post"
          className="mtop"
        >
          <h3 className="center">Teachings Adults Form</h3>
          <div className="form-item mtop">
            <input
              className="input-style"
              type="text"
              name="titleTeachings"
              placeholder="Add title Teachings"
            />
          </div>
          <div className="form-item">
            <input
              className="input-style"
              type="text"
              name="imageArticle"
              placeholder="Add link"
            />
          </div>
          <div className="form-item">
            <input
              className="input-style"
              name="titleArticle"
              id=""
              placeholder="Add title Article"
            />
          </div>
          <div className="form-item">
            <textarea
              className="input-style"
              name="conclusion"
              id=""
              cols="30"
              rows="10"
              placeholder="Add conclusion Article"
            />
          </div>
          <div className="form-item">
            <input
              className="input-style"
              name="articlePartOne"
              data-attr="0"
              placeholder="Add  Article Part One"
            />
            <input
              className="input-style"
              name="articlePartOne"
              data-attr="1"
              placeholder="Add  Article Part One"
            />
          </div>

          <button type="submit" className="btn-add">
            Add
          </button>
        </form>
        <NavAdmin loggedInUser={this.props.loggedInUser} />
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

export default FormTeachingsAdults;
