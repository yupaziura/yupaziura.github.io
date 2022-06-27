// basic
import {experience, experienceUA} from '../../db/db';
import useMediaQuery from '@mui/material/useMediaQuery';


// conponents
import Title from "../../components/title/title";
import Timeline from '@mui/lab/Timeline';
import WorkIcon from '@mui/icons-material/Work';
import MyTimelineItem from '../../components/timeline-item/timeline-item';
import Tip from '../../components/tip/tip';


// styles
import './experience.scss';

const Experience = (props) => {
    const obj = props.language === 0? experience : experienceUA;
    const activeTheme = props.theme === 1? `_1` : props.theme === 2? `_2` : '';

    const matches = useMediaQuery('(max-width:768px)');
    const tlType = matches? 'right' : 'alternate';
  


    const elems = obj.work.map ((item, i)=> {
        return (
          <MyTimelineItem arr={item.detail} rotetable={true} key={i} side={0} text={item.text} header={item.title} interval={item.interval} company={item.company} theme={props.theme}>
            <WorkIcon />
          </MyTimelineItem>
        )
    })

    return ( 
        <>
            <div className={` experience experience${activeTheme}`} id='experience'>
                <div className="container">
                <Title text={obj.titlle} theme={props.theme}/>

                {matches? 
                    <>
                        <Tip text={obj.tip} theme={props.theme}/>
                    </>
                    :
                    null
                }

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

                <Timeline position={tlType}>
                    {elems}
                </Timeline>
                </div>
                
            </div>
        </>
    )
}

export default Experience;
