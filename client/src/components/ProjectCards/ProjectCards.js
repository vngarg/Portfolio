import React, { Component } from "react";
import "./style.css";

import Anugoonj from "../../assets/images/Projects/Anugoonj.png";
import { Button } from "reactstrap";

class ProjectCards extends Component {
  constructor(props) {
    super(props);

    this.state = {
      hover: false,
    };

    this.displayEle = this.displayEle.bind(this);
    this.hideEle = this.hideEle.bind(this);
  }

  displayEle = () => {
    this.setState({
      hover: true,
    });
  };

  hideEle = () => {
    this.setState({
      hover: false,
    });
  };

  render() {
    var element = () => {
      if (this.state.hover) {
        return (
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
        );
      } else {
        return null;
      }
    };

    return (
      <div onMouseOver={this.displayEle} onMouseOut={this.hideEle}>
        <img src={Anugoonj} alt="Anugoonj'20" className="ProjectImage" />
        {element()}
        {/* <div className='card'>
                    {List}
                </div> */}
      </div>
    );
  }
}

export default ProjectCards;
