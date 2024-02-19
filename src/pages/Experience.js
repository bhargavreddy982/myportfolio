import React from "react";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import SchoolIcon from "@material-ui/icons/School";
import WorkIcon from "@material-ui/icons/Work";

function Experience() {
  return (
    <div className="experience">
      <VerticalTimeline lineColor="#3e497a">
        <VerticalTimelineElement
          className="vertical-timeline-element--education"
          date="2018-2020"
          iconStyle={{ background: "#3e497a", color: "#fff" }}
          icon={<SchoolIcon />}
        >
          <h3 className="vertical-timeline-element-title">
          Telangana State Board of Intermediate Education
          </h3>
          <p> Intermediate MPC 99.7%</p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--education"
          date="2020-2024"
          iconStyle={{ background: "#3e497a", color: "#fff" }}
          icon={<SchoolIcon />}
        >
          <h3 className="vertical-timeline-element-title">
          IIIT SRI CITY, CHITTOR
          </h3>

          <h4 className="vertical-timeline-element-subtitle">
          Bachelor of Technology  
          </h4>

          <p> Computer Science</p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          date="2022"
          iconStyle={{ background: "#e9d35b", color: "#fff" }}
          icon={<WorkIcon />}
        >
          <h3 className="vertical-timeline-element-title">
          
            FULL STACK PROJECT 
          </h3>
          <h4 className="vertical-timeline-element-subtitle">
            
          </h4>
          <p>Collaborated with a 5-member team as the lead for a Full Stack web application over two semesters, 
known as the CONSTITUENCY VOICE COMPLAINT portal – a platform for residents of a constituency to 
file complaints about their issues</p>
        </VerticalTimelineElement>

        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          date="2023"
          iconStyle={{ background: "#e9d35b", color: "#fff" }}
          icon={<WorkIcon />}
        >
          <h3 className="vertical-timeline-element-title">
            BLOGS PROJECT, CODPEN PROJECT AND NLP PROJECT
          </h3>
          <h4 className="vertical-timeline-element-subtitle">
            
          </h4>
          <p>
           worked on various projects with team over semester.
          </p>
        </VerticalTimelineElement>
      </VerticalTimeline>
    </div>
  );
}

export default Experience;
