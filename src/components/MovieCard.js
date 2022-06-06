import React from 'react'
import './MovieCard.css'
import {Card } from "react-bootstrap"
import ReactStars from "react-rating-stars-component";
 

function MovieCard({movie}) {
   
       
      
  return (

  
<><Card  style={{ width: '18rem', margin: "20px" }}>
  <Card.Img variant="top" src={movie.posterurl} />
  <Card.Body>
    <Card.Title>{movie.name}</Card.Title>
    <Card.Text>
      {movie.description}
    </Card.Text>
  </Card.Body>
  <ReactStars
    count={5}
     value={movie.rating}
    size={24}
    activeColor="#ffd700"
    edit={false}

  />
</Card>


</>

    
  )
}

export default MovieCard