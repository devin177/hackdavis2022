import * as React from 'react';
import Box from '@mui/material/Box';
import BottomNavigation from '@mui/material/BottomNavigation';
import BottomNavigationAction from '@mui/material/BottomNavigationAction';
import Paper from '@mui/material/Paper';
import RestoreIcon from '@mui/icons-material/Restore';
import FavoriteIcon from '@mui/icons-material/Favorite';
import LocationOnIcon from '@mui/icons-material/LocationOn';


import { Link } from "react-router-dom";


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
        
        <BottomNavigationAction component={Link} to="/" label="Home"/> 
        <BottomNavigationAction href='https://twitter.com/ucdavisaggies?ref_src=twsrc%5Egoogle%7Ctwcamp%5Eserp%7Ctwgr%5Eauthor' target="_blank" rel="noopener noreferrer" label="Giveaway"  />
        <BottomNavigationAction href='https://ucdavisaggies.evenue.net/cgi-bin/ncommerce3/SEGetEventList?linkID=twucd&timeDateFrom=2022-4-1-00.00.00&timeDateTo=2023-3-31-23.59.59&shopperContext=' target="_blank" rel="noopener noreferrer" label="Events" />
        <BottomNavigationAction component={Link} to="/account" label="Profile" />
      </BottomNavigation>
    </Box>
    </Paper>
  );
}
// export default SimpleBottomNavigation;


