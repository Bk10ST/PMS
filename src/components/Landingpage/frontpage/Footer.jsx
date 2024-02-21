import React from "react"
import { Link } from "react-router-dom";

import '../../Landingpage/frontpage/Css-Desk/Footer.css';

export const Footer = () => {
  return (
    <footer className="page-footer font-small">
      <div className="container-fluid text-center text-md-left pt-3">
        <div className="row">
          <div className="col-md-6  mt-md-0 mt-3 text-white">
            <Link className="navbar-brand text-white" to="/">
              OrganizeMe
            </Link>
            <p className="text-white">We are here for your wealthy future ...</p>
          </div>

          <hr className="clearfix w-100 d-md-none pb-0" />

          <div className="col-md-3 mb-md-0 mb-3 text-white">
            <b className="text-white">Organize Me</b>
            <ul className="list-unstyled text-white pt-2">
              <li><a href="/blog" className="text-white">Blog</a></li>
              <li><a href="#!" className="text-white">About Us</a></li>
            </ul>
          </div>

          <div className="col-md-3 text-white mb-md-0 mb-3">
            <h5>Help</h5>
            <ul className="list-unstyled">
              <li><a href="/login" className="text-white">Login</a></li>
              <li><a href="/sign" className="text-white">SignUp</a></li>
            </ul>
          </div>
        </div>
      </div>

      <div className="footer-copyright text-white text-center py-3">© 2023 Copyright :
        <b>
          <a href="https://mdbootstrap.com/" className="mx-2 text-white">Organize Me</a>
        </b>
      </div>

    </footer>
  )
}
