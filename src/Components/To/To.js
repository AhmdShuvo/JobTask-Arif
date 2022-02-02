import React from 'react';

import DeleteIcon from '@mui/icons-material/LocationOnOutlined';
import { Input } from '@mui/material';
import useGetData from '../../Hooks/useGetData';
import useData from '../../Hooks/UseDataProvider';

const To = () => {
    const  {destination,setDestination}=useData()
    return (
        <div style={{ margin: "10px" }}>
            <h5>To</h5>
            <Input onChange={(e)=>{setDestination(e.target.value)}} name='To'  />
            <DeleteIcon></DeleteIcon>
        </div>
    );
};

export default To;