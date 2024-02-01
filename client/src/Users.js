/* eslint-disable react/jsx-key */
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import Swal from "sweetalert2";
//i. Student Name : Text
// ii. Student ID : Text
// iii. Course : Dropdown (Dropdown values : React JS, Node JS, Mongo DB, PostgreSQL, MySQL, SQLite)
// iv. Fees : Numeric
// v. Couse Start : Date Time
// vi. Course End : Date Time

import { Container, Row, Col } from "react-bootstrap";

function Users() {
  // https://studb12.onrender.com/api/students
  const [users, setUsers] = useState([]);
  useEffect(() => {
    axios
      .get("http://localhost:4000/api/students")
      .then((result) => {
        console.log(result);
        setUsers(result.data);
      })
      .catch((err) => console.log(err));
  }, []);

  //

  const handleDelete = (id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        axios
          .delete("http://localhost:4000/api/students/deleteuser/" + id)
          .then((result) => {
            console.log(result);
          })
          .catch((err) => console.log(err));

        Swal.fire({
          title: "Deleted!",
          text: "Your Record has been deleted.",
          icon: "success",
        }).then((result) => {
          if (result.isConfirmed) {
            window.location.reload();
          }
        });
      } else {
        Swal.fire({
          title: " Not Deleted!",
          text: "Your Record not deleted.",
          icon: "info",
        });
      }
    });
  };

  return (
    <Container fluid>
      <Row className="justify-content-center align-items-center">
        <Col xs={12} md={6} className="bg-white rounded p-3 m-3">
          <Link to="/" className="btn btn-success">
            Back
          </Link>

          <table className="table">
            <thead>
              <tr>
                <th>Name</th>
                <th>Student ID</th>
                <th>Cource</th>
                <th>Fees</th>
                <th>Sdate</th>
                <th>Edate</th>
                <th>Duration</th>
              </tr>
            </thead>

            <tbody>
              {users.map((user) => {
                return (
                  <tr>
                    <td>{user.Sname}</td>
                    <td>{user._id}</td>
                    <td>{user.Cource}</td>
                    <td>{user.Fees}</td>
                    <td>{user.Startdate}</td>
                    <td>{user.Enddate}</td>
                    <td>{user.Duration}</td>
                    <td>
                      <Link
                        to={`/updateuser/${user._id}`}
                        className=" p-1  btn btn-secondary w-100"
                      >
                        {" "}
                        ✏️Edit
                      </Link>
                      <button
                        className=" p-1 btn btn-danger hover-zoom w-100"
                        onClick={() => handleDelete(user._id)}
                      >
                        🗑️Delete
                      </button>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </Col>
      </Row>
    </Container>
  );
}

export default Users;
