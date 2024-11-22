import React from "react";
import '../App.css'


function ClaimCard({claim,onDelete,item}) {
  return (
 
     
    <div className="detail">
      <p><strong>Name: </strong>{claim.name} </p>
      <p><strong>Date: </strong>{claim.date}</p>
      <p><strong>Time: </strong>{claim.time}</p>
      <p> <strong>Comment:</strong> {claim.comments}</p>
      {item ? (
        <>
      <p> <strong>Place Lost: </strong>{item.place_lost}</p>

      <p><strong>Item : </strong>{item.name}</p>
      <p><strong>Description:</strong> {item.description}</p>
    
      
      </>
      ):(
        <p> item selected</p>
      )
}
        
      {onDelete && <button onClick={onDelete}>Delete</button>}
      
     
      
    </div>
   
  )
}

export default ClaimCard