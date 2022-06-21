// basic
import React from 'react';

// components

// styles
import './title.scss';

const Title = (props) => {
    const activeTheme = props.theme === 1? `_1` : props.theme === 2? `_2` : '';

    return (
        <>
            <h3 className={`header_h3 header_h3${activeTheme}`}>{props.text}</h3>
        </>
    )
}
export default Title;