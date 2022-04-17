// import './Menu.css';
// import * as React from 'react';
// import ReactDOM from 'react-dom';
// import BottomNavigation from '@mui/material/Menu';

// // import React, { useEffect, useState } from 'react';

// const Menu = () =>{
//     return(

//         // <div className="menuContainer">
//         //     {/* <div className='buttonContainer'> */}
//         //         <button className="menuButton" type="button">Home</button>
//         //         <button className="menuButton" type="button">Giveaways</button>
//         //         <button className="menuButton" type="button">Calendar</button>
//         //         <button className="menuButton" type="button">QR</button>
//         //     {/* </div> */}
//         // </div> 

//         <BottomNavigation
//             showLabels
//             value={value}
//             onChange={(event, newValue) => {
//                 setValue(newValue);
//             }}
//             >
//             <BottomNavigationAction label="Recents" icon={<RestoreIcon />} />;
//             <BottomNavigationAction label="Favorites" icon={<FavoriteIcon />} />;
//             <BottomNavigationAction label="Nearby" icon={<LocationOnIcon />} />;
//         </BottomNavigation>

//     );
// }

// export default Menu;



import * as React from 'react';
import Box from '@mui/material/Box';
import BottomNavigation from '@mui/material/BottomNavigation';
import BottomNavigationAction from '@mui/material/BottomNavigationAction';
import Paper from '@mui/material/Paper';
// import RestoreIcon from '@mui/icons-material/Restore';
// import FavoriteIcon from '@mui/icons-material/Favorite';
// import LocationOnIcon from '@mui/icons-material/LocationOn';

export default function SimpleBottomNavigation() {
  const [value, setValue] = React.useState(0);

  return (
    <Paper sx={{ position: 'fixed', bottom: 0}} elevation={3}>
    <Box sx={{ width: 500 }}>
      <BottomNavigation
        showLabels
        value={value}
        onChange={(event, newValue) => {
          setValue(newValue);
        }}
      >
        <BottomNavigationAction label="Home" />
        <BottomNavigationAction label="Giveaway"  />
        <BottomNavigationAction label="Events" />
        <BottomNavigationAction label="Profile" />
      </BottomNavigation>
    </Box>
    </Paper>
  );
}
// export default SimpleBottomNavigation;


