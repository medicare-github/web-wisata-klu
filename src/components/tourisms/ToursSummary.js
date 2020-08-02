import React from "react";
import Swal from "sweetalert2";
import { Link } from "react-router-dom";
import moment from "moment";

function del(tourism, firestore) {
  console.log(tourism);
  console.log(firestore);
  Swal.fire({
    title: "Apakah Anda yakin?",
    text: "Anda ingin menghapus "+" "+tourism.name,
    icon: "warning",
    showCancelButton: true,
    confirmButtonColor: "#3085d6",
    cancelButtonColor: "#d33",
    confirmButtonText: "Yes, delete it!",
  }).then((result) => {
    if (result.value) {
      firestore.collection('Tourisms').doc(tourism.id).delete();      
      Swal.fire("Deleted!", "Your file has been deleted.", "success");
    }
  });
}

const ToursSummary = ({ tourism, firestore }) => {
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
              ? "btn-success btn-xs"
              : "btn-danger btn-xs"
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
              width="60px"
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
          {tourism.emailUser !== "cmedi2118@gmail.com" ? (
            <button className="btn btn disabled btn-sm">disabled</button>
          ) : (
            <button
              type="button"
              data-toggle="tooltip"
              className="btn btn-link btn-primary btn-lg"
              data-original-title="Edit Task"
            >
              <i className="fa fa-edit" />
            </button>
          )}
          <button
            type="button"
            onClick={() => {
             
             
              del(tourism,firestore);
            }}
            data-toggle="tooltip"
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
