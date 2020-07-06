import React, { Component } from "react";
import {connect} from 'react-redux'
import TourismList from "../tourisms/TourismList";
import {firestoreConnect} from 'react-redux-firebase';
import {compose} from 'redux'
import PanelHeader from "../layouts/DashboardLink/PanelHeader";
import {Redirect} from 'react-router-dom'

class Dashboard extends Component {
  render() {
    //   console.log(this.props)
      const {tourisms,auth} =this.props
      if (!auth.uid) return <Redirect to='/'/>
    return (
      <div className="content">
        <PanelHeader/>
        <div className="page-inner mt--5">
                <div className="row">
                    <div className="col-md-12">
                        <TourismList tourisms={tourisms}/>
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
        tourisms:state.firestore.ordered.Tourisms,
        auth:state.firebase.auth
    }
}

export default compose(
  connect(mapStateToProps),
  firestoreConnect ([
    {collection : 'Tourisms', limit:25 , orderBy:['createdAt', 'desc']}
  ])
) (Dashboard)