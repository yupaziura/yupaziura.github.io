// basic

// components

// styles
import './text-area.scss';

const TextArea = (props) => {
    const activeTheme = props.theme === 1? `_1` : props.theme === 2? `_2` : '';
  

    return (
        <>
            <div className={`text_area text_area${activeTheme}`}>
                {props.children}
            </div>
        </>
    )
}

export default TextArea;