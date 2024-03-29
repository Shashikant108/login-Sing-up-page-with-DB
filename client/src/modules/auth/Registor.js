import React from 'react'
import {useState} from 'react';
import './registor.css';


export default function Registor() {
  const [user ,setusers]=useState({
      email:'',
      phone:'',
      dob:'',
      gender:'',
      pass:'',
      profile: ''
  });

  const setdata = (e)=>{
      console.log(e.target.value);
      const {name,value} = e.target;
      setusers((preval)=>{
        return{
          ...preval,
          [name]:value
        }
      })
    }


const mysubmit = async ()=>{
    console.log(user);
    const {phone,gender,pass,dob,email,profile} = user;
    const res = await fetch("http://localhost:7500/create", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
            phone,gender,pass,dob,email,profile
        })
    })
    const data = await res.json();
    console.log(data);
    window.location="/";
}

  return (
    <div className='res'>
      <div className='container'>
          <div className='row justify-content-md-center '>
              <div className='col-5 '>

                  <form className='border p-5 bg-dark shadow text-white mt-5 res1' >
                      <h1 className='text-center'>User Registor Page</h1>
                      <div className="mb-3">
                          <label className="form-label">Email address</label>
                          <input type="email" className="form-control" name="email" value={user.email} onChange={setdata}/>
                      </div>
                      <div className="mb-3">
                          <label className="form-label">Phone No</label>
                          <input type="text" className="form-control" name="phone" value={user.phone} onChange={setdata}/>
                      </div>
                      <div className="mb-3">
                          <label className="form-label">Dob</label>
                          <input type="date" className="form-control" name='dob' value={user.dob} onChange={setdata}/>
                      </div>
                      <div className="mb-3">
                          <label className="form-label">Gender</label><br />
                          <div className="form-check form-check-inline">
                              <input className="form-check-input" type="radio" value="male" name="gender" onChange={setdata}/>
                              <label className="form-check-label">Male</label>
                          </div>
                          <div className="form-check form-check-inline">
                              <input className="form-check-input" type="radio" value="female" name="gender" onChange={setdata}/>
                              <label className="form-check-label">Female</label>
                          </div>

                      </div>
                      <div className="mb-3">
                          <label className="form-label">Password</label>
                          <input type="text" className="form-control" name='pass' value={user.pass} onChange={setdata}/>
                      </div>

                      <div className="mb-3">
                            <label className="form-label">Profile Pic(URL)</label>
                            <input type="text" className="form-control" name='profile' value={user.profile} onChange={setdata}/>
                        </div>
                      <button type="button" className="btn btn-primary" onClick={mysubmit}>Registor Now</button>
                      {/* <Link type="submit" className="btn btn-outline-warning ms-3" to="dashboard">dashboard</Link> */}
                  </form>
              </div>
          </div>
      </div>
      </div>
  )
}