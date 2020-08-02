import React from "react";
import { Link } from "react-router-dom";
import CulinarySummary from "./CulinarySummary";



const CulinaryList = ({ tourisms, firestore }) => {

  return (
    <div className="card">
      <div className="card-header bg-primary">
        <div className="ml-md-auto">
          <Link
            className="btn btn-white btn-border btn-round mr-2"
            to="/createCulinary"
          >
            <i className="fas fa-plus-circle" /> Masukan Wisata Kuliner Terbaru
          </Link>
        </div>
        <h4 className="card-title text-center text-white">
          Wisata Budaya Lombok Utara
        </h4>
        <div />
      </div>
      <div className="card-body">
        <div className="table-responsive">
          <table
            id="basic-datatables"
            className="display table table-striped table-hover"
          >
            <thead>
              <tr>
                <th>Name</th>
                <th>Type</th>
                <th>Status</th>
                <th>image</th>
                <th>Time</th>
                <th>Action</th>
              </tr>
            </thead>
            <tfoot>
              <tr>
                <th>Name</th>
                <th>Type</th>
                <th>Status</th>
                <th>image</th>
                <th>Time</th>
                <th>Action</th>
              </tr>
            </tfoot>
            <tbody>
              {tourisms &&
                tourisms.map((tourism) => {
                  return <CulinarySummary tourism={tourism}firestore={firestore} />;
                })}
             
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );

};
export default CulinaryList;
