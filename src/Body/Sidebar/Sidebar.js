import React from 'react';
import style from './Sidebar.module.scss';
import SidebarRow from './SidebarRow/SidebarRow';
import EmojiFlagsIcon from '@material-ui/icons/EmojiFlags';
import PeopleIcon from '@material-ui/icons/People';
import ChatIcon from '@material-ui/icons/Chat';
import StorefrontIcon from '@material-ui/icons/Storefront';
import VideoLibraryIcon from '@material-ui/icons/VideoLibrary';
import ExpandMoreOutlinedIcon from '@material-ui/icons/ExpandMoreOutlined';
import LocalHospitalIcon from '@material-ui/icons/LocalHospital';

function Sidebar() {
    return (
        <div className={style.sidebar}>
            <SidebarRow src='https://scontent.fiev24-1.fna.fbcdn.net/v/t1.0-1/cp0/p40x40/23517977_1313225995471824_2168370148006150467_n.jpg?_nc_cat=107&_nc_sid=7206a8&_nc_ohc=HlTdHZTz3zAAX8_ajXV&_nc_ht=scontent.fiev24-1.fna&oh=589506a4ff80facea47634550634c93b&oe=5F754D82' title='Roman Strynzha' />
            <SidebarRow title='COVID 19 Information Center' Icon={LocalHospitalIcon} />
            <SidebarRow title='Pages' Icon={EmojiFlagsIcon} />
            <SidebarRow title='Friends' Icon={PeopleIcon} />
            <SidebarRow title='Messenger' Icon={ChatIcon} />
            <SidebarRow title='Marketplace' Icon={StorefrontIcon} />
            <SidebarRow title='Videos' Icon={VideoLibraryIcon} />
            <SidebarRow title='Marketplace' Icon={ExpandMoreOutlinedIcon} />
        </div>
    )
}

export default Sidebar
