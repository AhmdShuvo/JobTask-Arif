import React, { useState } from 'react';
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import useGetData from '../../Hooks/useGetData';
import useData from '../../Hooks/UseDataProvider';

const PassangersAndClsas = () => {

 const {PassengerValue, setPassengervalue}=useData()
  const handleChange = (event) => {
    setPassengervalue(event.target.value);
  };
  return (

    <Box style={{ margin: "10px" }} sx={{ minWidth: 120 }}>
      <InputLabel id="demo-simple-select-label">Passengers and class</InputLabel>
      <FormControl fullWidth>

        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={PassengerValue}
          label="passengers"
          onChange={handleChange}
        >
          <MenuItem value={'1 Passenger , economy'}>1 Passenger , economy </MenuItem>
          <MenuItem value={'3 Passenger , economy'}>3 Passenger , economy </MenuItem>
          <MenuItem value={"2 Passenger , Vip"}>2 Passenger , Vip</MenuItem>
        </Select>
      </FormControl>
    </Box>
  );
};

export default PassangersAndClsas;