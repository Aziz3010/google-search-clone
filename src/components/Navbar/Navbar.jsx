import React, { useState } from 'react';
import St from './Navbar.module.css';
import { Link } from 'react-router-dom';

function Navbar( {searchKeyState, setSearchKeyState} ) {
    const [darkMode, setDarkMode] = useState(false);
    const [navMenu, setNavMenu] = useState(false);

    return (
        <nav className={St.nav}>
            <div className={St.logo_types}>
                
                <div className={St.logo_icon_box}>
                    <h1 className={St.logo}><Link to={'/all'}>Google</Link></h1>
                    <div className={St.types} onClick={()=>setNavMenu(!navMenu)}>☰</div>
                </div>

                { navMenu && <ul>
                        <li>
                            <Link to={'/all'}>🔎 All</Link>
                        </li>
                        <li>
                            <Link to={'/image'}>📸 Images</Link>
                        </li>
                        <li>
                            <Link to={'/news'}>📰 News</Link>
                        </li>
                        {/* <li>
                            <Link to={'/video'}>🎥 Videos</Link>
                        </li> */}
                </ul>}

            </div>

            <div className={St.search_dark}>
                <input className={St.search_input} value={searchKeyState} onChange={(e)=>{setSearchKeyState(e.target.value)}} placeholder="Search..." type="search" name="searchInput" />
                <div className={St.dark_mood} onClick={()=>setDarkMode(!darkMode)}>
                    { darkMode ? "🌞" : "🌙" }
                </div>
            </div>
        </nav>
    )
}

export default Navbar;