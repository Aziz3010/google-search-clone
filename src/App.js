import React, { useEffect, useState } from 'react';
import Content from './components/Content/Content';
import Navbar from './components/Navbar/Navbar';
import { useLocation } from 'react-router-dom';
import getDataFromApi from './Api.js';

function App() {

  const [data, setData] = useState([]);
  const [searchKeyState, setSearchKeyState] = useState('egypt');
  const [isLoading, setIsLoading] = useState(false);

  // call getDataFromApi func to get all data from api
  let getData = async (searchKey) => {
    const allDataJS = await getDataFromApi(searchKey);
    setData(allDataJS);
    setIsLoading(false);
  }
  
  let {pathname} = useLocation();
  
  
  useEffect(()=>{
      setIsLoading(true);
      getData(searchKeyState);
  },[searchKeyState, pathname])


  return (
    <>
      <Navbar searchKeyState={searchKeyState} setSearchKeyState={setSearchKeyState} />
      <Content isLoading={isLoading} data={data} />
    </>
  )
}

export default App