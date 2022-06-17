// basic

// components

// styles
import './text-area.scss';

const TextArea = (props) => {
    return (
        <>
            <div className="text_area">
                {props.children}
            </div>
        </>
    )
}

export default TextArea;