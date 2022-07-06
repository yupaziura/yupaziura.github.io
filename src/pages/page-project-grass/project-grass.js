// basic

// conponents
import TextArea from '../../components/text-area/text-area';

// styles
import './project-grass.scss';

const ProjectGrass = (props) => {
    // const obj = props.language === 0? projectWeb : projectWebUA;
    const activeTheme = props.theme === 1? `_1` : props.theme === 2? `_2` : '';


    return (
        <div className={`grass grass${activeTheme}`}>

            
                <div className="container grass__block">

                <TextArea theme={props.theme}>
                    <div className="sketchfab-embed-wrapper"> 
                        <iframe className='frame' title="reduce" frameBorder="0"  mozallowfullscreen="true" webkitallowfullscreen="true" allow="autoplay; fullscreen; xr-spatial-tracking"  src="https://sketchfab.com/models/d5198959a113453e9eb68b8d2d63336a/embed?autostart=1&camera=0">
                        </iframe>
                    </div>
                </TextArea>

                <TextArea theme={props.theme}>
                    <div className="sketchfab-embed-wrapper"> 
                        <iframe className='frame' title="series" frameBorder="0"  mozallowfullscreen="true" webkitallowfullscreen="true" allow="autoplay; fullscreen; xr-spatial-tracking"  src="https://sketchfab.com/models/24eec5d40a6f4221adbab3c675fa6990/embed?autostart=1&camera=0">
                        </iframe>
                    </div>
                </TextArea>

                <TextArea theme={props.theme}>
                    <div className="sketchfab-embed-wrapper"> 
                        <iframe className='frame' title="series" frameBorder="0"  mozallowfullscreen="true" webkitallowfullscreen="true" allow="autoplay; fullscreen; xr-spatial-tracking"  src="https://sketchfab.com/models/0c9632dacd1d44a083718cd95d671fd5/embed?autostart=1&camera=0">
                        </iframe>
                    </div>
                </TextArea>

                <TextArea theme={props.theme}>
                    <div className="sketchfab-embed-wrapper"> 
                        <iframe className='frame' title="series" frameBorder="0"  mozallowfullscreen="true" webkitallowfullscreen="true" allow="autoplay; fullscreen; xr-spatial-tracking"  src="https://sketchfab.com/models/b8d77ee6d891427cbbcdb360de62f20f/embed?autostart=1&camera=0">
                        </iframe>
                    </div>
                </TextArea>

                </div>
            
            
        </div>
    )
}

export default ProjectGrass;