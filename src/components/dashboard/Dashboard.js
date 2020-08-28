import React, { Component } from "react";
import { connect } from "react-redux";
import TourismList from "../tourisms/TourismList";
import { firestoreConnect } from "react-redux-firebase";
import { compose } from "redux";
import PanelHeader from "../layouts/DashboardLink/PanelHeader";
import { Redirect } from "react-router-dom";
import { signOut } from "../../store/actions/authAction";

class Dashboard extends Component {
  render() {
    const { tourisms, auth, firestore } = this.props;
    if (auth.email !== "cmedi2118@gmail.com") return <Redirect to="/cantIn" />;
    return (
      <div className="content">
        <PanelHeader />
        {/* <div className="row row-card-no-pd mt--5 ml-5 mr-5">
          <div className="col-sm-6 col-md-6">
            <div className="card card-stats card-round">
              <div className="card-body ">
                <div className="row">
                  <div className="col-4">
                    <div className="icon-big text-center">
                      <i className="flaticon-error text-warning" />
                    </div>
                  </div>
                  <div className="col-6 col-stats">
                    <div className="numbers">
                      <p className="card-category">Not Accepted</p>
                      <h4 className="card-title">--</h4>
                    </div>
                  </div>
                  <div className="col-2 col-stats">
                    <button className="btn btn-primary btn-sm btn-rounded">View</button>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-sm-6 col-md-6">
            <div className="card card-stats card-round">
              <div className="card-body ">
                <div className="row">
                  <div className="col-4">
                    <div className="icon-big text-center">
                      <i className="flaticon-success text-success" />
                    </div>
                  </div>
                  <div className="col-6 col-stats">
                    <div className="numbers">
                      <p className="card-category">Accepted</p>
                      <h4 className="card-title">--</h4>
                    </div>
                  </div>
                  <div className="col-2 col-stats">
                    <button className="btn btn-primary btn-sm btn-rounded">View</button>
                  </div>
                </div>
              </div>
            </div>
          </div>
          </div> */}

        <div className="page-inner mt--5">
          <div className="row">
            <div className="col-md-12">
              <TourismList tourisms={tourisms} firestore={firestore} />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  console.log(state);
  return {
    firestore: state.firestore,
    tourisms: state.firestore.ordered.Tourisms,
    auth: state.firebase.auth,
    signOut: () => state(signOut()),
  };
};

export default compose(
  connect(mapStateToProps),
  firestoreConnect([
    { collection: "Tourisms", limit: 25, orderBy: ["createdAt", "desc"] },
  ])
)(Dashboard);
