import React, { useEffect, useState } from 'react'
import {Link, useParams} from 'react-router-dom';
import './details.css';


export default function Detailspage() {
    const {id}=useParams();

    const [singledata, setdatafunc]=useState({})

        useEffect(()=>{
            singlerecord();
    },[])
    
    
    
    const singlerecord = ()=>
    {
        fetch(`http://localhost:7500/single/${id}`)
            .then(res => res.json())
            .then((data) => {
                console.log(data);
                setdatafunc(data);
    
            });
    }
    

  return (
    <div className='container mt-3'>
        
        <div className='row border shadow bg-light p-3'>
            <div className='col-9  text-center'>
                <h3>View details page </h3>
            </div>
            <div className='col-3 text-end'>
                <Link to="/dashboard" className='btn btn-sm btn-success'>Back</Link>
            </div>
            <div className='col-md-6 p-3 border text-center picture'> 
                <h1>Profile Pictures</h1>
                <img src={singledata.profile} width="400" height={430} alt="NA"/>
            </div>
            <div className='col-md-6 p-3 border details'>
            <div className='details1'>
            <h4> <b>Mongodb Id: </b>{singledata._id}</h4> 
                  <h4><b>User Email id:</b>  {singledata.email}</h4> 
                  <h4> <b>User Phone No:</b> {singledata.phone}</h4> 
                  <h4><b>User Gender:</b> {singledata.gender}</h4>  
                  <h4><b>User DOB:</b> {singledata.dob}</h4>
                  <h4><b>User password:</b> {singledata.pass}</h4> 
                  </div>   
            </div>
        </div>
    </div>
    
  )
}
