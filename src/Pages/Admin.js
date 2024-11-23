import React, { useEffect, useState } from "react";
import LostAdminCard from "../Components/LostAdminCard";
import { BASEURL } from "../constants";
import AdminNav from "../Components/AdminNav";


const LostAdminList = () => {
  const [lostitems, setLostItems] = useState([]);
  const [selectedId, setSelectedId] = useState(null);
  const [formData, setFormData] = useState({
    name: "",
    description: "",
    place_lost: "",
    reward: "",
    user_id: "",
    image_url: "",
  });

  useEffect(() => {
    fetch(`${BASEURL}/lostitems`)
      .then((res) => res.json())
      .then((data) => setLostItems(data))
      .catch((error) => console.error("Error fetching data:", error));
  }, []);

  const handleCardClick = (id) => {
    setSelectedId(id);
  };

  const handleDelete = (id) => {
    if (
      window.confirm("Are you sure you want to delete this item permanently?")
    ) {
      fetch(`${BASEURL}/lostitems/${id}`, { method: "DELETE" })
        .then((res) => {
          if (res.ok) {
            setLostItems((prev) => prev.filter((item) => item.id !== id));
            alert("Item deleted successfully.");
          } else {
            throw new Error("Failed to delete item.");
          }
        })
        .catch((error) => console.error("Error deleting item:", error));
    }
  };

  const handleInputChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    fetch(`${BASEURL}/lostitems`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    })
      .then((res) => {
        if (res.ok) {
          return res.json();
        } else {
          throw new Error("Failed to create item.");
        }
      })
      .then((newItem) => {
        setLostItems((prev) => [...prev, newItem]);
        setFormData({ name: "", description: "", place_lost: "", reward: "", user_id: "",image_url:"", });
        alert("Item added successfully.");
      })
      .catch((error) => console.error("Error creating item:", error));
  };

  return (
    <div>
      <header className="header">
        <AdminNav />
      </header>
      <main>
        <div>
          <form onSubmit={handleFormSubmit}>
            <input
              type="text"
              name="name"
              placeholder="Item Name"
              value={formData.name}
              onChange={handleInputChange}
              required
            />
            <input
              type="text"
              name="description"
              placeholder="Description"
              value={formData.description}
              onChange={handleInputChange}
              required
            />
            <input
              type="text"
              name="place_lost"
              placeholder="Place Lost"
              value={formData.place_lost}
              onChange={handleInputChange}
              required
            />
            <input
              type="number"
              name="reward"
              placeholder="Reward (optional)"
              value={formData.reward}
              onChange={handleInputChange}
            />
            <input
              type="text"
              name="user_id"
              placeholder="User ID"
              value={formData.user_id}
              onChange={handleInputChange}
              required
            />
             <input
              type="text"
              name="image_url"
              placeholder="image url"
              value={formData.image_url}
              onChange={handleInputChange}
              required
            />
            <button type="submit">Add Lost Item</button>
          </form>
        </div>
        <div className="listcard">
          {lostitems.map((des) => (
            <LostAdminCard
              key={des.id}
              item={des}
              isSelected={selectedId === des.id}
              onClick={() => handleCardClick(des.id)}
              onDelete={handleDelete}
            />
          ))}
        </div>
      </main>
    </div>
  );
};

export default LostAdminList;