import React, { useEffect, useState } from 'react';
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';

const UserSelect = (props) =>{

  const handleChange = (event) => {
    props.setUserType(event.target.value)
  };

  return (
    <Box sx={{ minWidth: 120 }} style={{width: "200px"}}>
      <FormControl fullWidth>
        <InputLabel id="demo-simple-select-label">Type of User</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={props.userType}
          label="Type of User"
          onChange={handleChange}
        >
          <MenuItem value="Student">Student</MenuItem>
          <MenuItem value="Admin">Admin</MenuItem>
        </Select>
      </FormControl>
    </Box>
  );
}

export default UserSelect;