import { NavLink } from "react-router-dom";
import React from 'react';
// import '../App.css'

const Navbar = () => {
    return (
        <div>

            <div className="container">
                <div className="col-md-12 ">
                    <h2 className='bg-lights text-center  text-success py-2'> Create FlashCard </h2>
                </div>

                <div className='d-flex mt-1 text-primary'>
                    <div className='colors'> <NavLink to={"/"}> Create New </NavLink> </div>
                    <div className='colors '> <NavLink to={"/myflashcards"}> MyFlashCards </NavLink> </div>  
                </div>

                <hr className='hr-style' />
                <div>
                    <label htmlFor=""></label>
                </div>

            </div>
        </div>
    );
};


export default Navbar;