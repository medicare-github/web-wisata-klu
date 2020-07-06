import React from "react";
import { NavLink } from 'react-router-dom';

const ProfileLink = () => {
  return (
    <div className="collapse in" id="collapseExample">
      <ul className="nav">
        <li>
          <NavLink to="/">
             <span className="link-collapse">My Profile</span>
          </NavLink>
        </li>
        <li>
          <NavLink to="/">
            <span className="link-collapse">Edit Profile</span>
          </NavLink>
        </li>
      </ul>
    </div>
  );
};
export default ProfileLink