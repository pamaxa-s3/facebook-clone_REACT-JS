import React from 'react';
import style from './Header.module.scss';
import SearchIcon from '@material-ui/icons/Search';
import HomeIcon from '@material-ui/icons/Home';
import FlagIcon from '@material-ui/icons/Flag';
import SubscriptionsIcon from '@material-ui/icons/Subscriptions';
import StorefrontOutlinedIcon from '@material-ui/icons/StorefrontOutlined';
import SupervisedUserCircleIcon from '@material-ui/icons/SupervisedUserCircle';
import { Avatar, IconButton } from '@material-ui/core';
import AddIcon from '@material-ui/icons/Add';
import ForumIcon from '@material-ui/icons/Forum';
import NotificationsActiveIcon from '@material-ui/icons/NotificationsActive';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';


function Header() {
    return (
        <div className={style.header}>

            <div className={style.left}>
                <img
                    src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/51/Facebook_f_logo_%282019%29.svg/1200px-Facebook_f_logo_%282019%29.svg.png"
                    alt="logo" />
                <div className={style.input}>
                    <SearchIcon />
                    <input type="text" placeholder='Search Facebook' />
                </div>
            </div>

            <div className={style.midle}>
                <div className={style.option + ' ' + style.option__active}>
                    <HomeIcon fontSize='large' className={style.icon} />
                </div>
                <div className={style.option}>
                    <FlagIcon fontSize='large' className={style.icon} />
                </div>
                <div className={style.option}>
                    <SubscriptionsIcon fontSize='large' className={style.icon} />
                </div>
                <div className={style.option}>
                    <StorefrontOutlinedIcon fontSize='large' className={style.icon} />
                </div>
                <div className={style.option}>
                    <SupervisedUserCircleIcon fontSize='large' className={style.icon} />
                </div>
            </div>

            <div className={style.right}>
                <div className={style.info}>
                    <Avatar />
                    <h4>Roman Strynzha</h4>
                </div>
                <IconButton>
                    <AddIcon />
                </IconButton>
                <IconButton>
                    <ForumIcon />
                </IconButton>
                <IconButton>
                    <NotificationsActiveIcon />
                </IconButton>
                <IconButton>
                    <ExpandMoreIcon />
                </IconButton>
            </div>

        </div>
    )
}

export default Header
