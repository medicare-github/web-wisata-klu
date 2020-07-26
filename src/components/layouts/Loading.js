import React, { Component } from "react";

export class Loading extends Component {
  render() {
    return (
      <div className="main-panel">
        <div className="container">
          <div className="row">
            <div className="col-md-4"></div>
            <div className="col-md-4 col-md-6 ml-auto mr-auto text-center">
              <div className="lds-roller">
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
              </div>
            </div>
            <div className="col-md-4"></div>
          </div>
        </div>
      </div>
    );
  }
}

export default Loading;
