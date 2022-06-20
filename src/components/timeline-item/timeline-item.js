// basic
import * as React from 'react';

// components
import TextArea from '../text-area/text-area';
import TimelineItem from '@mui/lab/TimelineItem';
import TimelineSeparator from '@mui/lab/TimelineSeparator';
import TimelineConnector from '@mui/lab/TimelineConnector';
import TimelineContent from '@mui/lab/TimelineContent';
import TimelineDot from '@mui/lab/TimelineDot';


// styles




const MyTimelineItem = (props) =>{

    const elem = 
        <>
            <TimelineContent >
                <TextArea>
                    <h3>
                        {props.header}
                    </h3>
                    <h4>
                        {props.company}
                    </h4>
                    <p spyle={{}}>{props.interval}</p>
                    <br/>
                    <p>{props.text}</p>
                </TextArea>
            </TimelineContent>
        </>

    const separator = 
        <>
            <TimelineSeparator sx={{mx: 3}}>
                    <TimelineConnector />
                    <TimelineDot sx={{p:2}}>
                        {props.children}
                    </TimelineDot>
                    <TimelineConnector />
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