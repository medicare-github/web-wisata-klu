import React from "react";
import { firestoreConnect } from "react-redux-firebase";
import { compose } from "redux";
import { connect } from "react-redux";
import { Redirect } from "react-router-dom";
import Loading from "../layouts/Loading";

function onChange(e){
  
  

  const data ={
    name:"name"
  }
  console.log(data);
}

// function handleSubmit(){

// }



const EditTourism = (props) => {
  const { currentTourism, auth } = props;
  if (auth.email !== "cmedi2118@gmail.com") return <Redirect to="/cantIn" />;

  if (currentTourism) {
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
                <a href="url">
                  Form Edit Data Wisata{" "}
                  {currentTourism.kind === "natural"
                    ? "Alam"
                    : currentTourism.kind === "culinary"
                    ? "Kuliner"
                    : "Budaya"}{" "}
                </a>
              </li>
            </ul>
          </div>
          <div className="row">
            <div className="col-md-12">
              <div className="card">
                <div className="card-header bg-primary">
                  <div className="card-title text-white ">
                    Form Edit Data Wisata{" "}
                    {currentTourism.kind === "natural"
                      ? "Alam"
                      : currentTourism.kind === "culinary"
                      ? "Kuliner"
                      : "Budaya"}
                  </div>
                </div>
                <div className="card-body">
                  <div className="row">
                    <div className="col-md-10 mx-auto">
                      <form className="form">
                        <div className="form-group form-inline">
                          <label className="col-md-3 col-form-label">
                            Nama Wisata{" "}
                            {currentTourism.kind === "natural"
                              ? "Alam"
                              : currentTourism.kind === "culinary"
                              ? "Kuliner"
                              : "Budaya"}
                          </label>
                          <div className="col-md-9 p-0">
                            <input
                              type="text"
                              className="form-control input-full"
                              placeholder="Enter Input"
                              id="name"
                              defaultValue={currentTourism.name}
                              onChange={onChange()}
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
                                  defaultValue={currentTourism.lating.longitude}
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
                                  defaultValue={currentTourism.lating.latitude}
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
                              defaultValue={currentTourism.subDistric}
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
                            defaultValue={currentTourism.village}
                          />
                        </div>
                        {currentTourism.kind === "culinary" ? (
                          <div>
                            <div className="form-group form-inline">
                              <label className="col-md-3 col-form-label">
                                Kisaran Harga
                              </label>
                              <div className="col-md-9 p-0">
                                <div className="row">
                                  <div className="input-group col-md-6 col-sm-6">
                                    <div className="input-group-prepend">
                                      <span className="input-group-text">
                                        Harga termurah
                                      </span>
                                    </div>
                                    <input
                                      type="number"
                                      step="any"
                                      className="form-control"
                                      id="priceStart"
                                      defaultValue={currentTourism.priceStart}
                                    />
                                  </div>
                                  <div className="input-group col-md-6 col-sm-6">
                                    <div className="input-group-prepend">
                                      <span className="input-group-text">
                                        Harga termahal
                                      </span>
                                    </div>
                                    <input
                                      type="number"
                                      step="any"
                                      className="form-control"
                                      id="PriceEnd"
                                      defaultValue={currentTourism.priceEnd}
                                    />
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div className="form-group form-inline">
                              <label className="col-md-3 col-form-label">
                                Buka
                              </label>
                              <div className="col-md-9 p-0">
                                <div className="row">
                                  <div className="input-group col-md-6 col-sm-6">
                                    <div className="input-group-prepend">
                                      <span className="input-group-text">
                                        Dari jam
                                      </span>
                                    </div>
                                    <input
                                      type="text"
                                      step="any"
                                      className="form-control"
                                      id="open"
                                      defaultValue={currentTourism.open}
                                    />
                                  </div>
                                  <div className="input-group col-md-6 col-sm-6">
                                    <div className="input-group-prepend">
                                      <span className="input-group-text">
                                        Sampai
                                      </span>
                                    </div>
                                    <input
                                      type="text"
                                      step="any"
                                      className="form-control"
                                      id="close"
                                      defaultValue={currentTourism.close}
                                    />
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        ) : (
                          <div className="form-group form-inline">
                            <label className="col-md-3 col-form-label">
                              Ticket
                            </label>
                            <input
                              type="number"
                              className="form-control"
                              id="ticket"
                              placeholder="input 0 for free"
                              defaultValue={currentTourism.ticket.toString()}
                            />
                          </div>
                        )}

                        <div className="form-group form-inline">
                          <label className="col-md-3 col-form-label">
                            Description
                          </label>
                          <div className="col-md-9 p-0">
                            <textarea
                              className="form-control input-full"
                              id="description"
                              defaultValue={currentTourism.description}
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
                                />
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="form-group form-inline">
                          <label className="col-md-4 col-form-label"></label>
                          <div className="col-md-8 p-0">
                            <div className="row">
                              {currentTourism.image === null ? (
                                ""
                              ) : (
                                <img
                                  className="img rounded"
                                  height={100}
                                  src={currentTourism.image}
                                  alt={currentTourism.name}
                                />
                              )}
                            </div>
                          </div>
                        </div>
                      </form>
                      <div className="card-action">
                        <button
                          onClick={() => {
                            onChange();
                          }}
                          className="btn btn-success mr-1"
                        >
                          Simpan
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  } else {
    return (
      <div className="card">
        <Loading />
      </div>
    );
  }
};

const mapStateToProps = (state, ownProps) => {
  console.log(state);
  const id = ownProps.match.params.id;
  const Tourisms = state.firestore.data.Tourisms;
  const tourism = Tourisms ? Tourisms[id] : null;
  return {
    currentTourism: tourism,
    idT: id,
    auth: state.firebase.auth,
  };
};

export default compose(
  connect(mapStateToProps),
  firestoreConnect([
    {
      collection: "Tourisms",
    },
  ])
)(EditTourism);
