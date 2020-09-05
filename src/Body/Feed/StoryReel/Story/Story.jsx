import React from 'react';
import style from './Story.module.scss';
import { Avatar } from '@material-ui/core';

function Story( { image, profileSrc, title } ) {
    return (
        <div className={style.story} style={ { backgroundImage: `url(${image})` } }>
            <Avatar
            src={profileSrc}
            className={style.avatar} />
            <h4>{title}</h4>

        </div>
    )
}

export default Story
