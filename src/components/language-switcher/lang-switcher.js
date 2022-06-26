// basic
import {React, useState} from 'react';
import ClickAwayListener from '@mui/material/ClickAwayListener';

// components
import TranslateIcon from '@mui/icons-material/Translate';
// styles
import './lang-switcher.scss';

const LangSwitcher = (props) => {
    const [show, setShow] = useState(false);


    const activeClass = show? '_active' : '';
    const choose = (num) => {
        props.setLanguage(num);
        
        setShow(false);
    }
    const close = () => {
        setShow(false);
    }
    return (
        <div className='lang-switcher'>
            <ClickAwayListener onClickAway={close}>
                <div>
                    <button className='switcher__button' onClick={()=> {setShow(!show)}}>
                        <TranslateIcon/>
                    </button>
                    
                    <div className={`lang-menu lang-menu${activeClass} `}>
                        <ul>
                            <li className="menu__item">
                                <button onClick={()=>choose(1)} className={`nav__linkblock nav__linkblock_language ${props.language === 1? 'nav__linkblock_language_active' : ''}`}>
                                    🇺🇦
                                </button>
                            </li>
                                
                            <li className="menu__item">
                                <button onClick={()=>choose(0)} className={`nav__linkblock nav__linkblock_language ${props.language === 0? 'nav__linkblock_language_active' : ''}`}>
                                    🇬🇧
                                </button>
                            </li>
                        </ul>
                    </div>
                </div>
            </ClickAwayListener>
        </div>
    )
}

export default LangSwitcher;