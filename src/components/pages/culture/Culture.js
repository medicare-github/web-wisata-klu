import React, { Component } from "react";
import { connect } from "react-redux";
import CultureList from "./CultureList";
import {firestoreConnect} from 'react-redux-firebase';
import {compose} from 'redux'
import {Redirect} from 'react-router-dom'

class Culture extends Component {
  render() {
    const {tourisms,auth, firestore} =this.props
    if (auth.email !=="cmedi2118@gmail.com") return <Redirect to='/cantIn' />

    return (
      <div className="content">
        {/* <PanelHeader /> */}
        <div className="page-inner mt-2">
          <div className="row">
            <div className="col-md-12">
              <CultureList tourisms={tourisms} firestore={firestore}/>
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
  };
};

export default compose(
  connect(mapStateToProps),
  firestoreConnect([
    { collection: "Tourisms", where: [`kind`, `==`, `culture`], orderBy:['createdAt', 'desc'] },
  ])
)(Culture);
