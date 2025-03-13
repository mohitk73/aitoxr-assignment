import React, { useState } from "react";
import { Modal, Button, Form } from "react-bootstrap";
import { FaSearch } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

function SortPage() {
  const navigate = useNavigate();
  const [showSortModal, setShowSortModal] = useState(false);
  const [showOrderModal, setShowOrderModal] = useState(false);
  const [selectedSort, setSelectedSort] = useState("");

  const handleSortClick = () => setShowSortModal(true);
  const handleSortClose = () => setShowSortModal(false);

  const handleOrderClick = () => setShowOrderModal(true);
  const handleOrderClose = () => setShowOrderModal(false);

  return (
    <div className="container mt-3">
      <button className="btn btn-light border mb-3" onClick={() => navigate("/")}>
        ← Back
      </button>
      <div className="d-flex justify-content-between align-items-center">
        <h5 className="text-black fw-bold">Filter</h5>
        <span className="text-secondary">Nov 1, 2023</span>
      </div>

      <div className="mt-2">
        <span className="text-primary me-3" style={{ cursor: "pointer" }} onClick={handleSortClick}>
          + Add Sort
        </span>
        <span className="text-primary" style={{ cursor: "pointer" }}>
          + Add Filter
        </span>
      </div>

      <Modal show={showSortModal} onHide={handleSortClose} centered>
        <Modal.Header closeButton>
          <Modal.Title>Sort Options</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form.Group className="d-flex align-items-center border p-2 rounded">
            <FaSearch className="me-2 text-secondary" />
            <Form.Control type="text" placeholder="Search" />
          </Form.Group>

          <div className="mt-3">
            {["Industry", "Sector", "Book Value", "Debt"].map((option) => (
              <div
                key={option}
                className={`p-2 ${selectedSort === option ? "bg-light fw-bold" : ""}`}
                style={{ cursor: "pointer" }}
                onClick={() => {
                  setSelectedSort(option);
                  if (option === "Debt") handleOrderClick();
                }}
              >
                {option}
              </div>
            ))}
          </div>
        </Modal.Body>
      </Modal>

      {/* Sorting Order Popup */}
      <Modal show={showOrderModal} onHide={handleOrderClose} centered>
        <Modal.Header closeButton>
          <Modal.Title>Sort Order</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form.Group>
            <Form.Label>Order</Form.Label>
            <Form.Select>
              <option>Ascending</option>
              <option>Descending</option>
            </Form.Select>
          </Form.Group>

          <Form.Group className="mt-3">
            <Form.Label>Debt</Form.Label>
            <Form.Select>
              <option>Low to High</option>
              <option>High to Low</option>
            </Form.Select>
          </Form.Group>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="danger">Delete Filter</Button>
          <Button variant="primary">Add Sort</Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
}

export default SortPage;
