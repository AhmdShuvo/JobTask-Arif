import { FormControlLabel, Radio, RadioGroup } from '@mui/material';
import React from 'react';
import useData from '../../Hooks/UseDataProvider';

const RadioInput = () => {
    const {type,setType}=useData()
    return (
        <div>
             <RadioGroup
       
       row
       aria-labelledby="demo-row-radio-buttons-group-label"
       name="row-radio-buttons-group"
     >
       <FormControlLabel onChange={(e) => {setType(e.target.value)
       }} value="One Way" control={<Radio />} label="One Way" />
       <FormControlLabel onChange={(e) => setType(e.target.value)} value="Round trip" control={<Radio />} label="Round trip" />
     </RadioGroup>
        </div>
    );
};

export default RadioInput;