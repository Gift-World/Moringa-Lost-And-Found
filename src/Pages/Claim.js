import React, { useState } from "react";
import NavBar from "../Components/NavBar";
import BookingCard from "../Components/ClaimCard";
import { useLocation } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import "../App.css";

function Claim() {
  const navigate = useNavigate();

  const location = useLocation();
  const item = location.state?.item;

  const initialClaims = [
    {
      name: "Alice Johnson",
      email: "alice@example.com",
      date: "2018-10-30",
      time: "14:00",
      comments: "Looking forward to this trip!",
      item: { name: "Santorini", country: "Greece" },
    },
    {
      name: "Bob Smith",
      email: "bob@example.com",
      date: "2019-01-01",
      time: "10:00",
      comments: "Excited!!!",
      item: { name: "Victoria Falls", country: "Zimbabwe" },
    },
    {
      name: "Charlie Brown",
      email: "charlie@example.com",
      date: "2020-08-05",
      time: "09:00",
      comments: "Special requests for vegetarian meals.",
      item: { name: "Nairobi National Park", country: "Kenya" },
    },
    {
      name: "Daisy Adams",
      email: "daisy@example.com",
      date: "2022-04-10",
      time: "11:30",
      comments: "Looking foward to the trip",
      item: { name: "Eiffel Tower", country: "France" },
    },
    {
      name: "Eve Davis",
      email: "eve@example.com",
      date: "2023-11-15",
      time: "15:00",
      comments: "Need a guide.",
      item: { name: "Lamu Island", country: "Kenya" },
    },
  ];

  const [claims, setClaims] = useState(initialClaims);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    date: "",
    time: "",
    comments: "",
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
            <h2>Destination: {item.name}</h2>
            <p>Country: {item.place_lost}</p>
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
            placeholder="Additional Notes"
            name="comments"
            value={formData.comments}
            onChange={handleChange}
          />
          <button type="submit">Claim Now</button>
        </form>

        <h2 className="text-2xl mt-4">Claims</h2>

        <div className="listcard">
          {claims.map((claim, index) => (
            <BookingCard
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
