
import  React, { useContext } from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';

import { Modal } from '@mui/material';
import useGetData from '../../../Hooks/useGetData';
import DataContext from "../../../Context/DataProvider"
import useData from '../../../Hooks/UseDataProvider';



const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
};

export default function BasicModal({open,setOpen}) {
    const handleClose = () => setOpen(false);
    const {type,from,destination,Departurevalue,Returnvalue,PassengerValue,Voucher}=useData();

    const orderdetails={"tripType":type,"startingFrom":from,"destination":destination,"departureTime":Departurevalue,"returnTime":Returnvalue,"voucher":Voucher,"passengerDetails":PassengerValue}

  return (
    <Modal
    open={open}
    onClose={handleClose}
    aria-labelledby="modal-modal-title"
    aria-describedby="modal-modal-description"
  >
      
        <Box sx={style}>
          <h1>{orderdetails.tripType}</h1>
          <h1>{orderdetails.startingFrom}</h1>
          <h1>{orderdetails.destination}</h1>
          <h1>{orderdetails.departureTime.toString()}</h1>
          <h1>{orderdetails.returnTime.toString()}</h1>
          <h1>{orderdetails.passengerDetails}</h1>
          <h1>{orderdetails.voucher}</h1>
        </Box>
        </Modal>
   
  );
}