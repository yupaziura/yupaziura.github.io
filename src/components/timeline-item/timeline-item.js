// basic

// components
import Title from '../../components/title/title';
import TextArea from '../text-area/text-area';

// styles


import * as React from 'react';
import Timeline from '@mui/lab/Timeline';
import TimelineItem from '@mui/lab/TimelineItem';
import TimelineSeparator from '@mui/lab/TimelineSeparator';
import TimelineConnector from '@mui/lab/TimelineConnector';
import TimelineContent from '@mui/lab/TimelineContent';
import TimelineOppositeContent from '@mui/lab/TimelineOppositeContent';
import TimelineDot from '@mui/lab/TimelineDot';
import FastfoodIcon from '@mui/icons-material/Fastfood';
import LaptopMacIcon from '@mui/icons-material/LaptopMac';
import HotelIcon from '@mui/icons-material/Hotel';
import RepeatIcon from '@mui/icons-material/Repeat';
import Typography from '@mui/material/Typography';


const MyTimelineItem = (props) =>{

    const elem = 
        <>
            <TimelineContent sx={{py: 4}}>
                <TextArea>
                    <h3>
                        {props.header}
                    </h3>
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