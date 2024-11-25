import React, { useState } from "react";
import "../App.css";

const LostAdminCard = ({ item, onClick, onDelete }) => {
  const [isApproved, setIsApproved] = useState(false);
  const [isRejected, setIsRejected] = useState(false);

  const handleApprove = () => {
    setIsApproved(true);
    setIsRejected(false);
    alert(" successfully approved")
  };

  const handleReject = () => {
    setIsRejected(true);
    setIsApproved(false);
  };

  const handleDelete = () => {
    if (window.confirm("Are you sure you want to delete this item permanently?")) {
      onDelete(item.id); // Call the parent-provided delete function
    }
  };

  return (
    <div className="card" onClick={onClick} style={{ cursor: "pointer" }}>
      <img src={item.image_url} alt={item.name} />
      <h3>
        {item.name}{" "}
        {isApproved && <span style={{ color: "green" }}>✅</span>}
        {isRejected && <span style={{ color: "red" }}>❌</span>}
      </h3>

      <div className="detail">
        <p>Country: {item.place_lost}</p>
        <p>Description: {item.description}</p>
        <p>{item.reward}</p>
        <button onClick={handleApprove}>Approve</button>
        {/* <button onClick={handleReject}>Reject</button> */}
        <button onClick={handleDelete}>Delete</button>
      </div>
    </div>
  );
};

export default LostAdminCard;
