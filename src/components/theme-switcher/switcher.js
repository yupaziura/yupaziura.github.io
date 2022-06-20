// basic
import {React, useState} from 'react';
import ClickAwayListener from '@mui/material/ClickAwayListener';

// components
import BrushIcon from '@mui/icons-material/Brush';

// styles
import './switcher.scss';

const ThemeSwitcher = (props) => {
    const [show, setShow] = useState(false);
    const activeTheme = props.theme === 1? `_1` : props.theme === 2? `_2` : '';


    const activeClass = show? '_active' : '';
    const choose = (num) => {
        props.setTheme(num);
        
        setShow(false);
    }
    const close = () => {
        setShow(false);
    }
    return (
        <div className='switcher'>
            <ClickAwayListener onClickAway={close}>
                <div>
        <button className='switcher__button' onClick={()=> {setShow(!show)}}>
            <BrushIcon/>
        </button>
        
        <div className={`menu menu${activeClass} menu${activeTheme}`}>
            <ul>
                <li onClick={()=>choose(0)} className="menu__item">1</li>
                <li onClick={()=>choose(1)} className="menu__item">2</li>
                <li onClick={()=>choose(2)} className="menu__item">3</li>
            </ul>
        </div>
        </div>
        </ClickAwayListener>
        </div>
    )
}

export default ThemeSwitcher;