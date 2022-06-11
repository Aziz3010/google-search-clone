import React, { useEffect, useState } from 'react';
import Content from './components/Content/Content';
import Navbar from './components/Navbar/Navbar';
import { useLocation } from 'react-router-dom';
import getDataFromApi from './Api.js';
import './App.css';

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


  const [isDark, setIsDark] = useState(false);

  const darkStyle = {
    "--bg": "#0e204c",
    "--f1f1f1": "#6689d2",
    "--222": "#fff",
    "--f1f1f170": "#ffffff3b",
    "--1a0dab": "#fff",
    "--202124": "#c6c6c6",
    "--dark": "#f1f1f1",
    };

  return (
    <div style={ isDark === true ? darkStyle : null }>
      <Navbar searchKeyState={searchKeyState} setIsDark={setIsDark} isDark={isDark} setSearchKeyState={setSearchKeyState} />
      <Content isLoading={isLoading} data={data} />
    </div>
  )
}

export default App