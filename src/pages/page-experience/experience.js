// basic
import {experience, experienceUA} from '../../db/db';

// conponents
import Title from "../../components/title/title";
import Timeline from '@mui/lab/Timeline';
import WorkIcon from '@mui/icons-material/Work';
import MyTimelineItem from '../../components/timeline-item/timeline-item';


// styles
import './experience.scss';

const Experience = (props) => {
    const obj = props.language === 0? experience : experienceUA;

    const elems = obj.work.map ((item, i)=> {
        return (
          <MyTimelineItem key={i} side={0} text={item.text} header={item.title} interval={item.interval} company={item.company}>
            <WorkIcon />
          </MyTimelineItem>
        )
    })

    return ( 
        <>
            <div className="container" id='experience'>
                <Title text={obj.titlle} />

                {/* <div className="experience">
                <div className="experience__item experience__item_1"></div>
                <div className="experience__item experience__item_2"></div>
                <div className="experience__item experience__item_3"></div>
                <div className="experience__item experience__item_4"></div>
                <div className="experience__item experience__item_5"></div>
                <div className="experience__item experience__item_6"></div>
                <div className="experience__item experience__item_7"></div>
                <div className="experience__item experience__item_8"></div>
                </div> */}

                <Timeline position="alternate">
                    {elems}
                </Timeline>
            </div>
        </>
    )
}

export default Experience;
