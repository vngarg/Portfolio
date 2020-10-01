import React from 'react'

import './Menu.css';
import RightNav from './RightNav';
import Burger from './Burger';

const Menu = () => {
    return (
        <div className='Nav'>
            <div className='Logo'>
                S.G.
            </div>
            <Burger />
            <RightNav />
        </div>
    )
}

export default Menu
