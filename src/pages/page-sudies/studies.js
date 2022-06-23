// basic
import * as React from 'react';
import {studies, studiesUA} from '../../db/db';

// components
import Title from '../../components/title/title';
import MyTimelineItem from '../../components/timeline-item/timeline-item';
import Timeline from '@mui/lab/Timeline';
import SchoolIcon from '@mui/icons-material/School';

// styles
import './studies.scss';





const Studies = (props) => {
  const obj = props.language === 0? studies : studiesUA;
  const activeTheme = +props.theme === 1? `_1` : +props.theme === 2? `_2` : '';


  const elems = obj.stud.map ((item, i)=> {
    return (
      <MyTimelineItem key={i} side={0} text={item.text} header={item.title} interval={item.interval} theme={props.theme} rotable={false}>
        <SchoolIcon />
      </MyTimelineItem>
    )
  })


    return (
      <div className={`studies studies${activeTheme}`}>
        <div className="container" id='studies'>
          <Title text = {obj.title} theme={props.theme}/>

          <Timeline position="alternate">
            {elems}
          </Timeline>
        </div>
      </div>
    )
}

export default Studies;