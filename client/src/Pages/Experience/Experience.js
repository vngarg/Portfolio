import React from "react";
import Menu from "../../components/Nav/Navbar";
import Footer from "../../components/Footer/Footer";
import { Container } from "reactstrap";
import ExperienceCard from "../../components/ExperienceCard/ExperienceCard";

import Quizizz from "../../assets/Logos/Quizizz.png";
import Gordian from "../../assets/Logos/Gordian.png";
import SKCF from "../../assets/Logos/SKCF.jpg";
import YuMedic from "../../assets/Logos/YuMedic.png";
import GirlScript from "../../assets/Logos/GirlScript.jpeg";
import Codebox from "../../assets/Logos/Codebox.jpg";
import VKarma from "../../assets/Logos/VKarma.png";

import HTMLIcon from "../../assets/Icons/HTML.png";
import CSSIcon from "../../assets/Icons/CSS.png";
import ReactIcon from "../../assets/Icons/React.webp";
import JavascriptIcon from "../../assets/Icons/JavaScript.svg";
import JQueryIcon from "../../assets/Icons/JQuery.jpg";
import BootstrapIcon from "../../assets/Icons/Bootstrap.png";
import FlutterIcon from "../../assets/Icons/Flutter.webp";
import DartIcon from "../../assets/Icons/Dart.png";
import AndroidIcon from "../../assets/Icons/Android.png";
import NodeIcon from "../../assets/Icons/Nodejs.jpeg";
import MongoIcon from "../../assets/Icons/Mongodb.jpeg";
import WordPressIcon from "../../assets/Icons/Wordpress.png";
import DockerIcon from "../../assets/Icons/Docker.png";
import Vuejs from "../../assets/Icons/Vuejs.png";
import Nuxt from "../../assets/Icons/Nuxt.png";
import ESLint from "../../assets/Icons/ESLint.png";
import TailwindCSS from "../../assets/Icons/TailwindCSS.png";

