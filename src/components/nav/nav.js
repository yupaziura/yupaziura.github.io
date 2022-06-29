// basic
import {React, useState} from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import {main, mainUA} from '../../db/db';
import useMediaQuery from '@mui/material/useMediaQuery';
import ClickAwayListener from '@mui/material/ClickAwayListener';



// components
import ThemeSwitcher from '../theme-switcher/switcher';
import LangSwitcher from '../language-switcher/lang-switcher';
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';

// styles
import './nav.scss';

const Nav = (props) => {
    
    const obj = props.language === 0? main : mainUA;
    const activeTheme = props.theme === 1? `_1` : props.theme === 2? `_2` : '';

    const matches = useMediaQuery('(max-width:992px)');
    
    const [sideBar, setSideBar] = useState(false);

    const close = () => {
        setSideBar(false);
    }

    const navigate = useNavigate();

    const arr = ['#about_me', "#studies", "#skills", "#experience", "#projects", "#footer"];


    const elems = obj.nav.map ((item, i)=> {
        return (
            <div key={i} className="nav__linkblock">
                <a  className="nav__link" href={arr[i]}>{item}</a> 
            </div>
        )
    })

    const location = useLocation();
    console.log(location.pathname)


    return (
        <>
            <nav className={`nav nav${activeTheme}`}>

                {matches? 
                    <>
                        {location.pathname === '/'? 
                            <>
                                <button onClick={()=> setSideBar(true)} className='nav__menu'>
                                    <MenuIcon/>
                                </button>
                            </>
                            :
                            <div className="nav__linkblock">
                                <a  className="nav__link" onClick={()=> navigate(-1)}>{obj.back}</a> 
                            </div>
                        }
                        
                        
                        <LangSwitcher language={props.language} setLanguage={props.setLanguage}/>
                        <ThemeSwitcher language={props.language} setTheme={props.setTheme} theme={props.theme}/>

                        {
                            sideBar? 
                            <ClickAwayListener onClickAway={close}>
                                <div className={`bar bar${activeTheme}`}>
                                   <button onClick={()=> close()} className='bar__close'>
                                        <CloseIcon/> 
                                   </button>
                                   <ul onClick={()=> close()}>
                                        {elems}
                                   </ul>
                                </div>
                            </ClickAwayListener>
                            :
                            null
                        }
                    </>
                    :
                    <>
                        {location.pathname === '/'? 
                        <>
                            {elems}
                        </>
                            :
                            <div className="nav__linkblock">
                                <a  className="nav__link" onClick={()=> navigate(-1)}>{obj.back}</a> 
                            </div>
                        }
                        <button onClick={()=>props.setLanguage(1)} className={`nav__linkblock nav__linkblock_language ${props.language === 1? 'nav__linkblock_language_active' : ''}`}>
                        🇺🇦
                        </button>
                        <button onClick={()=>props.setLanguage(0)} className={`nav__linkblock nav__linkblock_language ${props.language === 0? 'nav__linkblock_language_active' : ''}`}>
                        🇬🇧
                        </button>
                        <ThemeSwitcher language={props.language} setTheme={props.setTheme} theme={props.theme}/>

                    </>
                }
            </nav>
        </>
    )
}

export default Nav;