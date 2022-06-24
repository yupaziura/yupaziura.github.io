// basic

// conponents
import TextArea from '../text-area/text-area';
import Rating from '@mui/material/Rating';
import test from '../../img/icons/html.svg';

// styles
import './card.scss';

const Card = (props) => {
    const activeTheme = props.theme === 1? `_1` : props.theme === 2? `_2` : '';

    return (
        <>
            <div className={`card card${activeTheme}`}>
                <TextArea theme={props.theme}>
                    <div className="card__img">
                        {/* <img src={require('../../img/icons/html.svg')} alt="" /> */}
                        {props.children}
                    </div>
                    <br/>
                    <h3> {props.header}</h3>
                    <Rating className={`rate rate${activeTheme}`} readOnly size="small" max={10} value={props.rate}/>
                    <p>
                        {props.text}
                    </p>
                </TextArea>
            </div>
        </>
    )
}

export default Card;