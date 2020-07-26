import React, { Component } from "react";
import { createCulture } from "../../../store/actions/tourismAction";
import { connect } from "react-redux";
import { Redirect } from "react-router-dom";
import { storage } from "../../../config/fbConfig";

class CreateCulture extends Component {
  state = {
    name: "",
    longitude: "",
    latitude: "",
    subDistric: "",
    village: "",
    image: null,
    description: "",
    ticket: null,
  };

  handleChange = (e) => {
    this.setState({
      [e.target.id]: e.target.value,
    });
  };

  handleChangeImage = (e) => {
    if (e.target.files[0]) {
      this.setState({
        image: e.target.files[0],
      });
    }
  };

  handleSubmit = (e) => {
    e.preventDefault();
    console.log(this.state);
    // const uid=v4;;
    // console.log(uid);
    const uploadImage = storage
      .ref(`Tourisms/images/${this.state.image.name}`)
      .put(this.state.image);
    uploadImage.on(
      "state_changed",
      (snapshot) => {},
      (err) => {
        console.log(err);
      },
      () => {
        storage
          .ref(`Tourisms/images`)
          .child(this.state.image.name)
          .getDownloadURL()
          .then((url) => {
            const data = {
              name: this.state.name,
              longitude: this.state.longitude,
              latitude: this.state.latitude,
              subDistric: this.state.subDistric,
              village: this.state.village,
              ticket: this.state.ticket,
              description: this.state.description,
              image: url,
            };

            this.props.createCulture(data);
            this.props.history.push("/");
          });
      }
    );
  };

  render() {
    const { auth } = this.props;
    if (!auth.uid) return <Redirect to="/" />;

    return (
      <div className="content">
        <div className="page-inner">
          <div className="page-header">
            <h4 className="page-title">Forms</h4>
            <ul className="breadcrumbs">
              <li className="nav-home">
                <a href="url">
                  <i className="flaticon-home" />
                </a>
              </li>
              <li className="separator">
                <i className="flaticon-right-arrow" />
              </li>
              <li className="nav-item">
                <a href="url">Form masukan data wisata</a>
              </li>
            </ul>
          </div>
          <div className="row">
            <div className="col-md-12">
              <div className="card">
                <div className="card-header bg-primary">
                  <div className="card-title text-white ">
                    Form masukan data wisata budaya
                  </div>
                </div>
                <div className="card-body">
                  <div className="row">
                    <div className="col-md-10 mx-auto">
                      <form onSubmit={this.handleSubmit} className="form">
                        <div className="form-group form-inline">
                          <label className="col-md-3 col-form-label">
                            Nama Wisata Alam
                          </label>
                          <div className="col-md-9 p-0">
                            <input
                              type="text"
                              className="form-control input-full"
                              placeholder="Enter Input"
                              id="name"
                              onChange={this.handleChange}
                            />
                          </div>
                        </div>
                        <div className="form-group form-inline">
                          <label className="col-md-3 col-form-label">
                            Location
                          </label>
                          <div className="col-md-9 p-0">
                            <div className="row">
                              <div className="input-group col-md-6 col-sm-6">
                                <div className="input-group-prepend">
                                  <span className="input-group-text">
                                    <i className="fas fa-map-marker-alt" />{" "}
                                    longitude
                                  </span>
                                </div>
                                <input
                                  type="number"
                                  step="any"
                                  className="form-control"
                                  id="longitude"
                                  onChange={this.handleChange}
                                />
                              </div>
                              <div className="input-group col-md-6 col-sm-6">
                                <div className="input-group-prepend">
                                  <span className="input-group-text">
                                    <i className="fas fa-map-marker-alt" />{" "}
                                    latitude
                                  </span>
                                </div>
                                <input
                                  type="number"
                                  step="any"
                                  className="form-control"
                                  id="latitude"
                                  onChange={this.handleChange}
                                />
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="form-group form-inline">
                          <label className="col-md-3 col-form-label">
                            Kecamatan
                          </label>
                          <div className="col-md-9 p-0">
                            <select
                              className="form-control"
                              id="subDistric"
                              onChange={this.handleChange}
                            >
                              <option value="Bayan">Bayan</option>
                              <option value="Tanjung">Tanjung</option>
                              <option value="Gangga">Gangga</option>
                              <option value="Pemenang">Pemenang</option>
                              <option value="Kayangan">Kayangan</option>
                            </select>
                          </div>
                        </div>
                        <div className="form-group form-inline">
                          <label className="col-md-3 col-form-label">
                            Desa
                          </label>
                          <input
                            type="text"
                            className="form-control"
                            id="village"
                            onChange={this.handleChange}
                          />
                        </div>
                        <div className="form-group form-inline">
                          <label className="col-md-3 col-form-label">
                            Ticket
                          </label>
                          <input
                            type="number"
                            className="form-control"
                            id="ticket"
                            placeholder="input 0 for free"
                            onChange={this.handleChange}
                          />
                        </div>

                        <div className="form-group form-inline">
                          <label className="col-md-3 col-form-label">
                            Description
                          </label>
                          <div className="col-md-9 p-0">
                            <textarea
                              className="form-control input-full"
                              defaultValue={""}
                              id="description"
                              onChange={this.handleChange}
                            />
                          </div>
                        </div>
                        <div className="form-group form-inline">
                          <label className="col-md-3 col-form-label">
                            Images
                          </label>
                          <div className="col-md-9 p-0">
                            <div className="row">
                              <div className="input-group col-md-8 col-sm-4 mb-1">
                                <div className="input-group-prepend">
                                  <span className="input-group-text">
                                    images 1
                                  </span>
                                </div>
                                <input
                                  type="file"
                                  className="form-control"
                                  accept="image/*"
                                  id="image"
                                  onChange={this.handleChangeImage}
                                />
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="card-action">
                          <button className="btn btn-success mr-1">
                            Submit
                          </button>
                        </div>
                      </form>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    auth: state.firebase.auth,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    createCulture: (tourism) => dispatch(createCulture(tourism)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(CreateCulture);
