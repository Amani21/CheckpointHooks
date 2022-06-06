import React, { useState } from 'react'
import { Button, Modal } from 'react-bootstrap';


function MovieAdd({movies,setMovies}) {

    const [show, setShow] = useState(false);

    const [newmovie,setNewmovie] = useState({
      name :" ",
      posterurl: " ",
      description: " ",
      rating:0
  });

  const handleAdd=()=> setMovies([...movies,newmovie]);
  
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);


  
  
    return (
      <div style={{display :'flex', flexWrap:"wrap",  justifyContent:'center', alignItems:'center'}}>
        
        <Button variant="dark" onClick={handleShow}>
          +
        </Button>
  
        <Modal show={show} onHide={handleClose}>
          <Modal.Header closeButton>
            <Modal.Title style={{color:"black"}}> Add Movie </Modal.Title>
          </Modal.Header>
          <Modal.Body style={{color :  "black"}}>
          <label> Name : <br/>
            <input onChange={(e)=>  
        setNewmovie ({...newmovie, name: e.target.value})
            }/> </label>


             <label> Image: <br/>
            <input  onChange={(e)=> 
        setNewmovie({...newmovie, posterurl: e.target.value})
        } />  </label>
          
            <label> Description: <br/>
            <input   onChange={(e)=>
        setNewmovie({...newmovie, description: e.target.value})}
        /></label> 
            
           
           
            
            <label> Rating:<br/>
            <input onChange={(e)=>  
        setNewmovie({...newmovie, rating: e.target.value})
        } /> </label>
          </Modal.Body>

          <Modal.Footer>
            <Button variant="secondary" onClick={handleClose}> Close</Button>
            <Button variant="primary" onClick={()=> {handleAdd(); handleClose();
            }}>
              Add Movie 
            </Button>
          </Modal.Footer>
        </Modal>
      </div>
    );
  
}

export default MovieAdd
