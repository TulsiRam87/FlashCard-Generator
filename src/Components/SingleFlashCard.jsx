
import React, { useState } from "react";
import { useNavigate } from 'react-router-dom'
// import MyFlashCard from "../Page/Myflashcard";
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
// here we passing props .. taking from My flashcard.
const SingleFlashCard = ({ FlashCard, deleteCard, index }) => {
   // This useState work when user card ready to see card modal will come....
   const [openModal, SetopenModal] = useState(false)
   let navigate = useNavigate();
   return (
      <>
         <div className="container cards my-4" >
            <div key={FlashCard.titleId} className=" text-center  mx-2 my-4 " style={{ width: "15rem" }}>
               
               {FlashCard.titleimg ? (
                  <img className="image-display" src={FlashCard.titleimg} alt={FlashCard.titleimg}/>
               ) : (
                  <img className="image-display" src="https://ik.imagekit.io/5cw5qntek/202.jpg?updatedAt=1683348555460" alt={FlashCard.titleimg} />  
               )
               }

               <div className="containers text-center">
                  <h5 className=" font-weight-bold mt-2  cardtext "> {FlashCard.titlename} </h5>
                  <p className="cardtext  font text-wrap text-break badge">{FlashCard.titledescription}</p>
                  <p className="fs-5 cardtext size">{FlashCard.Card ? FlashCard.Card.length : 0} Cards </p>
               </div>
               <div className="d-flex justify-content-around">
                  <div className=" ">
                     <Button onClick={() => { navigate("/FlashCardDetails", { state: { data: FlashCard } }) }} className=" btns  bg-danger"> Show Cards </Button>
                  </div>
                  <div>
                     <Button onClick={(() => { SetopenModal(true); })} className="btnss bg-danger"> Remove card </Button>
                  </div>
               </div>
            </div>
         </div>
        {/* Modal will appear when user want remove card or not.. */}
         <Modal  show={openModal} >
            <Modal.Header  className="background bg-danger "><h5 className="ms-5 cardtext ">Do you want to Remove the Card </h5></Modal.Header>
            <Modal.Body  className="background bg-danger"></Modal.Body>
            <Modal.Footer className="background" >
               <div className="d-flex">
                  <Button onClick={(() => { deleteCard(index); SetopenModal(false) })} className="btns mx-2 bg-danger"> Confirm </Button>
                  <Button onClick={() => { SetopenModal(false) }} className="btnss mx-2 bg-danger"> Cancel </Button>
               </div>
            </Modal.Footer>
         </Modal>
      </>
   );
};
export default SingleFlashCard;