import React from 'react';

import css from './UserInfo.module.css'

const UserInfo = () => {
    return (
        <div className={css.UserInfo}>
            <h3>Username</h3>
            <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/59/User-avatar.svg/1024px-User-avatar.svg.png" alt="avatar" className={css.img}/>
        </div>
    );
};

export {UserInfo};