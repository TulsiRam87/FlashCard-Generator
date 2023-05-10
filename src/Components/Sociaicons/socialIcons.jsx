import React from 'react';
import { faTelegram, faLinkedin} from "@fortawesome/free-brands-svg-icons";
import { NavLink } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
const SocialIcons = () => {
    return (
        <div>
        <div><h4 className='text-secondary'> Contact me </h4></div>
        <div className='fine'> 
            <NavLink  className="facebook" to="https://t.me/Tulsi_ram1998"><FontAwesomeIcon icon={faTelegram}/></NavLink>
            <NavLink className="linkdin" to="https://www.linkedin.com/in/tulsi-ram-b81a79169/"><FontAwesomeIcon icon={faLinkedin}/></NavLink>
        </div>
        </div>
    );
};

export default SocialIcons;