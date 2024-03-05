import "./App.css";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import React, { useEffect, useState } from "react";
function App() {
  const [columns, setColumns] = useState([]);
  const [records, setRecords] = useState([]);
  const navigate = useNavigate();
  useEffect(() => {
    axios.get("http://localhost:3030/users").then(res => {
      setColumns(Object.keys(res.data[0]));
      setRecords(res.data);
    });
  }, []);
  return (
    <div className="container">
      <h1 className="title"> CRUD </h1>
      <div className="text-end">
        <Link to="/create" className="">
          <button className="btn btn-primary">Add+</button>
        </Link>
      </div>
      <table className="table">
        <thead>
          <tr>
            {columns.map((c, i) => (
              <th key={i} style={{ backgroundColor: "lemonchiffon" }}>
                {c}
              </th>
            ))}
            <th style={{ backgroundColor: "bisque" }}>Action</th>
          </tr>
        </thead>
        <tbody>
          {records.map((d, i) => (
            <tr>
              <td>{d.id}</td>
              <td>{d.name}</td>
              <td>{d.email}</td>
              <td>
                <Link
                  to={`/update/${d.id}`}
                  className="btn btn-sm  btn-success"
                >
                  Update
                </Link>

                <button
                  onClick={e => handleSubmit(d.id)}
                  className="btn btn-sm ms-1 btn-danger"
                >
                  Delete
                </button>
              </td>
              {/* <td>Up/De</td> */}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
  function handleSubmit(id) {
    const conf = window.confirm("Do ypu want to delete");
    if (conf)
      axios
        .delete("http://localhost:3030/users/" + id)
        .then(res => {
          alert("record has deleted");
          navigate("/");
        })
        .catch(err => console.log(err));
  }
}

export default App;
