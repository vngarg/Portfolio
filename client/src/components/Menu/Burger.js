import React, { useState } from 'react'

const Burger = () => {

    const style = {
        "width": "2rem",
        "height": "2rem",
        "position": "fixed",
        "top": "15px",
        "right": "20px",
        "display": "flex",
        "justify-content": "space-around",
        "flex-flow": "column nowrap",
    }

    const Burgerbar = {
        "width": "2rem",
        "height": "0.25rem",
        "background-color": "black",
        "border-radius": "20px",
    }

    return (
        <div className='Burger' style={style}>
            <div style={Burgerbar} />
            <div style={Burgerbar} />    
            <div style={Burgerbar} />
        </div>
    )
}

export default Burger
