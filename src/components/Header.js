import React from 'react';

//stylesheets
import '../assets/stylesheets/Header.css';

//components
import { Avatar } from '@mui/material';
// import Avatar from '@mui/material/Avatar';

//icons
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import SearchIcon from '@mui/icons-material/Search';
import { HelpOutline } from '@mui/icons-material';

import { useStateValue } from '../assets/contextapi/StateProvider';

const Header = () => {
  const [{ user }] = useStateValue();
  return (
    <div className='header'>
        <div className="header__left">
            {/* avatars */} 
            <Avatar className='header__avatar'
            // alt="widhi"
            alt={user?.displayName}
            src={user?.photoURL} 
            />
            
            
            {/* {time icon} */}
            <AccessTimeIcon/>

        </div>
        <div className="header__search">
            {/* search icon */}
            <SearchIcon/>
            {/* input */}
            <input className='header_search_input' placeholder='Search here' />
        </div>
        <div className="header__right">
            {/* help icon */}
            <HelpOutline/>
        </div>

    </div>
  )
}

export default Header