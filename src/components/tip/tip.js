// basic


// conponents
import EmojiObjectsIcon from '@mui/icons-material/EmojiObjects';
import TextArea from '../text-area/text-area';


// styles


const Tip = (props) => {
    return (
        <>
            <div className="tip">
                
                <TextArea theme={props.theme}>
                    <EmojiObjectsIcon/>
                    <h4>
                        {props.text}
                    </h4>
                    
                </TextArea>
            </div>
        </>
    )
}

export default Tip;