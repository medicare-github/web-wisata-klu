import React from "react";
import { Link } from "react-router-dom";
import moment from "moment";

const ToursSummary = ({ tourism }) => {
  return (
    <tr>
      <td>
        <Link to={"/detail/" + tourism.id}>{tourism.name}</Link>
      </td>
      <td>{tourism.kind}</td>
      <td className="text-left">
        <span
          className={
            tourism.status === "accepted"
              ? "btn btn-success btn-rounded btn-sm"
              : "btn btn-danger btn-rounded btn-sm"
          }
        >
          {tourism.status}
        </span>
      </td>
      <td>
        <div className="row">
          <div className="col-md-4 my-1">
            <img
              style={{ borderRadius: 4 }}
              src={tourism.image}
              alt="title"
              width="80px"
            />
          </div>
        </div>
      </td>
      <td>
        {tourism.createdAt == null
          ? "Updated At : " + moment(tourism.updatedAt.toDate()).calendar()
          : "Created At : " + moment(tourism.createdAt.toDate()).calendar()}
      </td>
      <td>
        <div className="form-button-action">
          {tourism.emailUser === "mcareducation@gmail.com" ? (
            <button className="btn btn disabled btn-sm">disabled</button>
          ) : (
            <button
              type="button"
              data-toggle="tooltip"
              title
              className="btn btn-link btn-primary btn-lg"
              data-original-title="Edit Task"
            >
              <i className="fa fa-edit" />
            </button>
          )}
          <button
            type="button"
            data-toggle="tooltip"
            title
            className="btn btn-link btn-danger"
            data-original-title="Remove"
          >
            <i className="fa fa-times" />
          </button>
        </div>
      </td>
    </tr>
  );
};

export default ToursSummary;
