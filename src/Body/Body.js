import React from 'react';
import style from './Body.module.scss';
import Sidebar from './Sidebar/Sidebar';
import Feed from './Feed/Feed';

function Body() {
    return (
        <div className={style.body}>
            
        <Sidebar />
        <Feed />
        {/* Widgets */}


        </div>
    )
}

export default Body
