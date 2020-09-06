import React from 'react';
import style from './Feed.module.scss';
import StoryReel from './StoryReel/StoryReel';
import MessageSender from './MessageSender/MessageSender';

function Feed() {
    return (
        <div className={style.feed}>
            <StoryReel />
            <MessageSender />

        </div>
    )
}

export default Feed
