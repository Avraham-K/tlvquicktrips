import React, { useState } from "react";
import DataContext from "../Context/DataContext"

export default function DataContextProvider(props) {

    const {children} = props;
    const [data, setData] = useState(null); 

  
    return (
      <DataContext.Provider
        value={{
         
        }}
      >
        {children}
      </DataContext.Provider>
    );
  }