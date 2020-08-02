import React from 'react';
import {Link} from 'react-router-dom';


const PanelHeader = () => {
    return (
        <div className="panel-header bg-primary-gradient">
          <div className="page-inner py-5">
            <div className="d-flex align-items-left align-items-md-center flex-column flex-md-row">
              <div>
                <h2 className="text-white pb-2 fw-bold">WISATA KLU</h2>
                <h5 className="text-white op-7 mb-2">
                  Selamat Datang di Web Manajemen APP Wisata Lombok Utara
                </h5>
              </div>
              <div className="ml-md-auto py-2 py-md-0">
                <Link  className="btn btn-white btn-border btn-round mr-2 mt-1"
                to="/createtour"
              >
                  <i className="fas fa-plus-circle"/> Wisata alam
                </Link>
                <Link  className="btn btn-white btn-border btn-round mr-2 mt-1"
                to="/createCulinary"
              >
                  <i className="fas fa-plus-circle"/> Wisata kuliner
                </Link>
                <Link  className="btn btn-white btn-border btn-round mr-2 mt-1"
                to="/createCulture"
              >
                  <i className="fas fa-plus-circle"/> Wisata Budaya
                </Link>
              </div>
            </div>
          </div>
        </div>
    )
}

export default PanelHeader