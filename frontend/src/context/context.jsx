import React, { createContext, useState, useContext,useEffect } from 'react';

const MyContext = createContext();

export const MyContextProvider = ({ children }) => {
 
    const [islogin, setislogin] = useState(() => JSON.parse(localStorage.getItem('islogin')) || false);
    const [user, setuser] = useState(() => localStorage.getItem('user') || '');
    const [category, setcategory] = useState(() => localStorage.getItem('user') || '');


  useEffect(() => {
    localStorage.setItem('islogin', JSON.stringify(islogin));
    localStorage.setItem('user', user);
    localStorage.setItem('category', category);

  }, [islogin,user,category]);
  
  const contextValue = {
    islogin,
    setislogin,
    user,
    setuser,
    category,
    setcategory,
  };

  return (
    <MyContext.Provider value={contextValue} >
      {children}
    </MyContext.Provider>
  );
};

export const useMyContext = () => useContext(MyContext);