import React from 'react';
import style from './Feed.module.scss';
import StoryReel from './StoryReel/StoryReel';

function Feed() {
    return (
        <div className={style.feed}>
            <StoryReel />


        </div>
    )
}

export default Feed
