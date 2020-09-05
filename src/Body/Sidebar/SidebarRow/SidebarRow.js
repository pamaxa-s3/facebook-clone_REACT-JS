import React from 'react';
import style from './SidebarRow.module.scss';
import { Avatar } from '@material-ui/core';

function SidebarRow(props) {
    const { title, src, Icon } = props;
    return (
        <div className={style.sidebarRow}>
            {src && <Avatar src={src} />}
            {Icon && <Icon className={style.icon} />}
            <h4>{title}</h4>
        </div>
    )
}

export default SidebarRow
