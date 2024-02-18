import React from 'react';
import ReactDOM from 'react-dom/client';
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.js";
import Loginpage from './modules/auth/Loginpage';
import {BrowserRouter,Route,Routes} from 'react-router-dom';
import Landingpage from './modules/dashboard/Landingpage';
import Navbar from './modules/shares/Navbar';
import Register from './modules/auth/Registor';
import Detailspage from './modules/dashboard/Detailspage';
import Editpage from './modules/dashboard/Editpage';
// import App from './app'


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
    <Navbar></Navbar>
    {/* <App></App> */}
      <Routes>
        <Route path='/' element={<Loginpage/>}></Route>
        <Route path='/dashboard' element={<Landingpage/>}></Route>
        <Route path='dashboard/view/:id' element={<Detailspage/>}></Route>
        <Route path='dashboard/edit/:id' element={<Editpage/>}></Route>
        <Route path="/register" element={<Register/>}></Route> 
      </Routes>
    
    </BrowserRouter>
  </React.StrictMode>
);
