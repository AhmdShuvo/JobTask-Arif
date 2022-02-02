import React from 'react';

const AllData = ({type,from,to}) => {
    console.log(from);

    localStorage.setItem("from",from)
    localStorage.setItem("to",to)
    localStorage.setItem("type",type)
    return (
        <div>
            
        </div>
    );
};

export default AllData;