import React from "react";
import { Link } from "react-router-dom";
import NaturalSummary from "./NaturalSummary";

const NaturalList = ({ tourisms, firestore }) => {

  return (
    <div className="card">
      <div className="card-header bg-primary">
        <div className="ml-md-auto">
          <Link
            className="btn btn-white btn-border btn-round mr-2"
            to="/createtour"
          >
            <i className="fas fa-plus-circle" /> Masukan Wisata Alam Terbaru
          </Link>
        </div>
        <h4 className="card-title text-center text-white">
          Wisata Alam Lombok Utara
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
                  return <NaturalSummary tourism={tourism} firestore={firestore} />;
                })}
             
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );

};
export default NaturalList;
