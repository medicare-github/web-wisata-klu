import React, { Component } from "react";

export default class Header extends Component {
  render() {
    return (
      <div className="logo-header" data-background-color="blue">
        <a href="index.html" className="logo">
          <img
            src="../assets/img/icon1.png"
            width={150}
            alt="navbar brand"
            className="navbar-brand"
          />
        </a>
        <button
          className="navbar-toggler sidenav-toggler ml-auto"
          type="button"
          data-toggle="collapse"
          data-target="collapse"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon">
            <i className="icon-menu" />
          </span>
        </button>
        <button className="topbar-toggler more">
          <i className="icon-options-vertical" />
        </button>
        <div className="nav-toggle">
          <button className="btn btn-toggle toggle-sidebar">
            <i className="icon-menu" />
          </button>
        </div>
      </div>
    );
  }
}
