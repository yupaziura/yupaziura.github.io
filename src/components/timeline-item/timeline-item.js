// basic
import {React, useState} from 'react';
import useMediaQuery from '@mui/material/useMediaQuery';


// components
import TextArea from '../text-area/text-area';
import TimelineItem from '@mui/lab/TimelineItem';
import TimelineSeparator from '@mui/lab/TimelineSeparator';
import TimelineConnector from '@mui/lab/TimelineConnector';
import TimelineContent from '@mui/lab/TimelineContent';
import TimelineDot from '@mui/lab/TimelineDot';
import ReactCardFlip from "react-card-flip";



// styles
import './timeline-item.scss';



const MyTimelineItem = (props) =>{
    const activeTheme = +props.theme === 1? `_1` : +props.theme === 2? `_2` : '';
    const [side, setSide] = useState(false);
    const matches = useMediaQuery('(max-width:768px)');

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
        {props.rotable === false? 
            <TimelineContent sx={{py: 3}} >
                <TextArea theme={props.theme} >
                    {mainContent}
                </TextArea> 
            </TimelineContent>
            : 
            <TimelineContent sx={{py: 3}}   onClick={() => {setSide(!side)}}>
                <ReactCardFlip isFlipped={side} flipDirection="horizontal">
                    <TextArea theme={props.theme} >
                        {mainContent}
                    </TextArea>
                    <TextArea theme={props.theme} >
                        {detailedContent}
                    </TextArea>
                </ReactCardFlip>
            </TimelineContent>
        }
        </>

    const separator = 
        <>
            <TimelineSeparator sx={{mx: matches? 0 : 3}} className={`dot dot${activeTheme}`}>
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