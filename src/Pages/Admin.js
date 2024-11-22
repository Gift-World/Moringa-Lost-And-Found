import React, { useEffect, useState } from "react";
import LostAdminCard from "../Components/LostAdminCard";
import { BASEURL } from "../constants";
import AdminNav from "../Components/AdminNav";

const LostAdminList = () => {
  const [lostitems, setLostItems] = useState([]);
  const [selectedId, setSelectedId] = useState(null);

  useEffect(() => {
    // Fetch lost items from the server
    fetch(`${BASEURL}/lostitems`)
      .then((res) => res.json())
      .then((data) => setLostItems(data))
      .catch((error) => console.error("Error fetching data:", error));
  }, []);

  const handleCardClick = (id) => {
    setSelectedId(id);
  };

  const handleDelete = (id) => {
    // Confirmation dialog
    if (
      window.confirm("Are you sure you want to delete this item permanently?")
    ) {
      // Send DELETE request to the server
      fetch(`${BASEURL}/lostitems/${id}`, { method: "DELETE" })
        .then((res) => {
          if (res.ok) {
            // Remove the item from the local state
            setLostItems((prev) => prev.filter((item) => item.id !== id));
            alert("Item deleted successfully.");
          } else {
            throw new Error("Failed to delete item.");
          }
        })
        .catch((error) => console.error("Error deleting item:", error));
    }
  };

  return (
    <div>
      <header className="header">
        <AdminNav />
      </header>
      <main>
        <div className="listcard">
          {lostitems.map((des) => (
            <LostAdminCard
              key={des.id}
              item={des}
              isSelected={selectedId === des.id}
              onClick={() => handleCardClick(des.id)}
              onDelete={handleDelete} // Pass the delete handler
            />
          ))}
        </div>
      </main>
    </div>
  );
};

export default LostAdminList;
