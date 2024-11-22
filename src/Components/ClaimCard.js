import React from "react";
import '../App.css'


function ClaimCard({claim,onDelete,item}) {
  return (
 
     
    <div className="detail">
      <p>Name: {claim.name} </p>
      <p>Date: {claim.date}</p>
      <p>Time: {claim.time}</p>
      <p>Comment: {claim.comments}</p>
      {item ? (
        <>
      <p>Place Lost: {item.place_lost}</p>

      <p>: {item.name}</p>
      <p>: {item.description}</p>
    
      
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