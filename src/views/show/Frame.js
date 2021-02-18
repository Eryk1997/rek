import React, { Component } from "react";
import { Link } from "react-router-dom";

export function Frame(date) {
  let name = date.name;
  let surname = date.surname;
  let email = date.email;
  let id = date.id;

  return (
    <div className="col-md-5 mt-3 mr-5 ml-5 pl-5 pr-5 col-xs-8">
      <div className="card bg-secondary ">
        <div className="card-body text-warning ">
          <h5 className="card-title">imię: {name} </h5>
          <h5 className="card-title">nazwisko: {surname} </h5>
          <h5 className="card-title">email: {email} </h5>
          <Link to={"/edit/" + id}>
            <button
              type="button"
              className="btn text-warning bg-light btc-outline-warning col-5"
            >
              Edytuj
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Frame;
