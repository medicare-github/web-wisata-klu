import React from 'react';
import {NavLink} from 'react-router-dom';

const ContentLink = () => { 

    return (
      <ul className="nav nav-primary">
        <li className="nav-item active">
            <NavLink 
                to="/"
                className="collapsed"
            >
                <i className="fas fa-tachometer-alt" />
                <p>Dashboard</p>
            </NavLink>
        </li>
        {/* Contents */}
        <li className="nav-section">
          <span className="sidebar-mini-icon">
            <i className="fa fa-ellipsis-h" />
          </span>
          <h4 className="text-section">Contents</h4>
        </li>
        <li className="nav-item">
            <NavLink 
                to="/natural"
                className="collapsed"
            >
                <i className="fas fa-air-freshener" />
                <p>Wisata Alam</p>
            </NavLink>
        </li>
        <li className="nav-item">
            <NavLink 
                to="/culture"
                className="collapsed"
            >
                <i className="fas fa-archway" />
                <p>Desa Wisata (Budaya)</p>
            </NavLink>
        </li>
        <li className="nav-item">
            <NavLink 
                to="/culinary"
                className="collapsed"
            >
                <i className="fas fa-concierge-bell" />
                <p>Wisata Kuliner</p>
            </NavLink>
        </li>
        {/* end Contents */}
      </ul>
    );

}
export default ContentLink
