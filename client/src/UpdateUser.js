import { useParams } from "react-router-dom";

import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";
import Swal from "sweetalert2";

const UpdateUser = () => {
  const { id } = useParams();

  const [Sname, setName] = useState();
  const [_id, setSid] = useState();
  const [Cource, setCource] = useState();
  const [Fees, setFees] = useState();
  const [Startdate, setSdate] = useState();
  const [Enddate, setEdate] = useState();
  const [submitted, setSubmitted] = useState(false);

  useEffect(() => {
    axios
      .get("http://localhost:4000/api/students/getuser/" + id)
      .then((result) => {
        setName(result.data.Sname);
        setSid(result.data._id);
        setCource(result.data.Cource);
        setFees(result.data.Fees);
        setSdate(result.data.Startdate);
        setEdate(result.data.Enddate);
      })
      .catch((err) => console.log(err));
  }, []);

  const Update = (e) => {
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
      .put("http://localhost:4000/api/students/updateuser/" + id, {
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
          title: "Student Upadated successfully!",
          // text: "You clicked the button!",
          icon: "success",
        });
      })
      .catch((err) => console.log(err));
  };

  return (
    <>
      {/* <Header/> */}

      <div className="d-flex justify-content-center vh-100 bg-secondary  ">
        <div className=" d-flex justify-content-center h-55  w-50 bg-white rounded p-3 m-3 border border-danger rounded">
          <form
            className=" d-flex flex-column align-items-center justify-content-center  "
            onSubmit={Update}
          >
            <h2>Update Information</h2>

            {/* <div class="form-group col-md-6">
              <label>Name</label>
              <input
                type="text"
                class="form-control"
                id="inputAddress"
                placeholder="enter  name"
                value={Sname}
                onChange={(e) => setName(e.target.value)}
              />
            </div> */}

            <div className="form-group col-md-6">
              <label>Name</label>
              <input
                type="text"
                className={`form-control ${
                  submitted && !Sname.trim() ? "is-invalid" : ""
                }`}
                id="inputAddress"
                value={Sname}
                placeholder="enter name"
                onChange={(e) => setName(e.target.value)}
              />
              {submitted && !Sname.trim() && (
                <div className="invalid-feedback">Please enter a name.</div>
              )}
            </div>
            {/* <div class="form-group col-md-6">
              <label>Sid</label>
              <input
                type="text"
                class="form-control"
                id="inputAddress"
                placeholder="enter Sid"
                value={_id}
                onChange={(e) => setSid(e.target.value)}
              />
            </div> */}
            <div className="form-group col-md-6">
              <label>Cource</label>
              <input
                type="text"
                className={`form-control ${
                  submitted && !Cource.trim() ? "is-invalid" : ""
                }`}
                id="inputAddress"
                value={Cource}
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
                value={Fees}
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
                value={Startdate}
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
                value={Enddate}
                placeholder="enter EndDate"
                onChange={(e) => setEdate(e.target.value)}
              />
              {submitted && !Enddate && (
                <div className="invalid-feedback">
                  Please enter an end date.
                </div>
              )}
            </div>

            <button type="submit" className="btn btn-outline-secondary m-3">
              Update
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
};

export default UpdateUser;
