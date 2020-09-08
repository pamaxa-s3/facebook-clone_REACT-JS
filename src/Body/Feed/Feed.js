import React from 'react';
import style from './Feed.module.scss';
import StoryReel from './StoryReel/StoryReel';
import MessageSender from './MessageSender/MessageSender';
import Post from './Post/Post';

function Feed() {
    return (
        <div className={style.feed}>
            <StoryReel />
            <MessageSender />
            <Post
                key={213}
                profilePic={'https://images.pexels.com/photos/5077665/pexels-photo-5077665.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500'}
                username={'pamaxa'}
                image={'https://images.pexels.com/photos/5091791/pexels-photo-5091791.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500'}
                message={'WOW this works'}
                timestemp={'This is a timestemp'}
            // key={id}
            // profilePic={profilePic}
            // username={username}
            // image={image}
            // message={message}
            // timestemp={timestemp}
            />

        </div>
    )
}

export default Feed
