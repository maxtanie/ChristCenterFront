import React, { Component, useState, useEffect } from "react";
import "./FormTeachings.css";
import axios from "axios";

class FormTeachingsAdults extends Component {
  constructor(props) {
    super(props);
    this.state = {
      apiAddTeachings: [],
      // index: [],
      title: "",
      text: "",
      image: ""
    };
    this.api = axios.create({ baseURL: process.env.REACT_APP_BACKEND_API });
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
    this.setState({
      [e.target.name]: e.target.value
    });
  };

  handleSubmit = e => {
    e.preventDefault();
    console.log(this.state.data);
    console.log(this.state.apiAddTeachings);
    this.api
      .post("/teachings/adults", this.state)
      .then(res => {
        console.log(res);
        this.setState({
          apiAddTeachings: res.data,
          apiAddTeachings: this.state.title,
          apiAddTeachings: this.state.text
        });
        this.props.history.push("/teachings/adults");
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
              className="input-style"
              type="text"
              name="title"
              placeholder="Add title"
            />
          </div>
          <div className="form-item">
            <input
              className="input-style"
              type="text"
              name="image"
              placeholder="Add link"
            />
          </div>
          <div className="form-item">
            <textarea
              className="input-style"
              name="text"
              id=""
              cols="30"
              rows="10"
              placeholder="Add text"
            />
          </div>
          <button type="submit" className="btn-add">
            Add
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

export default FormTeachingsAdults;
