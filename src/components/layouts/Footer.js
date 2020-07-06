import React, { Component } from "react";

export default class Footer extends Component {
  render() {
    return (
      <footer className="footer">
        <div className="container-fluid">
          <div className="copyright ml-auto">
            2020, made with <i className="fa fa-heart heart text-danger" /> by
            <a href="url">anakBayanCode</a>
          </div>
        </div>
      </footer>
    );
  }
}
