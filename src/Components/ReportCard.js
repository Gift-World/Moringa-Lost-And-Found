import "../App.css";

const ReportCard = ({ item, onClick}) => {
  

 

  return (
    <div className="card" onClick={onClick} style={{ cursor: "pointer" }}>
      <img src={item.image_url} alt={item.name} />
      <h3>
        {item.name}{" "}
        
      </h3>

      <div className="detail">
        <p>Place Found: {item.place_lost}</p>
        <p>Description: {item.description}</p>
        
        
      </div>
    </div>
  );
};

export default ReportCard;
