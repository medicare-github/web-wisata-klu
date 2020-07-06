import React, { Component } from "react";
import { connect } from "react-redux";
import CulinaryList from "./CulinaryList";
import {firestoreConnect} from 'react-redux-firebase';
import {compose} from 'redux'
import {Redirect} from 'react-router-dom'

class Culinary extends Component {
  render() {
    const {tourisms,auth} =this.props
    if (!auth.uid) return <Redirect to='/'/>
    return (
      <div className="content">
        {/* <PanelHeader /> */}
        <div className="page-inner mt-2">
          <div className="row">
            <div className="col-md-12">
              <CulinaryList tourisms={tourisms}/>
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
    tourisms: state.firestore.ordered.Tourisms,
    auth: state.firebase.auth,
  };
};

export default compose(
  connect(mapStateToProps),
  firestoreConnect([
    { collection: "Tourisms", where: [`kind`, `==`, `culinary`], orderBy:['createdAt', 'desc'] },
  ])
)(Culinary);
