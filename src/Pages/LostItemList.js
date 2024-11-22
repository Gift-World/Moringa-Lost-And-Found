import React, { useEffect, useState } from "react";
import LostItemCard from "../Components/LostItemCard";
import { BASEURL } from "../constants";
import Form from "../Components/Form";
import NavBar from "../Components/NavBar";

const LostItemList = () => {
  const [lostitems, setLostItems] = useState([]);
  const [selectedId, setSelectedId] = useState(null);

  useEffect(() => {
    fetch(`${BASEURL}/lostitems`)
      .then((res) => res.json())
      .then((data) => setLostItems(data))
      .catch((error) => console.error("Error fetching data:", error));
  }, []);

  const handleCardClick = (id) => {
    setSelectedId(id);
  };

  return (
    <div>
       <header className="header">
        <NavBar />
      </header>
      <main>
    <div className="listcard">
      {lostitems.map((des) => (
        <LostItemCard
          key={des.id}
          item={des}
          isSelected={selectedId === des.id}
          onClick={() => handleCardClick(des.id)}
        />
      ))}
      <Form />
    </div>
    </main>
    </div>
  );
};

export default LostItemList;
