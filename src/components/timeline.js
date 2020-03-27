import React from 'react';
import { VerticalTimeline, VerticalTimelineElement }  from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';

import WorkIcon, { GradIcon } from '../icons/icons';

function Timeline() {
    return (
      <div className="Timeline">
          <div className="container-fluid">
            <div className="row">
               <div className="col-12 Timelinemain">
                   <div className="TimelineHeading">
                       Work experience & Education
                   </div>
                  <VerticalTimeline animate={ true }>
                      <VerticalTimelineElement
    className="vertical-timeline-element--work"
    contentStyle={{ background: '#c6c1c9', color: '#0a0a0a', boxShadow: 'none' }}
    contentArrowStyle={{ borderRight: '7px solid  #c6c1c9' }}
    iconStyle={{ background: '#ad56d5', color: '#fff' }}
    icon={<WorkIcon />}
  >
    <h3 className="vertical-timeline-element-title"> .Net Full Stack Developer </h3>
    <h4 className="vertical-timeline-element-subtitle"> Noida, India </h4>
    <h6>2019 - Present</h6>
  </VerticalTimelineElement>
  <VerticalTimelineElement
    className="vertical-timeline-element--work"
    contentStyle={{ background: '#c6c1c9', color: '#0a0a0a', boxShadow: 'none' }}
    contentArrowStyle={{ borderRight: '7px solid  #c6c1c9' }}
    iconStyle={{ background: '#ad56d5', color: '#fff' }}
    icon={<WorkIcon />}
  >
    <h3 className="vertical-timeline-element-title"> Senior Software Engineer </h3>
    <h4 className="vertical-timeline-element-subtitle"> Bangalore, India </h4>
    <h6>2018 - 2019</h6>
  </VerticalTimelineElement>

  <VerticalTimelineElement
    className="vertical-timeline-element--work"
    contentStyle={{ background: '#c6c1c9', color: '#0a0a0a', boxShadow: 'none' }}
    contentArrowStyle={{ borderRight: '7px solid  #c6c1c9' }}
    iconStyle={{ background: '#ad56d5', color: '#fff' }}
    icon={<WorkIcon />}
  >
    <h3 className="vertical-timeline-element-title"> Software Engineer </h3>
    <h4 className="vertical-timeline-element-subtitle"> Bangalore, India </h4>
    <h6>2015 - 2018</h6>
  </VerticalTimelineElement>

  <VerticalTimelineElement
    className="vertical-timeline-element--work"
    contentStyle={{ background: '#c6c1c9', color: '#0a0a0a', boxShadow: 'none' }}
    contentArrowStyle={{ borderRight: '7px solid  #c6c1c9' }}
    iconStyle={{ background: '#fcba03', color: '#fff' }}
    icon={<GradIcon />}
  >
    <h3 className="vertical-timeline-element-title"> Graduation </h3>
    <h4 className="vertical-timeline-element-subtitle"> BIT Mesra, Ranchi, India </h4>
    <h6>2011 - 2015</h6>
  </VerticalTimelineElement>
                   </VerticalTimeline>
               </div>
            </div>
          </div>
      </div>
    );
  }
  
  export default Timeline;