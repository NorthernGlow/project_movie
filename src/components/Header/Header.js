import React from 'react';

import {Menu} from "../Menu/Menu";
import {SearchMovie} from "../SearchMovie/SearchMovie";
import {UserInfo} from "../UserInfo/UserInfo";
import css from './Header.module.css'

const Header = () => {
    return (
        <div className={css.Header}>
            <Menu/>
            <SearchMovie/>
            <UserInfo/>
        </div>
    );
};

export {Header};