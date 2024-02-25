import React, { createContext, useState, useContext } from 'react';

const StringListContext = createContext();

export const useStringList = () => useContext(StringListContext);

export const StringListProvider = ({ children }) => {
  const [stringList, setStringList] = useState([]);

  const addStringToList = (newString) => {
    setStringList([...stringList, newString]);
  };

  return (
    <StringListContext.Provider value={{ stringList, addStringToList }}>
      {children}
    </StringListContext.Provider>
  );
};