import React, { useState } from "react";
import dataContext from "../Context/dataContext"

export default function DataContextProvider(props) {

    const {children} = props;
    const [data, setData] = useState({}); 

    const updateUserData = (data) => {
      setData(data);
    }

    return (
      <dataContext.Provider
        value={{
          data,
          updateUserData
        }}
      >
        {children}
      </dataContext.Provider>
    );
  }