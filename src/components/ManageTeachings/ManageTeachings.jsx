import React, { Component } from "react";
import "./ManageTeachings.css";
import axios from "axios";
import { Link } from "react-router-dom";
import NavAdmin from "../Admin/NavAdmin/NavAdmin";

class ManageTeachings extends Component {
  constructor(props) {
    super(props);
    this.state = {
      // title: "",
      // text: "",
      // image: "",
      apiManageTeachingsAdults: [],
      apiAddTeachingsAdultsById: {},
      deteletTeaching: {},
      showApi: ""
    };
    this.api = axios.create({ baseURL: process.env.REACT_APP_BACKEND_API });
  }

  componentWillUnmount() {
    document.getElementById("body").className = "";
  }

  getAPITeachings = () => {
    this.api
      .get("/teachings/adults", this.state)
      .then(res => {
        console.log("DATA", res);
        this.setState({
          apiManageTeachingsAdults: res.data
          // apiManageTeachingsAdults: this.state.title,
          // apiManageTeachingsAdults: this.state.text
        });
      })
      .catch(err => err);
  };

  getAPManageTeachingsAdults = () => {
    this.api
      .get("/admin/manage-teachings-adults")
      .then(res => {
        console.log("MANAGE TEACHINGS ADULTS", res);
        this.setState({
          apiManageTeachingsAdults: res.data
        });
      })
      .catch(err => err);
  };

  handleDelete = teachId => {
    this.api
      .delete("/teachings/" + teachId)
      .then(res => {
        const filteredTeachings = this.state.apiManageTeachingsAdults.filter(
          teaching => teaching._id !== teachId
        );
        this.setState({ apiManageTeachingsAdults: filteredTeachings });
      })
      .catch(err => console.log(err));
  };

  // DeleteTeachings = () => {
  //   this.api
  //     .get("/delete-teachings-adults")
  //     .then(res => {
  //       console.log("DELETE TEACHINGS ADULTS", res);
  //       this.setState({
  //         deteletTeaching: res.data
  //       });
  //     })
  //     .catch(err => err);
  // };

  callAddteachingsAdults = id => {
    this.api
      .post("/admin/add-teachings-adults/" + id)
      .then(res => {
        console.log("ADD TEACHINGS ADULTS POST ID", res);
        this.setState({ apiAddTeachingsAdultsById: res.data });
      })
      .catch(err => {
        console.log("SORYYYYYY", err);
      });
  };

  // handleEdit = e => {
  //   e.preventDefault();
  //   this.setState({
  //     showApi: this.state.apiManageTeachingsAdults.title
  //   });
  // };

  componentDidMount = () => {
    this.getAPITeachings();
    this.getAPManageTeachingsAdults();
    this.callAddteachingsAdults(this.props.match.params.id);
    // this.DeleteTeachings(this.props.match.params.id);
    document.getElementById("body").className = "paddingNone";
    console.log(document.getElementById("body"));
  };

  render() {
    console.log("APIIIIIII", this.state.apiAddTeachingsAdultsById);
    console.log("PROPS", this.props);
    const x = this.state.apiManageTeachingsAdults.map(elem => {
      return elem.titleArticle;
    });

    // console.log("APPPPPPPPPP", x);
    // console.log(this.props.match.params);
    // const byId = this.state.apiManageTeachingsAdults.map(getId => {
    //   return <div>{getId._id}</div>;
    // });

    // const title = this.state.map(elem => {
    //   elem.title;
    // });

    // const elem = this.state.apiManageTeachingsAdults;
    // console.log(elem.title);
    console.log(this.state.apiManageTeachingsAdults, "dajdddddddddddddddddd");
    return (
      <div className="flex">
        <div className="container big-container-teachings">
          <h3 className="manage-teachings-title">Manage Teachings</h3>
          <table class="product-manage-table">
            <thead>
              <tr class="table-row">
                <th colspan="1" class="table-head">
                  Image
                </th>
                <th colspan="1" class="table-head">
                  TitleTeachings
                </th>
                <th colspan="1" class="table-head">
                  TitleArticle
                </th>
                <th colspan="1" class="table-head">
                  Conclusion
                </th>
                <th colspan="1" class="table-head">
                  TitlePartOne
                </th>
                <th colspan="1" class="table-head">
                  Edit
                </th>
                <th colspan="1" class="table-head">
                  Delete
                </th>
              </tr>
            </thead>
            {this.state.apiManageTeachingsAdults.map(elem => {
              return (
                <React.Fragment>
                  <tbody>
                    <tr className="table-row">
                      <td className="table-division">
                        <div>
                          <img
                            className="table-image"
                            src={elem.imageArticle}
                            alt=""
                          />
                        </div>
                      </td>

                      <td className="table-division">
                        <b>{elem.titleTeachings}</b>
                      </td>

                      <td className="table-division justify ">
                        <div className="text-height">{elem.titleArticle}</div>
                      </td>

                      <td className="table-division justify ">
                        <div className="text-height conclusion">
                          {elem.conclusion}
                        </div>
                      </td>

                      <td className="table-division justify ">
                        <div className="text-height conclusion">
                          <p>{elem.articlePartOneTitle}</p>
                        </div>
                      </td>

                      <td className="table-division">
                        <Link to={"/edit/teachings/" + elem._id}>
                          <i
                            // onClick={this.handleEdit}
                            className="fa fa-edit table-icon"
                          />
                        </Link>
                      </td>
                      <td className="table-division">
                        {/* <a
                          href={`/delete-teachings-adults/` + elem._id}
                          class="fa fa-trash table-icon"
                          aria-hidden="true"
                        /> */}

                        <i
                          onClick={() => this.handleDelete(elem._id)}
                          className="fa fa-trash table-icon"
                        />
                      </td>
                    </tr>
                  </tbody>
                </React.Fragment>
              );
            })}
          </table>
        </div>
        <NavAdmin loggedInUser={this.props.loggedInUser} />
      </div>
    );
  }
}
export default ManageTeachings;
