import React, { useState } from 'react';
import style from './Post.module.scss';
import { Avatar } from '@material-ui/core';
import ThumbUpIcon from '@material-ui/icons/ThumbUp';
import ChatBubbleOutlineIcon from '@material-ui/icons/ChatBubbleOutline';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import NearMeIcon from '@material-ui/icons/NearMe';
import ExpandMoreOutlinedIcon from '@material-ui/icons/ExpandMoreOutlined';

function Post({ profilePic, image, username, timestemp, message }) {



    return (
        <div className={style.post}>
            <div className={style.top}>
                <Avatar
                    className={style.avatar}
                    src={profilePic} />
                <div className={style.top__info}>
                    <h3>{username}</h3>
                    <p>Timestamp...
                        {/* {new Date(timestemp?.toDate()).toUTCString()} */}
                    </p>
                </div>
            </div>
            <div className={style.bottom}>
                <p>{message}</p>
                <div className={style.image}>
                    <img src={image} alt="post image" />
                </div>


                <div className={style.options}>
                    <div className={style.option}>
                        <ThumbUpIcon />
                        <p>Like</p>
                    </div>
                    <div className={style.option}>
                        <ChatBubbleOutlineIcon />
                        <p>Comment</p>
                    </div>
                    <div className={style.option}>
                        <NearMeIcon />
                        <p>Share</p>
                    </div>
                    <div className={style.option}>
                        <AccountCircleIcon />
                        <ExpandMoreOutlinedIcon />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Post;
