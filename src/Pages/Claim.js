import React, { useState } from "react";
import NavBar from "../Components/NavBar";
import ClaimCard from "../Components/ClaimCard";
import { useLocation } from "react-router-dom";
import "../App.css";

function Claim() {

  const location = useLocation();
  const item = location.state?.item;

  const initialClaims = [
    {
      name: "Alice White",
      email: "alice@example.com",
      date: "2018-10-30",
      time: "14:00",
      comments: "Lost in room 123!",
     
      item: { name: "An Apple Ipad" },
      Description : "Has a blue cover",
      
      
    },
    {
      name: "Bob Brown",
      email: "bob@example.com",
      date: "2019-01-01",
      time: "10:00",
      comments: "Decorated with colours!!!",
      item: { name: "Yellow cup" },
      Description : "Has purple handle",
    },
    {
      name: "Charlie Davis",
      email: "charlie@example.com",
      date: "2020-08-05",
      time: "09:00",
      comments: "Lost in room 456!",
      item: { name: "Brown Jacket" },
      Description : "Has a small stain",
    },
    {
      name: "Daisy Adams",
      email: "daisy@example.com",
      date: "2022-04-10",
      time: "11:30",
      comments: "Misplaced in room 789!",
      item: { name: "Headphones"},
      Description : "Has a broken earpiece",
    },
    {
      name: "Eve Davis",
      email: "eve@example.com",
      date: "2023-11-15",
      time: "15:00",
      comments: "Has been misplaced in room 101!",
      item: { name: "MacBook Laptop" },
      Description : "Has a cracked screen",
    },
  ];

  const [claims, setClaims] = useState(initialClaims);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    date: "",
    time: "",
    comments: "",
    item: "",
    Description: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleClaim = (e) => {
    e.preventDefault();
    setClaims([...claims, { ...formData, item }]);
    alert("Successfully Claimed!!Wait for Admin's approval");
    // navigate(`/admin`, { state: {item } });
    setFormData({ name: "", email: "", date: "", time: "", comments: "" });
  };

  const handleDelete = (index) => {
    const updatedClaims = claims.filter((_, i) => i !== index);
    setClaims(updatedClaims);
  };

  return (
    <div className="booking">
      <header>
        <NavBar />
      </header>

      <div className="booking-container">
        <h1 className="text-3xl font-bold mb-4">Claim your lost item</h1>

        {item && (
          <div>
            <h2> {item.name}</h2>
            <p>Place Found: {item.place_found}</p>
            <p>Description: {item.description}</p>
          </div>
        )}

        <form onSubmit={handleClaim}>
          <input
            type="text"
            placeholder="Full Name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
          />
          <input
            className="input"
            type="text"
            placeholder="Enter email address ..."
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
          />
          <input
            type="date"
            name="date"
            value={formData.date}
            onChange={handleChange}
            required
          />
          <input
            type="time"
            name="time"
            value={formData.time}
            onChange={handleChange}
            required
          />
          <textarea
            placeholder="Enter comments"
            name="comments"
            value={formData.comments}
            onChange={handleChange}
          />
          <button type="submit">Claim Now</button>
        </form>

        <h2 className="text-2xl mt-4">Claims</h2>

        <div className="listcard">
          {claims.map((claim, index) => (
            <ClaimCard
              key={index}
              claim={claim}
              onDelete={() => handleDelete(index)}
              item={claim.item || item}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default Claim;
