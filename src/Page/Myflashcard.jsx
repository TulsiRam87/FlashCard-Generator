// this is MyFlashCard page all the created FlashCard will show here..
import React from 'react'
import { useSelector } from 'react-redux'
import SingleFlashCard from '../Components/SingleFlashCard'
import { useDispatch } from 'react-redux'
import { SendFlashCardtostore } from '../Redux/mySlice'
import { useNavigate } from 'react-router'
import Sharemodal from '../Components/Sociaicons/sharemodal'
const MyFlashCard = () => {
  // here use get the data from Flashcard which is global storage
  let FlashCard = useSelector((state) => state.FlashCard)
  const dispatch = useDispatch()
  const navigate = useNavigate()
  //  here we create a deelte function to delete the card on which user selected it got and id of index..
  const deleteCard = (id) => {
    let filterData = FlashCard.Cards.filter((card, index) => {
      if (index !== id) return card
    })
    // after deleting from Ui we have remove from Store then..
    // here we define the action type=Update after we dispatch an action which filter/updated value that will add in original store data
    filterData.type = 'update'
    dispatch(SendFlashCardtostore(filterData))
    // console.log("newData", FlashCard)
  }

  return (
    <>
      {FlashCard.Cards.length > 0 ? (
        <div className="container pt-3">
          <div className="col-md-12">
            <div className="background-color display-flex">
              {/* now get the data from local storage here.... */}
              {FlashCard.Cards.map((FlashCard, index) => {
                return (
                  <SingleFlashCard
                    deleteCard={deleteCard}
                    key={index}
                    index={index}
                    FlashCard={FlashCard}
                  ></SingleFlashCard>
                )
              })}
            </div>
          </div>
        </div>
      ) : (
        <div className="text-center">
          <h1> Nothing to Show Go to{' '}
            <span  type="button" style={{ textDecoration: 'underline' }} className="nothing-show-text " onClick={() => { navigate('/') }}> Generate New FlashCard  </span>
          </h1>
        </div>
      )}
      <div className="d-flex justify-content-end ">
        <Sharemodal></Sharemodal>
      </div>
    </>
  )
}

export default MyFlashCard
