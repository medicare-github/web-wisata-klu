import React from "react";
import { firestoreConnect } from "react-redux-firebase";
import { compose } from "redux";
import { connect } from "react-redux";
import {Redirect} from 'react-router-dom';
import moment from "moment";
// import {updateAccept} from "../../store/actions/tourismAction"


const DetailsTour = (props) => {

  const { currentTourism,auth } = props;

  
  
  if (!auth.uid) return <Redirect to='/'/>

  if (currentTourism) {  
    return (
    <div className="content">
      <div className="page-inner">
        {/* Customized Card */}
        <h4 className="page-title">Detail Tourism <span className="text-warning">{currentTourism.name}</span></h4>
        <div className="row">
          <div className="col-md-4">
            <div className="card card-post card-round">
              <img
                className="card-img-top"
                src={currentTourism.image == null ? 'https://www.testingxperts.com/wp-content/uploads/2019/02/placeholder-img.jpg' : currentTourism.image}
                alt="title"
                width="80px"
              />
              <div className="card-body">
                <div className="d-flex">
                  <div className="info-post ml-2">
                    <p className="username"> post by : {currentTourism.emailUser}</p>
                    <p className="date text-muted">{currentTourism.createdAt == null ? 'Updated At : '+moment(currentTourism.updatedAt.toDate()).calendar() :'Created At : '+moment(currentTourism.createdAt.toDate()).calendar() }</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-8">
            <div className="card card-post card-round">
              <div className="card-body">
                <table className="table mt-3">
                  <tbody>
                    <tr>
                      <th style={{ width: 200 }}>Nama Wisata</th>
                      <td>: {currentTourism.name}</td>
                    </tr>
                    <tr>
                      <th style={{ width: 10 }}>jenis Wisata</th>
                      <td>: {currentTourism.kind}</td>
                    </tr>
                    <tr>
                      <th>LatLing</th>
                      <td>: [ {currentTourism.lating.latitude} , {currentTourism.lating.longitude}]</td>
                    </tr>
                    <tr>
                      <th>Kecamatan</th>
                      <td>: {currentTourism.subDistric}</td>
                    </tr>
                    <tr>
                      <th>Desa</th>
                      <td>: {currentTourism.village}</td>
                    </tr>
                    <tr>
                      <th>Deskripsi</th>
                      <td>: {currentTourism.description}</td>
                    </tr>
                   
                    {currentTourism.kind === "culinary" ? 
                        <tr>
                          <th>Buka dan tutup </th>
                          <td>: {currentTourism.open} - {currentTourism.close}</td>
                        </tr>
                     :
                      <tr>
                        <th> Harga Ticket </th>
                        {currentTourism.ticket === 0 ? <td>: Free</td>
                        : 
                        <td>: {currentTourism.ticket} </td>}
                      </tr>
                    }
                    {
                      currentTourism.kind ==="culinary" ? 
                      <tr>
                        <th>Harga</th>
                        <td>: Rp. {currentTourism.priceStart} - Rp. {currentTourism.priceEnd} </td>
                      </tr>
                      :null
                    }
                  </tbody>
                </table>
                <button onClick className={currentTourism.status==='accepted' ? 'btn btn-danger btn-rounded btn-sm' :'btn btn-success btn-rounded btn-sm'}>
                  {currentTourism.status==='accepted' ? 'Dis accept' : 'Accept'}
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    );
  } else {
    return (
      <div className="container center">
        <p>Loading .....</p>
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
    auth:state.firebase.auth

  }; 
};


// const mapDispatchToProps = (dispatch) => {
//   return {
//     updateAccept: (data) => dispatch(updateAccept(data)),
//   };
// };


export default compose(
  connect(mapStateToProps),
  firestoreConnect([
    {
      collection: "Tourisms",
    },
  ])
)(DetailsTour);
