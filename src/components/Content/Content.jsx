import React from 'react';
import St from './Content.module.css';
import All from '../All/All';
import Images from '../Images/Images';
import News from '../News/News';
// import Videos from '../Videos/Videos';
import { Routes, Route, Navigate, useLocation } from 'react-router-dom';
import { BeatLoader } from 'react-spinners';

function Content({data, isLoading}) {
    let {pathname} = useLocation();

    return (
    <main>
        <h2 className={St.pathname}>Menu { pathname }</h2>
        
        {isLoading && <BeatLoader />}

        <Routes>
            <Route path='/' element={ <Navigate to='/all' replace={true} />} />
            <Route path='/all' element={ <All api={ data.length !== 0 ? data : null} /> } />
            <Route path='/image' element={ <Images api={ data.length !== 0 ? data : null} /> } />
            <Route path='/news' element={ <News api={ data.length !== 0 ? data : null} /> } />
            {/* <Route path='video' element={ <Videos api={ data.length !== 0 ? data : null} /> } /> */}
        </Routes>
    </main>
    )
}

export default Content;