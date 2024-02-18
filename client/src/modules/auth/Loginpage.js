import React,{useState} from 'react';
import {Link} from 'react-router-dom';
import "./login.css"

function Loginpage() {
  const [user ,setusers]=useState({
    email:'',
    pass:''
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

  const mylogin = async (e) => {
    e.preventDefault();
    const { email, pass } = user;

    const mydata = await fetch("http://localhost:7500/login", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        email, pass
      })
    })
    const res = await mydata.json();
        console.log(res);
        if(res.status===201)
        {
            // alert("welcome to login");
            window.location.href="/dashboard";
        }
        else{
          console.log("nothing");
        }
        // if (res.status === 201) {
        //   localStorage.setItem("userdatatoken", res.result.token);
        //   // his("/landing");
        //   setlogin({ ...ulogin, email: "", pass: "" });
    
        // }
      }

    return (
       
        <div className='log'>
          <div className="wrapper">
          <form action="#">
            <h2>Login</h2>
            <div className="input-field">
              <input type="email"  value={user.email} onChange={setdata} name= 'email' required />
              <label>Enter your email</label>
            </div>
            <div className="input-field">
              <input type="password" value={user.pass} onChange={setdata} name='pass' required />
              <label>Enter your password</label>
            </div>
            <div className="forget">
              <label for="remember">
                <input type="checkbox" id="remember" />
                <p>Remember me</p>
              </label>
              <Link to="#">Forgot password?</Link>
            </div>
            <button type="button" onClick={mylogin}>Log In</button>
            <div className="register">
              <p>Don't have an account? <Link to="/Register">Register</Link></p>
              <Link type="submit" className="btn bg-success text-info" to="dashboard">Dashboard</Link>
            </div>
          </form>
        </div>
        </div>
    )
}

export default Loginpage