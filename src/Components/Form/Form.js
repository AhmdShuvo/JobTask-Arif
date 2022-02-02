import React, { useState } from 'react';
import DepartureAndReturn from '../DepartureAndReturn/DepartureAndReturn';
import Container from '@mui/material/Container';
import From from '../From/From';
import To from '../To/To';
import PassangersAndClsas from '../passangersAndClsas/PassangersAndClsas';
import Voucher from './Voucher/Voucher';
import { Button, FormControlLabel, Modal, Radio, RadioGroup } from '@mui/material';
import DataProvider from "../../Context/DataProvider"

import SpringModal from './Modal/Confirm';
import NestedModal from './Modal/Confirm';
import BasicModal from './Modal/Confirm';
import useGetData from '../../Hooks/useGetData';
import useData from '../../Hooks/UseDataProvider';
import RadioInput from './RadioInput';


const Form = () => {
  const [open, setOpen] = useState(false);
  
  const handleSubmit=e=>{

  
    e.preventDefault()

    setOpen(true)
  }

  const handleClose = () => setOpen(false);
  return (
  
   <DataProvider>
    <Container
      sx={{
        boxShadow: 3,
        p: 1,

        borderRadius: 4,
        textAlign: 'center',

      }}
    >

      <form onSubmit={handleSubmit} action="">
        <RadioInput></RadioInput>
        <Container style={{ display: "flex", marginTop: "40px" }}>
          <div style={{ display: "flex" }}>
            <From  ></From>
            <To></To>
          </div>
          <DepartureAndReturn></DepartureAndReturn>

        </Container>
        <Container style={{ display: "grid", gridTemplateColumns: "30% 20% 3fr" }}>
          <PassangersAndClsas></PassangersAndClsas>
          <Voucher></Voucher>
          <Button style={{ width: "40%", height: "60px",backgroundColor:'red',color:'white'}}  type='submit' >Book Now </Button>
        </Container>
      
      </form>

     
      <BasicModal
     open={open}
     setOpen={setOpen}
    //  handleSubmit={handleSubmit}
     ></BasicModal>
    </Container>
    </DataProvider>
  );
};

export default Form;