import React from "react";
import { signOut } from "../../store/actions/authAction";
import { connect } from "react-redux";
import { Link } from "react-router-dom";

const NotIn = (props) => {
  return (
    <div className="col-12 col-md-10  mt-5">
      <div className="col-md-12">
        <div className="card full-height">
          <div className="card-body primary">
            <div className="card-title text-warning"> <li className="fas fa-frown"></li> NOTIFIKASI </div>
            <div className="card-category text-center">
              Anda Harus Melakukan Login Menggunakan Email dan Password Admin
              Untuk Mengkases
              <div className="col-md-12 ml-auto mr-auto mt-2">
                <Link to="/signIn" onClick={props.signOut}>
                  <button className="btn btn-warning btn-sm">OK</button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
const mapDispatchToProps = (dispatch) => {
  return {
    signOut: () => dispatch(signOut()),
  };
};

export default connect(null, mapDispatchToProps)(NotIn);
