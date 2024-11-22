import React from "react";
import { useNavigate } from "react-router-dom";
import Swal from 'sweetalert2'
import '../App.css'


const LostItemCard = ({ item, onClick }) => {
  const navigate = useNavigate();

  const handleClaim = () => {
    // Show the SweetAlert confirmation
    Swal.fire({
      title: 'Confirm Clim',
      text: `Do you want to claim a the ${item.name}?`,
      icon: 'warning',
      showCancelButton: true,
      confirmButtonText: 'Yes, claim it!',
      cancelButtonText: 'Cancel',
    }).then((result) => {
      if (result.isConfirmed) {
        // Navigate to booking page if confirmed
        navigate(`/booking`, { state: { item } });

        Swal.fire({
          title: "Kindly fill in the form to finish your claim ",
          showClass: {
            popup: `
              animate__animated
              animate__fadeInUp
              animate__faster
            `
          },
          hideClass: {
            popup: `
              animate__animated
              animate__fadeOutDown
              animate__faster
            `
          }
        });

        
        
      }
    });
  };

  return (
    <div className="card" onClick={onClick} style={{ cursor: "pointer" }}>
      <img src={item.image_url} alt={item.name} />
      <h3>{item.name}</h3>
     
        <div className="detail">
          <p>Country: {item.place_lost}</p>
          <p>Description: {item.description}</p>
          <p>{item.reward}</p>
          <button onClick={handleClaim} >Claim Item</button>
          
          
          
        </div>
      
      
    </div>
    
  );
 
};

export default LostItemCard;
