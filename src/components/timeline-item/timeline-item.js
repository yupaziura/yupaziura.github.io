// basic
import {React, useState} from 'react';

// components
import TextArea from '../text-area/text-area';
import TimelineItem from '@mui/lab/TimelineItem';
import TimelineSeparator from '@mui/lab/TimelineSeparator';
import TimelineConnector from '@mui/lab/TimelineConnector';
import TimelineContent from '@mui/lab/TimelineContent';
import TimelineDot from '@mui/lab/TimelineDot';


// styles
import './timeline-item.scss';



const MyTimelineItem = (props) =>{
    const activeTheme = +props.theme === 1? `_1` : +props.theme === 2? `_2` : '';
    const [side, setSide] = useState(false);
    const mainContent = 
                    <>
                        <h3>
                            {props.header}
                        </h3>
                        <h4>
                            {props.company}
                        </h4>
                        <p spyle={{}}>{props.interval}</p>
                        <br/>
                        <p>{props.text}</p>
                    </>

    const detailedContent = 
                    <>
                        <ul>
                            {props.arr?.map((item, i) => {
                                return (
                                    <li style={{marginLeft: '10px'}} key={i}>
                                        {item}
                                    </li>
                                )
                            })}
                        </ul>
                    </>

    


    const elem = 
        <>
            <TimelineContent  onClick={() => {setSide(!side)}} >
                <TextArea theme={props.theme} >
                    {!props.rotetable? mainContent : !side? mainContent  : detailedContent}
                </TextArea>
            </TimelineContent>
        </>

    const separator = 
        <>
            <TimelineSeparator sx={{mx: 3}} className={`dot dot${activeTheme}`}>
                    <TimelineConnector  />
                    <TimelineDot  sx={{p:2}}>
                        {props.children}
                    </TimelineDot>
                    <TimelineConnector  />
                </TimelineSeparator>
        </>

    return (
       
        <TimelineItem>
            {separator}
            {elem}
        </TimelineItem>
       
    
    )
}

export default MyTimelineItem;