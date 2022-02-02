 
 import React, { useState } from 'react';
 const useGetData=()=>{
      
    // RADIO ///

    const [type,setType]=useState("")
    // Get DEPARTURE FROM ///

    const [from,setFrom]=useState("")

    // GET Destination TO ///

    const [destination,setDestination]=useState("")

    // GET DEPARTURE TIME //
    const [Departurevalue, setDepartureValue]=useState("")

    // GET RETURN TIME //
    const [Returnvalue, setReturnValue] = React.useState('');

    // GET PASSANGER INFO //
    const [PassengerValue, setPassengervalue] = useState("")

    // VOUTER ///

    const [Voucher,setVouter]=useState('')

    const data ={user:`${type},${from}`}

return {data,type,setType,setFrom,from,destination,setDestination,Departurevalue, setDepartureValue,Returnvalue, setReturnValue,PassengerValue, setPassengervalue,Voucher,setVouter}
 }

 export default useGetData;