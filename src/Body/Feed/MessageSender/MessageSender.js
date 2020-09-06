import React, { useState } from 'react';
import style from './MessageSender.module.scss';
import { Avatar } from '@material-ui/core';
import VideocamIcon from '@material-ui/icons/Videocam';
import PhotoLibraryIcon from '@material-ui/icons/PhotoLibrary';
import InsertEmoticonIcon from '@material-ui/icons/InsertEmoticon';

function MessageSender() {

    const [ input, setInput ] = useState("");
    const [ imageUrl, setImageUrl ] = useState("");


    const handleSubmit = e => {
        e.preventDefault();

        setInput("");
        setImageUrl("");
    }

    return (
        <div className={style.messageSender}>
            <div className={style.top}>
                <Avatar />
                <form>
                    <input
                        value={input}
                        onChange={(e) => setInput(e.target.value)}
                        className={style.input}
                        placeholder='Wats on your mind, Roman Strynzha?'
                    />
                    <input
                        value={imageUrl}
                        onChange={(e) => setImageUrl(e.target.value)}
                        placeholder='image URL (Optional)'
                    />
                    <button
                        onClick={handleSubmit}
                        type='submit'
                    >
                        Hidden submit
                    </button>
                </form>
            </div>
            <div className={style.bottom}>
                <div className={style.option}>
                    <VideocamIcon style={{ color: 'red' }} />
                    <h3>Live Video</h3>
                </div>
                <div className={style.option}>
                    <PhotoLibraryIcon style={{ color: 'green' }} />
                    <h3>Photo/Video</h3>
                </div>
                <div className={style.option}>
                    <InsertEmoticonIcon style={{ color: 'orange' }} />
                    <h3>Feleing/Activiti</h3>
                </div>
            </div>
        </div>
    )
}

export default MessageSender
