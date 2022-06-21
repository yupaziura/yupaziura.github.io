// basic

// conponents
import TextArea from '../text-area/text-area';

// styles
import './card.scss';

const Card = (props) => {
    return (
        <>
            <div className="card">
                <TextArea theme={props.theme}>
                    <div className="card__img">
                        <img src="" alt="" />
                    </div>
                    <br/>
                    <h3> {props.header}</h3>
                    <p>
                        {props.text}
                    </p>
                </TextArea>
            </div>
        </>
    )
}

export default Card;