import React from 'react'
import './Timeline.css'
import TimelineData from './TimelineData'
import classes from "./Timeline.css";

import {
    VerticalTimeline,
    VerticalTimelineElement,
  } from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";

function Highlights() {
  return (
    <>

<div className={classes.highlights}>
      <div className={classes["highlights-container"]}>
        <div className={classes["highlights-heading"]}>
          <h1 style={{ textAlign: "center" }}> Placements Time line</h1>
        </div>

        <VerticalTimeline>
          {TimelineData.map((element) => {
            return (
              <VerticalTimelineElement
                key={element.key}
                date={element.year}
                dateClassName={classes["date-style"]}
                iconStyle={{ background: "#61c15c" }}
            // timeline icon will come here
              >
                <h2 className="vertical-timeline-element-title">
                  {element.title}
                </h2>

                <h4 className="vertical-timeline-element-subtitle">
                  {element.percentage} % placements
                </h4>
                <p id="description">{element.description}</p>
              </VerticalTimelineElement>
            );
          })}
        </VerticalTimeline>
      </div>
    </div>
    </>
  )
}

export default Highlights