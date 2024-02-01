import { Link } from "react-router-dom";
import { useState } from "react";
import axios from "axios";
import Swal from "sweetalert2";
import "ldrs/ring";
import "ldrs/pulsar";
import { useNavigate } from "react-router-dom";

function CreateUser() {
  const [Sname, setName] = useState("");
  const [_id, setSid] = useState("");
  const [Cource, setCource] = useState("");
  const [Fees, setFees] = useState("");
  const [Startdate, setSdate] = useState("");
  const [Enddate, setEdate] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const navigate = useNavigate();

  const Submit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    if (
      !Sname.trim() ||
      !_id.trim() ||
      !Cource.trim() ||
      !Fees ||
      !Startdate ||
      !Enddate
    ) {
      Swal.fire({
        title: "All Fields are required!",
        icon: "info",
      });
      return;
    }
    axios
      .post("http://localhost:4000/api/students", {
        Sname,
        _id,
        Cource,
        Fees,
        Startdate,
        Enddate,
      })
      .then((result) => {
        console.log(result);
        Swal.fire({
          title: "Student Added successfully!",
          icon: "success",
        });
        navigate("/");
      })
      .catch((err) => {
        Swal.fire({
          title: "Sid Already Exits",
          icon: "warning",
        });
        console.log(err);
      });
  };

  return (
    <>
      <div className="d-flex justify-content-center vh-100 bg-secondary">
        <div className="d-flex justify-content-center h-55 w-50 bg-white rounded p-3 m-3 border border-danger rounded">
          <form
            className="d-flex flex-column align-items-center justify-content-center"
            onSubmit={Submit}
          >
            <div className="card-header bg-dark text-white">
              <h2> Fill Student Information </h2>
            </div>
            <div className="form-group col-md-6">
              <label>Name</label>
              <input
                type="text"
                className={`form-control ${
                  submitted && !Sname.trim() ? "is-invalid" : ""
                }`}
                id="inputAddress"
                placeholder="enter name"
                onChange={(e) => setName(e.target.value)}
              />
              {submitted && !Sname.trim() && (
                <div className="invalid-feedback">Please enter a name.</div>
              )}
            </div>

            <div className="form-group col-md-6">
              <label>Sid</label>
              <input
                type="text"
                className={`form-control ${
                  submitted && !_id.trim() ? "is-invalid" : ""
                }`}
                id="inputAddress"
                placeholder="enter Sid"
                onChange={(e) => setSid(e.target.value)}
              />
              {submitted && !_id.trim() && (
                <div className="invalid-feedback">Please enter a Sid.</div>
              )}
            </div>

            <div className="form-group col-md-6">
              <label>Cource</label>
              <input
                type="text"
                className={`form-control ${
                  submitted && !Cource.trim() ? "is-invalid" : ""
                }`}
                id="inputAddress"
                placeholder="enter cource name"
                onChange={(e) => setCource(e.target.value)}
              />
              {submitted && !Cource.trim() && (
                <div className="invalid-feedback">
                  Please enter a cource name.
                </div>
              )}
            </div>

            <div className="form-group col-md-6">
              <label>Fees</label>
              <input
                type="number"
                className={`form-control ${
                  submitted && !Fees ? "is-invalid" : ""
                }`}
                id="inputAddress"
                placeholder="enter fees"
                onChange={(e) => setFees(e.target.value)}
              />
              {submitted && !Fees && (
                <div className="invalid-feedback">Please enter fees.</div>
              )}
            </div>

            <div className="form-group col-md-6">
              <label>StartDate</label>
              <input
                type="date"
                className={`form-control ${
                  submitted && !Startdate ? "is-invalid" : ""
                }`}
                id="inputAddress"
                placeholder="enter StartDate"
                onChange={(e) => setSdate(e.target.value)}
              />
              {submitted && !Startdate && (
                <div className="invalid-feedback">
                  Please enter a start date.
                </div>
              )}
            </div>

            <div className="form-group col-md-6">
              <label>Enddate</label>
              <input
                type="date"
                className={`form-control ${
                  submitted && !Enddate ? "is-invalid" : ""
                }`}
                id="inputAddress"
                placeholder="enter EndDate"
                onChange={(e) => setEdate(e.target.value)}
              />
              {submitted && !Enddate && (
                <div className="invalid-feedback">
                  Please enter an end date.
                </div>
              )}
            </div>

            <button type="submit" className="btn btn-outline-primary m-3">
              Submit
            </button>

            <Link to="/users" className="btn btn-success">
              {" "}
              Student List
            </Link>
          </form>
        </div>
      </div>
    </>
  );
}

export default CreateUser;
