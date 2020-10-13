import React from "react";
import { Button } from 'reactstrap';

import "./style.css";

import Image from "../../assets/images/Projects/Anugoonj.png";

const Certification = () => {
  return (
    <div className="Certi text-center">
      <img src={Image} alt="Logo" className="logo" />
      <h2 className='mb-3'>Certificate Title</h2>
      <p className='mr-4 ml-4'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
      <Button color='primary' style={{ 'borderRadius': '13px' }}>
        Certification
      </Button>
    </div>
  );
};

export default Certification;
