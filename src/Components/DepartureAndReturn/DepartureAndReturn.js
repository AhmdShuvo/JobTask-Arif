import * as React from 'react';
import Departure from './Departure';
import Return from './Return';

const DepartureAndReturn = () => {

  return (
    <div style={{ display: "flex" }}>
      <Departure></Departure>
      <Return></Return>
    </div>
  );
};

export default DepartureAndReturn;