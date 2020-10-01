import React from 'react'

import './Menu.css';
import Burger from './Burger';

const Menu = () => {
    return (
        <div className='Nav'>
            <div className='Logo'>
                S.G.
            </div>
            <Burger />
        </div>
    )
}

export default Menu
