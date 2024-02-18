import React from 'react'
import { Link } from 'react-router-dom';
import './navbar.css';

function Navbar() {
    return (
        <nav className="navbar navbar-expand-lg nav1">
        <div className="container-fluid">
            <Link clLinkssName="navbar-brand" href="#">Navbar</Link>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                    <li className="nav-item">
                        <Link className="nav-link active" aria-current="page" href="#">Home</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link" href="#">Link</Link>
                    </li>
                    {/* <li className="nav-item dropdown">
                        <Link className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                            Dropdown
                        </Link>
                        <ul className="dropdown-menu">
                            <li><Link className="dropdown-item" href="#">Action</Link></li>
                            <li><Link className="dropdown-item" href="#">Another action</Link></li>
                            <li><hr className="dropdown-divider"/></li>
                            <li><Link className="dropdown-item" href="#">Something else here</Link></li>
                        </ul>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link disabled" aria-disabled="true">Disabled</Link>
                    </li> */}
                </ul>
                <form className="d-flex" role="search">
                    {/* <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/> */}
                     <div className='drop'>
                        <ul className='drop2'>
                    <li> <Link className="btn btn-outline-success" to="/" type="submit">Logout</Link></li>
                    <li className="nav-item dropdown">
                        <Link className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                            Dropdown
                        </Link>
                        <ul className="dropdown-menu">
                            <li><Link className="dropdown-item" to="/">Login</Link></li>
                            <li><hr className="dropdown-divider"/></li>
                            <li><Link className="dropdown-item" to="/Register">Register</Link></li>
                        </ul>
                    </li>
                    </ul>
                    </div>
                      
                </form>
            </div>
        </div>
    </nav>
        
    )
}

export default Navbar