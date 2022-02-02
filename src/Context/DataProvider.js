import React, { createContext } from 'react';
import useGetData from '../Hooks/useGetData';
export const DataContext=createContext('');

const DataProvider = ({children}) => {
    const allContext=useGetData()
    
    return (
        <DataContext.Provider value={allContext}>
            {children}
            
        </DataContext.Provider>
    );
};

export default DataProvider;