import React, { useState } from "react";
import "./style.css";

import Anugoonj from "../../assets/images/Projects/Anugoonj.png";
import { Button, Modal, ModalBody } from "reactstrap";

const ProjectCards = () => {
  const [modal, setModal] = useState(false);
  const toggle = () => setModal(!modal);

  const previewWebsite = () => {
    toggle();
  };

  var list = [
    "HTML",
    "CSS",
    "Javascript",
    "Bootstrap",
    "JQuery",
    "Reactjs",
    "Nodejs",
  ];

  var element = () => {
    if (this.state.hover) {
      return (
        <div>
          <div className="tags">
            {list.map((ele) => (
              <div className="tag">{ele}</div>
            ))}
          </div>
          <div className="buttonGroup text-center">
            <a
              href="http://anugoonj-ipu.com/"
              alt="Anugoonj"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button className="btn">Preview</Button>
            </a>
            <a
              href="http://anugoonj-ipu.com/"
              alt="Anugoonj"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button className="btn">Live Website</Button>
            </a>
          </div>
        </div>
      );
    } else {
      return null;
    }
  };

  return (
    <div onClick={previewWebsite}>
      <img src={Anugoonj} className="ProjectImage" alt="Anugoonj" />
      <Modal isOpen={modal} toggle={toggle} style={{ 'width': '100%' , 'backgroundColor': 'transparent' }}>
        <ModalBody>
          <iframe src='http://anugoonj-ipu.com/' className='frame' />
        </ModalBody>
      </Modal>
    </div>
  );
};

export default ProjectCards;
