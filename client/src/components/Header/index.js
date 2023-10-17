import React from 'react';
import { Link } from 'react-router-dom';
import Auth from '../../utils/auth';
import Logo from '../../images/pay_it_logo-transformed.png'

const Header = () => {
  const logout = event => {
    event.preventDefault();
    Auth.logout();
  }
  return (
    <header className="bg-primary text-light mb-4 py-3 flex-row align-center">
      <div className="container flex-row justify-space-between-lg justify-center align-center">
        <Link to="/">
          <img src={Logo} alt="pay it logo"></img>
        </Link>
        {Auth.loggedIn() ? (
          <div>
            <Link className="text-light" to="/Profile">
              <h1 className="m-0">User</h1>
            </Link>
            <Link className="text-light" to="/Organization">
              <h1 className="m-0">Organization</h1>
            </Link>
            <div className="text-light m-0" onClick={logout} to="/Profile">
              logout
            </div>
          </div>) : (
          <div>
            <Link className="text-light" to="/login">
              <h1 className="m-0">Login</h1>
            </Link>
            <Link className="text-light" to="/Signup">
              <h1 className="m-0">Sign up</h1>
            </Link>
          </div>)}
      </div>
    </header >
  );
};

export default Header;
