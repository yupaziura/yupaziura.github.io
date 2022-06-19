// basic
import React from 'react';

// components

// styles
import './title.scss';

const Title = (props) => {
    return (
        <>
            <h3 className='header_h3'>{props.text}</h3>
        </>
    )
}
export default Title;