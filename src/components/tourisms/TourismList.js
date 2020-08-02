import React from "react";
import ToursSummary from "./ToursSummary";
import Loading from "../layouts/Loading";

const TourismList = ({ tourisms, firestore }) => {
  if (tourisms) {
    return (
      <div className="card">
        <div className="card-header bg-primary">
          <h4 className="card-title text-center text-white">
            Semua Data Wisata
          </h4>
        </div>
        <div className="card-body">
          <div className="table-responsive">
            <table
              id="multi-filter-select"
              className="display table table-striped table-hover"
            >
              <thead>
                <tr>
                  <th>Name</th>
                  <th>Type</th>
                  <th>Status</th>
                  <th>Photo</th>
                  <th>Time</th>
                  <th>action</th>
                </tr>
              </thead>
              <tfoot>
                <tr>
                  <th>Name</th>
                  <th>Type</th>
                  <th>Status</th>
                  <th>Photo</th>
                  <th>Time</th>
                  <th>action</th>
                </tr>
              </tfoot>
              <tbody>
                {tourisms &&
                  tourisms.map((tourism) => {
                    
                    return <ToursSummary tourism={tourism} key={tourism.id} firestore={firestore} />;
                  })}
              </tbody>
            </table>
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

export default TourismList;
