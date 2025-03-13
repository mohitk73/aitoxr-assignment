import React from "react";
import { Link } from 'react-router-dom'; 
import { FaBars, FaPlus, FaLock, FaSearch, FaEllipsisV } from "react-icons/fa";
import { Form } from "react-bootstrap";


function DataTable() {

  return (
    <div className="container mt-3">
      <div className="d-flex justify-content-between align-items-center">
      <Link to="/sort" className="text-black fw-bold" style={{ textDecoration: "none", cursor: "pointer" }}>
          <h5>Filter</h5>
        </Link>
        <span className="text-secondary">Nov 2025</span>
      </div>

      <div className="d-flex justify-content-between align-items-center mt-3">
        <div className="d-flex align-items-center gap-2">
          <FaBars size={18} />
          <span className="fw-bold text-black">All</span>
          <FaPlus className="text-primary" size={18} />
        </div>

        <div className="d-flex align-items-center gap-3">
          <Form.Check type="switch" id="custom-switch" />
          <FaLock className="text-secondary" />
          <span className="text-secondary">Locked</span>
          <span className="text-secondary">Filter</span> |
          <span className="text-secondary">Sort</span> |
          <span className="text-secondary">Properties</span>
          <FaSearch className="text-secondary" />
          <FaEllipsisV className="text-secondary" />
        </div>
      </div>

      <hr className="my-3" />
      
      <div className="mt-3">
        <table className="table table-bordered">
          <thead className="table-light">
          <tr>
              <th>Ticker</th>
              <th>Industry</th>
              <th>Sector</th>
              <th>Book Value Per Share</th>
              <th>Market Cap</th>
              <th>Debt</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>AAPL</td>
              <td>25% 200</td>
              <td>20</td>
              <td>200</td>
              <td>10%</td>
              <td>80%</td>
            </tr>
            <tr>
              <td>ROKU</td>
              <td>25% 200</td>
              <td>20</td>
              <td>200</td>
              <td>10%</td>
              <td>80%</td>
            </tr>
            <tr>
              <td>U</td>
              <td>25% 200</td>
              <td>20</td>
              <td>200</td>
              <td>10%</td>
              <td>80%</td>
            </tr>
            <tr>
              <td>AAPL</td>
              <td>25% 200</td>
              <td>30</td>
              <td>200</td>
              <td>10%</td>
              <td>80%</td>
            </tr>
            <tr>
              <td>SHOP</td>
              <td>25% 200</td>
              <td>30</td>
              <td>200</td>
              <td>10%</td>
              <td>80%</td>
            </tr>
            <tr>
              <td>ROKU</td>
              <td>25% 200</td>
              <td>30</td>
              <td>200</td>
              <td>10%</td>
              <td>80%</td>
            </tr>
            <tr>
              <td>AAPL</td>
              <td>25% 200</td>
              <td>12</td>
              <td>200</td>
              <td>10%</td>
              <td>80%</td>
            </tr>
            <tr>
              <td>INMD</td>
              <td>25% 200</td>
              <td>12</td>
              <td>200</td>
              <td>10%</td>
              <td>80%</td>
            </tr>
            <tr>
              <td>U</td>
              <td>25% 200</td>
              <td>12</td>
              <td>200</td>
              <td>10%</td>
              <td>80%</td>
            </tr>
            <tr>
              <td>ROKU</td>
              <td>25% 200</td>
              <td>122</td>
              <td>200</td>
              <td>10%</td>
              <td>80%</td>
            </tr>
            <tr>
              <td>ASO</td>
              <td>25% 200</td>
              <td>122</td>
              <td>200</td>
              <td>10%</td>
              <td>80%</td>
            </tr>
            <tr>
              <td>INMD</td>
              <td>25% 200</td>
              <td>300</td>
              <td>200</td>
              <td>10%</td>
              <td>80%</td>
            </tr>
            <tr>
              <td>SHOP</td>
              <td>25% 200</td>
              <td>300</td>
              <td>200</td>
              <td>10%</td>
              <td>80%</td>
            </tr>
            <tr>
              <td>ASO</td>
              <td>25% 200</td>
              <td>45</td>
              <td>200</td>
              <td>10%</td>
              <td>80%</td>
            </tr>
            <tr>
              <td>INMD</td>
              <td>25% 200</td>
              <td>45</td>
              <td>200</td>
              <td>10%</td>
              <td>80%</td>
            </tr>
            
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default DataTable;