const Experience = () => {
  const QuizizzDesc = () => {
    return (
      <div>
        Gordian Technologies provides secure delivery feature to its customers.
        Working with them I had developed their website and added these
        features.
        <ol>
          <li>Redesigned the admin panel. </li>
          <li>Worked with Vuejs and Nuxtjs.</li>
          <li>Fixed bugs in the admin panel.</li>
        </ol>
      </div>
    );
  };

  const QuizizzTech = [Vuejs, Nuxt, TailwindCSS, ESLint];

  const GordianDesc = () => {
    return (
      <div>
        Gordian Technologies provides secure delivery feature to its customers.
        Working with them I had developed their website and added these
        features.
        <ol>
          <li>Added Login and Signup to the website.</li>
          <li>Integrated razorpay payment gateway.</li>
          <li>Added the customer form and messaging feature.</li>
          <li>Developed an Admin panel to accept and reject the orders.</li>
          <li>
            Integrated Google API's for Autocomplete and distance calculation.
          </li>
        </ol>
      </div>
    );
  };

  var GordianTech = [ReactIcon, NodeIcon, MongoIcon, DockerIcon];

  const SKDesc = () => {
    return (
      <div>
        SK Children Foundation is a non-profit organization which provides free
        education to the unprivileged children. Initially I worked on their
        WordPress website for 2 months and now I'm the Domain head of Web
        development Domain. I
        <ol>
          <li>Manage all the interns of the domain.</li>
          <li>
            Look for the necessary improvements on the website and implement
            them with other members.
          </li>
          <li>Guide and help other interns in their work.</li>
          <li>
            Be in touch with other domains for the regular content to be
            uploaded on the website.
          </li>
        </ol>
      </div>
    );
  };

  var SKTech = [WordPressIcon, JavascriptIcon, CSSIcon, HTMLIcon];

  const YuMedicDesc = () => {
    return (
      <div>
        YuMedic is a company that promotes medical facilites in India and is
        working to bring the medical sector online, just a click away. I worked
        with them for a month and developed
        <ol>
          <li>Various Pages of their website.</li>
          <li>Modified some previous pages as well.</li>
          <li>
            Helped the team with the UI of the website and suggested some great
            ones.
          </li>
        </ol>
      </div>
    );
  };

  var YuMedicTech = [ReactIcon, NodeIcon, BootstrapIcon];

  const VKarmaDesc = () => {
    return (
      <div>
        I developed an android app which was based on School Management System.
        Developing the entire app from scratch and all alone I learnt a lot.
        Main features that I implemented are
        <ol>
          <li>Added Login and Signup feature.</li>
          <li>Added Spalsh Screen.</li>
          <li>Implemented attractive and catchy UI.</li>
          <li>
            Created more than 10 screens each one with different functionality.
          </li>
          <li>Integrated various python APIs for the backend part.</li>
        </ol>
      </div>
    );
  };

  var VKarmaTech = [FlutterIcon, DartIcon, AndroidIcon];

  const CodeboxDesc = () => {
    return (
      <div>
        Developed the entire website for the organizatoin from scratch and
        implemented a cool UI.
        <ol>
          <li>Added some good animations to the website.</li>
          <li>Worked on more than 5 pages as well.</li>
        </ol>
      </div>
    );
  };

  var CodeboxTech = [
    HTMLIcon,
    CSSIcon,
    JavascriptIcon,
    BootstrapIcon,
    JQueryIcon,
  ];

  const GSSOCDesc = () => {
    return (
      <p>
        GirlScript Summer of Code is a 3 month long internship where all the
        participants worked on a specific project. I participated in GSSoc'20
        and worked on various projects as well. I had implemented some good
        features in different projects.
      </p>
    );
  };

  var GSSOCTech = [HTMLIcon, CSSIcon, JavascriptIcon, BootstrapIcon, ReactIcon];

  return (
    <div>
      <Menu color="rgba(25, 26, 29, 1)" />
      <Container>
        <ExperienceCard
          Logo={Quizizz}
          position="Frontend developer Intern"
          CompanyName="Quizizz Inc."
          desc={QuizizzDesc()}
          start="August 2021"
          end="present"
          Location="Banglore"
          Tech={QuizizzTech}
          CredentialLink="null"
          websiteLink="https://quizizz.com"
        />
        <ExperienceCard
          Logo={Gordian}
          position="MERN Stack Intern"
          CompanyName="Gordian Technologies Pvt. Ltd."
          desc={GordianDesc()}
          start="August 2020"
          end="August 2021"
          Location="Work from home"
          Tech={GordianTech}
          CredentialLink="null"
          websiteLink="https://orders.gordian.in"
        />
        <ExperienceCard
          Logo={SKCF}
          position="Web development Domain Head"
          CompanyName="SK Children Foundation"
          desc={SKDesc()}
          start="March 2020"
          end="present"
          Location="Work from home"
          Tech={SKTech}
          CredentialLink="https://drive.google.com/file/d/1CNBYPZ2PdZb6x5My4AvUN9BE4ii04dnK/view?usp=sharing"
          websiteLink="https://skchildrenfoundation.com/"
        />
        <ExperienceCard
          Logo={YuMedic}
          position="Front-end React developer"
          CompanyName="YuMedic Pvt. Ltd."
          desc={YuMedicDesc()}
          start="June 2020"
          end="July 2020"
          Location="Work from Home"
          Tech={YuMedicTech}
          CredentialLink="https://drive.google.com/file/d/1omt6P2jVf_-a2uaFot0vT9Bp2NTjzacC/view?usp=sharing"
          websiteLink="http://yumedic.com/"
        />
        <ExperienceCard
          Logo={VKarma}
          position="Android developer"
          CompanyName="VKarma Pvt. Ltd."
          desc={VKarmaDesc()}
          start="May 2020"
          end="July 2020"
          Location="Work from home"
          Tech={VKarmaTech}
          CredentialLink="https://drive.google.com/file/d/1htUaDDEqipASn-JRLQ64alRbUI3T65SI/view?usp=sharing"
          websiteLink="https://drive.google.com/file/d/1QUP2K7r45PXQWAeVvh8_Oqy8NIVnvYpS/view?usp=sharing"
        />
        <ExperienceCard
          Logo={Codebox}
          position="Front-end Web developer"
          CompanyName="Codebox Global Pvt. Ltd."
          desc={CodeboxDesc()}
          start="June 2020"
          end="July 2020"
          Location="Work from home"
          Tech={CodeboxTech}
          CredentialLink="https://drive.google.com/file/d/1xnarFQ6r6ocCagfx7JSNoL-20IYcyjOZ/view?usp=sharing"
          websiteLink="https://codeboxglobal.co/"
        />
        <ExperienceCard
          Logo={GirlScript}
          position="Open-Source developer"
          CompanyName="Girlscript Summer of Code'20"
          desc={GSSOCDesc()}
          start="March 2020"
          end="May 2020"
          Location="GitHub & Slack"
          Tech={GSSOCTech}
          CredentialLink="https://drive.google.com/file/d/1AJhP6MqowWnEWeKkEkTk1Og0r0dhxsUc/view?usp=sharing"
          websiteLink="https://www.gssoc.tech/"
        />
      </Container>
      <Footer />
    </div>
  );
};

export default Experience;
