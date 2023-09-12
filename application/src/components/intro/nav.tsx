import * as React from 'react';
import HomeIcon from '@mui/icons-material/Home';
import ExploreIcon from '@mui/icons-material/Explore';
import ContactsIcon from '@mui/icons-material/Contacts';
import WorkIcon from '@mui/icons-material/Work';
import "../../styles/nav.css"


export default function Nav() {
  return (
    <div id='navigation'>
      <div className='bar'>
        <HomeIcon sx={{color: "#FE802E"}} /> 
        <ExploreIcon sx={{color: "#FE802E"}} /> 
        <WorkIcon sx={{color: "#FE802E"}} /> 
        <ContactsIcon sx={{color: "#FE802E"}} /> 
      </div>
    </div>
  );
}
