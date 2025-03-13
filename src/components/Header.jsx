import React from "react";
import { FaBook, FaStar, FaBars, FaEllipsisV } from "react-icons/fa";

function Header() {
  return (
    <nav className="navbar navbar-expand-lg bg-body-tertiary px-3">
      <div className="container-fluid">
        <div className="d-flex align-items-center">
          <FaBook className="me-2" size={18} />
          <span className="fw-bold text-black">Search</span>
          <span className="text-secondary ms-1">/AAPL</span>
          <span className="fw-bold text-black ms-1"> Apple</span>
        </div>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse justify-content-end" id="navbarSupportedContent">
          <div className="d-flex gap-3">
            <FaStar size={18} className="text-secondary" />
            <FaBars style={{color:"blue"}} size={18} className="text-secondary" />
            <FaEllipsisV size={18} className="text-secondary" />
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Header;
