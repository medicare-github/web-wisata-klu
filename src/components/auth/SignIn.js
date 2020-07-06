import React, { Component } from "react";
import { connect } from "react-redux";
import { signIn } from "../../store/actions/authAction";
import {Redirect} from 'react-router-dom'


export class SignIn extends Component {
  state = {
    email: "",
    password: "",
  };
  handleChange = (e) => {
    this.setState({
      [e.target.id]: e.target.value,
    });
  };
  handleSubmit = (e) => {
    e.preventDefault();
    console.log(this.state);
    const { history } = this.props;
    this.props.signIn(this.state);
    if (signIn) {
      history.push("/");
    }
  };
  render() {
    const { authError, auth } = this.props;
  if (auth.uid) return <Redirect to='/'/>

    return (
      <div className="wrapper overlay-sidebar">
        <div className="main-header">
          <div className="logo-header" data-background-color="blue2">
            <a href="index.html" className="logo">
              <img
                src="../assets/img/logo.svg"
                alt="navbar brand"
                className="navbar-brand"
              />
            </a>
            <button className="topbar-toggler more">
              <i className="icon-options-vertical" />
            </button>
          </div>
          <nav
            className="navbar navbar-header navbar-expand-lg"
            data-background-color="blue2"
          ></nav>
        </div>
        <div className="main-panel mt-5">
          <div className="container">
            <div className="row">
              <div className="col-md-8 ml-auto mr-auto mt-5 ">
                <div className="card">
                  <div className="card-header">
                    <div className="card-title text-center">
                      Silahkan Login Untuk Akses
                    </div>
                  </div>
                  <form onSubmit={this.handleSubmit}>
                    <div className="card-body">
                      <div className="row">
                        <div className="col-md-12 col-lg-12">
                          <div className="form-group">
                            <label htmlFor="email">Email Address</label>
                            <input
                              type="email"
                              className="form-control"
                              id="email"
                              placeholder="Enter Email"
                              onChange={this.handleChange}
                            />
                          </div>
                          <div className="form-group">
                            <label htmlFor="password">Password</label>
                            <input
                              type="password"
                              className="form-control"
                              id="password"
                              placeholder="Password"
                              onChange={this.handleChange}
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="card-action">
                      <button className="btn btn-success">Login</button>
                      <div className="text-danger">
                        {authError ? <p>{authError}</p> : null}
                      </div>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    authError: state.auth.authError,
    auth:state.firebase.auth
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    signIn: (creds) => dispatch(signIn(creds)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(SignIn);
