import React from "react";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";

function Landingpage() {
  const { id } = useParams();
  const [mydata, setdatafunc] = useState([]);
  console.log(id);

  useEffect(() => {
    myalldataapi();

    // fetch('http://localhost:7500/getalldata')
    // .then(res=>res.json())
    // .then((data)=>{
    //     console.log(data);
    //     setdatafunc(data);
    // axios.get('http://localhost:7500/getalldata')
    // .then((d)=>{
    //     setdatafunc(d.data);
    //     console.log(d.data);
  }, []);
       
  // get api
  const myalldataapi = () => {
    axios.get("http://localhost:7500/getalldata").then((d) => {
      setdatafunc(d.data);
      console.log(d.data);
    });
  };
    //  Dlete api
  const deleterecor = async (id) => {
    await axios
      .delete(`http://localhost:7500/deleterecord/${id}`)
      .then((res) => {
        console.log(res.data);
        myalldataapi();
      });
  };

  return (
    <div>
      <Link type="submit" className="btn  text-info" to="/">
        Back
      </Link>
      <div className="container-fluid mt-3">
      <div className="row">
          <div className="col">
            <table className="table table-bordered border-primary">
              <thead>
                <tr>
                  <th scope="col">s.no</th>
                  <th scope="col">id</th>
                  <th scope="col">Email</th>
                  <th scope="col">Phone</th>
                  <th scope="col">DOB</th>
                  <th scope="col">Gender</th>
                  <th scope="col">Pass</th>
                 <th scope="col">Profile Pic</th>
                  <th scope="col">actions</th>
                </tr>
              </thead>
              <tbody>
                {mydata.map((d, s) => {
                  return (
                    <tr key={s}>
                      <th scope="row">{++s}</th>
                      <td>{d._id}</td>
                      <td>{d.email}</td>
                      <td>{d.phone}</td>
                      <td>{d.dob}</td>
                      <td>{d.gender}</td>
                      <td>{d.pass}</td>
                      <td><img src={d.profile} width="50" alt="picsjdhgf"/></td>
                     
                      <td className="text-end">
                        <button
                          className="btn btn-danger btn-sm"
                          onClick={() => deleterecor(d._id)}
                        >
                          Del
                        </button>
                        <Link className='btn btn-info btn-sm ms-2' to={`edit/${d._id}`}>Edit</Link>
                                    <Link className='btn btn-warning btn-sm ms-2' to={`view/${d._id}`}>View</Link>
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        </div>

      </div>
    </div>
  );
}

export default Landingpage;
