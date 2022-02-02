import React from 'react';

import DeleteIcon from '@mui/icons-material/LocationOnOutlined';
import { Input } from '@mui/material';
import useGetData from '../../Hooks/useGetData';
import Departure from '../DepartureAndReturn/Departure';
import AllData from '../AllDAta/AllData';
import useData from '../../Hooks/UseDataProvider';

const From = () => {
    const {setFrom,from}=useData()
    return (
        <div style={{ margin: "10px" }}>
            <h5>From</h5>
            <Input onChange={(e)=>{setFrom(e.target.value) }} required defaultValue="Select departure" />
            <DeleteIcon></DeleteIcon>
          
        </div>
    );
};

export default From;