import * as React from 'react';
import TextField from '@mui/material/TextField';
import AdapterDateFns from '@mui/lab/AdapterDateFns';
import LocalizationProvider from '@mui/lab/LocalizationProvider';
import DateTimePicker from '@mui/lab/DateTimePicker';
import useGetData from '../../Hooks/useGetData';
import useData from '../../Hooks/UseDataProvider';
import { DatePicker } from '@mui/lab';

const Departure = () => {
  // const [value, setValue] = React.useState(null);
  const {Departurevalue, setDepartureValue}=useData()


  
  return (
    <div style={{ margin: "10px" }}>
      <h5>departure</h5>
      {/* <LocalizationProvider dateAdapter={AdapterDateFns}>
        <DateTimePicker 
       
          renderInput={(props) => <TextField {...props} />}
          label="Select Date And Time"
          value={""}
          onChange={(newValue) => {
            setDepartureValue(newValue);
          }}
        
          
        />
      </LocalizationProvider> */}
       <LocalizationProvider dateAdapter={AdapterDateFns}>
      <DatePicker
        label="Basic example"
        value={Departurevalue}
        onChange={(newValue) => {
          setDepartureValue(newValue);
        }}
        renderInput={(params) => <TextField {...params} />}
      />
    </LocalizationProvider>
    </div>
  );
};

export default Departure;