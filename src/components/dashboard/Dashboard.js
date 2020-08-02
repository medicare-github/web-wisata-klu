import React, { Component } from "react";
import {connect} from 'react-redux'
import TourismList from "../tourisms/TourismList";
import {firestoreConnect} from 'react-redux-firebase';
import {compose} from 'redux'
import PanelHeader from "../layouts/DashboardLink/PanelHeader";
import {Redirect} from 'react-router-dom'
import { signOut } from "../../store/actions/authAction";

class Dashboard extends Component {
  render() {
      const {tourisms,auth, firestore} =this.props
      if (auth.email !=="cmedi2118@gmail.com") return <Redirect to='/cantIn' />
    return (
      <div className="content">
        <PanelHeader/>
        <div className="page-inner mt--5">
                <div className="row">
                    <div className="col-md-12">
                         <TourismList tourisms={tourisms} firestore={firestore}/>
                    </div>
                </div>
            </div>
      </div>
    );
  }
} 

const mapStateToProps =(state)=>{
  console.log(state);
    return {
        firestore: state.firestore,
        tourisms:state.firestore.ordered.Tourisms,
        auth:state.firebase.auth,
        signOut: ()=>state(signOut()),
        
    }
}

export default compose(
  connect(mapStateToProps),
  firestoreConnect ([
    {collection : 'Tourisms', limit:25 , orderBy:['createdAt', 'desc']}
  ])
) (Dashboard)