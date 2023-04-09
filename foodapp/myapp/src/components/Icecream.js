import React,{useState} from "react";
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
const Icecream = ({ ices }) => {
    const [quantity,setQuantity]=useState(1)
    const [shape,setShape]=useState('cone')
    const [show,setShow]=useState(false)
    const handleClose=()=>setShow(false)
    const handleShow=()=>setShow(true)
  return (
      <>
      <div>
      <div className="card" style={{width: '18rem'}}>

        <img src={ices.img} className="card-img-top" alt="..." />
        <div className="card-body">
            
          <h5 className="card-title" onClick={handleShow}>{ices.name}</h5>
        </div>

         <div className="flex-container">
         {/* importing ices.shape objects from icecream.js */}
         <div className="w-100">
            <p>shapes</p>
            <select className="form-control" value={shape} onChange={(e)=>{setShape(e.target.value)}}>
              {ices.shape.map(shapes=>{
                  return <option value={shapes}>{shapes}</option>
              })}
            </select>
          </div>
         
          <div className="w-100">
            <p>quantity</p>
            <select className="form-control" value={quantity} onChange={(e)=>{setQuantity(e.target.value)}}>
                {[...Array(10).keys()].map((x,i)=>{
                return <option value={i+1}>{i+1}</option>
                
             })}
            </select>

          </div>
          <div className="flex-container m-1 ">
            <div >
                <p>price : {ices.price[0][shape]*quantity}</p>
            </div>
            <div className="m-1 w-100">
            <button type="button" class="btn btn-primary">Add to cart</button>            </div>

          </div>

         </div>
          
        </div>
        <div
      className="modal show"
      style={{ display: 'block', position: 'initial' }}
    >
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>{ices.name}</Modal.Title>
        </Modal.Header>

        <Modal.Body>
          <img src={ices.img} style={{height:'300px',width:'300px'}}/>
          <p>{ices.desc}</p>
        </Modal.Body>

        <Modal.Footer>
          <button className="btn" onClick={handleClose}>close</button>
        </Modal.Footer>
      </Modal>
    </div>



      </div>
      {/* <h1>{ices.name}</h1>
    <img src={ices.img} alt/> */}
    </>
  );
};

export default Icecream;
