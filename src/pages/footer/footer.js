// basic
import {footer, footerUA} from '../../db/db';

// conponents
import GitHubIcon from '@mui/icons-material/GitHub';
import EmailIcon from '@mui/icons-material/Email';
import TelegramIcon from '@mui/icons-material/Telegram';
import FacebookIcon from '@mui/icons-material/Facebook';

// styles
import './footer.scss';

const Footer = (props) => {
    const obj = props.language === 0? footer : footerUA;
    const activeTheme = props.theme === 1? `_1` : props.theme === 2? `_2` : '';


    const elems = obj.libList.map((item, i) => {
        return (
                <li key={i}>
                    {item}
                </li>
        )
    })

    return (
        <>
            <div className={`footer footer${activeTheme}`} id='footer'>
            <div className="footer__contacts">
                    <div className="footer__contact footer__contact_email">
                        <div className="footer__img"><EmailIcon/></div>
                        <a href='mailto:yuliiapaziura@gmail.com' >yuliiapaziura@gmail.com</a>
                    </div>
                    <div className="footer__contact telegram">
                        <div className="footer__img"><TelegramIcon/></div>
                        <a href='https://t.me/yupaziura' >Telegram</a>
                    </div>
                    <div className="footer__contact facebook">
                        <div className="footer__img"><FacebookIcon/></div>
                        <a href='https://www.facebook.com/profile.php?id=100010341139078' >Facebook</a>
                    </div>
                    <div className="footer__contact github">
                        <div className="footer__img"><GitHubIcon/></div>
                        <a href='https://github.com/yupaziura' >Github</a>
                    </div>
                </div>

                <div className="footer__info">
                    <p>
                        {obj.framework}
                        <br/><br/>
                        {obj.libraries}
                    </p>
                    <ul>
                       {elems} 
                    </ul>
                </div>

            </div>
        </>
    )
}

export default Footer;