import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";

function Navbar() {
  return (
    <ul className="nav justify-content-end bg-blue-950">
      <li className="nav-item">
        <a className="nav-link active text-yellow-200" href="/diario">
          Home
        </a>
      </li>
      <li className="nav-item">
        <a className="nav-link text-yellow-200" href="/login">
          Login
        </a>
      </li>
      <li className="nav-item">
        <a className="nav-link text-yellow-200" href="/signin">
          Sign
        </a>
      </li>
      <li className="nav-item">
        <a className="nav-link text-yellow-200" href="/help">
          Help
        </a>
      </li>
    </ul>
  );
}

export default Navbar;
