// basic
import * as React from 'react';
import {studies, studiesUA} from '../../db/db';

// components
import Title from '../../components/title/title';
import MyTimelineItem from '../../components/timeline-item/timeline-item';
import Timeline from '@mui/lab/Timeline';
import FastfoodIcon from '@mui/icons-material/Fastfood';

// styles
import './studies.scss';





const Studies = (props) => {
  const obj = props.language === 0? studies : studiesUA;

  const elems = obj.stud.map ((item, i)=> {
    return (
      <MyTimelineItem key={i} side={0} text={item.text} header={item.title} interval={item.interval}>
        <FastfoodIcon />
      </MyTimelineItem>
    )
  })


    return (
        <>
            <div className="container" id='studies'>
                <Title text = {obj.title}/>

                <Timeline position="alternate">
{elems}
      
    </Timeline>
            </div>
        </>
    )
}

export default Studies;