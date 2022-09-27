
import { Button } from '@material-ui/core';
import React, { Component } from 'react';
import {Link, NavLink}  from 'react-router-dom';


const Navbar =()=> {
           return (
                <nav class="navbar navbar-expand-lg navbar-dark bg-primary">
                <div class="container">
                <a class="navbar-brand" href="#">React User</a>
                    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                            <span class="navbar-toggler-icon"></span>
                    </button>
                    <div class="collapse navbar-collapse" id="navbarNav">
                        <ul class="navbar-nav">
                            <li className="nav-item">
                                <NavLink class="nav-link"  to="/">Home</NavLink>
                            </li>   

                            <li class="nav-item">
                                <NavLink className="nav-link"  to="About">About</NavLink>
                            </li>  
                            <li class="nav-item">
                                <NavLink className="nav-link "  to="Contact">Contact</NavLink>
                            </li>               
      </ul>
    </div>
    <Link className="btn btn-outline-light" to="/users/add">Add User</Link>
  </div>
</nav>
     
  );
 };


export default Navbar;