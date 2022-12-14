import React from 'react';
import { Link, NavLink } from 'react-router-dom';

const NavBar = () => {
  return (
    <div className="navbar bg-primary text-white">
    <div className="navbar-start">
      <div className="dropdown">
        <label tabIndex={0} className="btn btn-ghost lg:hidden">
          {/* <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg> */}
          <i class="fa-solid fa-bars-staggered"></i>
        </label>
        <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 text-primary bg-base-100 shadow rounded-box w-52">
          <li><NavLink to="/users"><i class="fa-solid fa-users"></i>List Users</NavLink></li>
          <li><NavLink to="/users/new"><i class="fa-solid fa-user-plus"></i>Create Users</NavLink></li>
        </ul>
      </div>
      <Link to="/" className="btn btn-ghost normal-case text-xl">UserAPP</Link>
    </div>
    <div className="navbar-end hidden lg:flex">
      <ul className="menu menu-horizontal p-0">
        <li><NavLink to="/users"><i class="fa-solid fa-users"></i>List Users</NavLink></li>
        <li><NavLink to="/users/new"><i class="fa-solid fa-user-plus"></i>Create Users</NavLink></li>
      </ul>
    </div>
  </div>
  );
}

export default NavBar;
