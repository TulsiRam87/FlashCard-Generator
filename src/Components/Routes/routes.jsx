import React from "react";
import { Route,Routes } from "react-router-dom";
import Homepage from "../../Page/Homepage";
import MyFlashCard from "../../Page/Myflashcard";
import MyflashcardDetails from "../../Page/FlashCardDetails";

const Router = () => {
    return (
        <div>
            <Routes>
                <Route path="/" element={<Homepage></Homepage>}></Route>
                <Route path="/myflashcards/" element={<MyFlashCard></MyFlashCard>}></Route>
                <Route path="/flashCardDetails/" element={<MyflashcardDetails></MyflashcardDetails>}></Route>
            </Routes>
        </div>
    );
};

export default Router;