import React, { useState, Fragment } from "react";
import RightNav from "./RightNav";

const Burger = () => {
  const [open, SetOpen] = useState(false);

  const style = {
    width: "2rem",
    height: "2rem",
    position: "fixed",
    top: "15px",
    right: "20px",
    display: "flex",
    "justify-content": "space-around",
    "flex-flow": "column nowrap",
    "z-index": "20",
  };

  const Burgerbar1 = {
    width: "2rem",
    height: "0.25rem",
    "background-color": open ? "green" : "black",
    "border-radius": "20px",
    "transform-origin": "1px",
    transform: open ? "rotate(45deg)" : "rotate(0deg)",
    transition: "all 0.3s linear",
  };

  const Burgerbar2 = {
    width: "2rem",
    height: "0.25rem",
    "background-color": open ? "green" : "black",
    "border-radius": "20px",
    "transform-origin": "1px",
    transform: open ? "translateX(100%)" : "translateX(0)",
    opacity: open ? "0" : "1",
  };

  const Burgerbar3 = {
    width: "2rem",
    height: "0.25rem",
    "background-color": open ? "green" : "black",
    "border-radius": "20px",
    "transform-origin": "1px",
    transform: open ? "rotate(-45deg)" : "rotate(0)",
    transition: "all 0.3s linear",
  };

  return (
      <Fragment>
    <div
      className="Burger"
      style={style}
      open={open}
      onClick={() => SetOpen(!open)}>
      <div style={Burgerbar1} />
      <div style={Burgerbar2} />
      <div style={Burgerbar3} />
    </div>
    <RightNav open={open} />
    </Fragment>
  );
};

export default Burger;
