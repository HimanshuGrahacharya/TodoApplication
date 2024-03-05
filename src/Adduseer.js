import React from "react";
import { useState } from "react";
import axios from "axios";
import "./App.css";
import { useNavigate } from "react-router-dom";
function Adduseer() {
  const [inputData, setInputData] = useState({ name: "", email: "" });
  const navigat = useNavigate();
  function handleSubmit(event) {
    event.preventDefault();
    axios
      .post("http://localhost:3030/users", inputData)
      .then(res => {
        alert("Data Added Successfully!");
        navigat("/");
      })
      .catch(err => console.log(err));
  }
  return (
    <div className="d-flex w-100 vh-100 justify-content-center align-items-center">
      <div
        className="w-50 border bg-light p-5"
        style={{ boxShadow: "0px 4px 4px 1px", borderRadius: "20px" }}
      >
        <form onSubmit={handleSubmit}>
          <div>
            <label htmlFor="name">ID:</label>

            <input
              type="text"
              name="name"
              className="form-control"
              onChange={e => setInputData({ ...inputData, id: e.target.value })}
            />
          </div>
          <div>
            <label htmlFor="name">Name:</label>

            <input
              type="text"
              name="name"
              className="form-control"
              onChange={e =>
                setInputData({ ...inputData, name: e.target.value })
              }
            />
          </div>

          <div>
            <label htmlFor="name">Email:</label>

            <input
              type="text"
              name="name"
              className="form-control"
              onChange={e =>
                setInputData({ ...inputData, email: e.target.value })
              }
            />
          </div>
          <br />
          <button className="btn btn-info">Submit</button>
        </form>
      </div>
    </div>
  );
}

export default Adduseer;
