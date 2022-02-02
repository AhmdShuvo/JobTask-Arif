import { TextField } from '@mui/material';
import React from 'react';
import useData from '../../../Hooks/UseDataProvider';
import useGetData from '../../../Hooks/useGetData';
// import useGetData from '../../../Hooks/useGetData';

const Voucher = () => {
    const {Voucher,setVouter}=useData() 
   
    return (
        <div style={{ margin: "10px" }}>
            <TextField onChange={(e)=>setVouter(e.target.value)} id="standard-basic" label="Voucher or event code" variant="standard" />
        </div>
    );
};

export default Voucher; 