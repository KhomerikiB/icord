import React, { useState } from "react";
import Person from "../../components/speakers/person";
import "./welcome.scss";
const Welcome = props => {
  const [speakers, setSpeakers] = useState([
    {
      id: 1,
      title: "Stephen Groft, Pharm. D. President, ICORD",
      description:
        "National Center for Advancing Translational Sciences, National Institutes of Health, USA",
      image: "1"
    },
    // {
    //   id: 2,
    //   title: "Domenica Taruscio, M.D., President-Elect, ICORD",
    //   description:
    //     "Director, National Centre for Rare Diseases Istituto Superiore di Sanità, Rome, Italy",
    //   image: "2"
    // },
    // {
    //   id: 3,
    //   title: "Manuel Posada De La Paz, M.D., Past-President, ICORD",
    //   description:
    //     "Director, Institute of Rare Diseases Research Instituto de Salud Carlos III, Madrid, Spain",
    //   image: "3"
    // }
  ]);
  const [creator, setCreator] = useState({
    id: 4,
    title: "Prof Oleg Kvlividze, M.D, PhD",
    description:
      "CEO, Georgian Foundation for Genetic and Rare Diseases (GeRaD)",
    image: "4"
  });
  return (
    <div className="inner-container welcome-container">
      <div className="item1">
        <div className="text-wrapper-welcome">
        Dear Colleagues,
        <p className="spacing">
        Welcome to Tbilisi, Georgia for the 15th ICORD Conference to be held on November 19-21, 2020. The goal of all ICORD conferences is to extend international collaborations in rare diseases research and orphan product and diagnostics development while expanding access to information on rare diseases for the community.  International colleagues will present research discoveries, share experiences, and discuss new directions for the advancement of knowledge in Rare Diseases. Numerous opportunities will be available to exchange and discuss the newest advances in the diagnosis, treatment and management of Rare Diseases.  The discussions and format of the conference sessions will provide an opportunity to meet old friends and to acquire new ones.
        </p> <p className="spacing">
        The Conference will provide the most updated information in the field of rare diseases and give all participants an opportunity to share their knowledge and experiences with leading global rare diseases experts. At the same time, we are planning to maintain the tradition of successful conferences organized by ICORD members since 2005. 
        </p> <p className="spacing">
        Please visit the website on a regular basis to view the schedule of events, the agenda, and participants who have agreed to join you at this conference.
        </p> <p className="spacing">
        It is our great pleasure to welcome you to Tbilisi in November 2020.
        </p>

        </div>
        {/* <div className="speakers-grid">
          {speakers.map(speaker => (
            <Person data={speaker} key={speaker.id} />
          ))}
        </div> */}
      </div>

      <div className="item2">
        <div className="text-wrapper-welcome">
          Dear Guests of Georgia,
          <p className="spacing">
          We are happy to invite you to Tbilisi, Georgia to take part in the 15th ICORD Conference will be held on November 19-21, 2020. 3 full days meeting will bring together all stakeholders (medical professionals, researchers, patients, healthcare decision makers etc.) extremely motivated to solve of the problems related with rare diseases worldwide. 
          </p> <p className="spacing">
          The fact that the such level Rare Diseases meeting is carrying out first time in Georgia imposes on us more responsibility. Undoubtedly, ICORD 2020 will continue the tradition of the previous fourteen ICORD meetings held on four continents. From our side, we will make all efforts so that to effectively use our own successful experience of the national and international Rare Diseases conferences organized by us for the last 10 years. 
          </p> <p className="spacing">
          We sincerely hope that you will enjoy the scientific part of the meeting, as well as the unique historical environment of Tbilisi. Your presence here will be appreciated by the Local Organizing Committee, and also by all medical professionals, researchers and patients actively involved in the reduction process of Rare Diseases burden in Georgia. We will try our best so that for those who will be in Tbilisi first time their impressions would be unforgettable.
          </p> <p className="spacing">
          We are looking forward to seeing all of you in Tbilisi in Fall 2020.
          </p> <p className="spacing">
          On behalf of the Local Organizing Committee
          </p>

        </div>
        {/* <div className="single-person-wrapper">
          <Person data={creator} key={creator.id} />
        </div> */}
      </div>
    </div>
  );
};

export default Welcome;
