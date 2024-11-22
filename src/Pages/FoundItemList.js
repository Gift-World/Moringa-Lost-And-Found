import React, { useEffect, useState } from "react";
import FoundItemCard from "../Components/FoundItemCard";
import { BASEURL } from "../constants";
import AdminNav from "../Components/AdminNav";


const FoundItemList = () => {
  const [lostitems, setLostItems] = useState([]);
  const [selectedId, setSelectedId] = useState(null);

  useEffect(() => {
    fetch(`${BASEURL}/founditems`)
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
        <AdminNav />
      </header>
        <main>
    <div className="listcard">
      {lostitems.map((des) => (
        <FoundItemCard
          key={des.id}
          item={des}
          isSelected={selectedId === des.id}
          onClick={() => handleCardClick(des.id)}
        />
      ))}

    </div>
    </main>
    </div>
  );
};

export default FoundItemList;
