import * as React from 'react';
import TextField from '@mui/material/TextField';
import AdapterDateFns from '@mui/lab/AdapterDateFns';
import LocalizationProvider from '@mui/lab/LocalizationProvider';
import DateTimePicker from '@mui/lab/DateTimePicker';
import useData from '../../Hooks/UseDataProvider';


const Return = () => {
  const {Returnvalue, setReturnValue,type}=useData()
  
  return (
    <div style={{ margin: "10px" }}>
      <h5>Return</h5>
      <LocalizationProvider dateAdapter={AdapterDateFns}>
        <DateTimePicker

          disabled={type==="Round trip"}
          renderInput={(props) => <TextField {...props} />}
          label="Select Date And time"
          
          value={''}
          onChange={(newValue) => {
            setReturnValue(newValue);
          }}

        />
      </LocalizationProvider>
    </div>
  );
};

export default Return;