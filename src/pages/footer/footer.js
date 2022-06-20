// basic
import {footer, footerUA} from '../../db/db';

// conponents

// styles
import './footer.scss';

const Footer = (props) => {
    const obj = props.language === 0? footer : footerUA;

    const elems = obj.libList.map((item, i) => {
        return (
                <li key={i}>
                    {item}
                </li>
        )
    })

    return (
        <>
            <div className="footer" id='footer'>
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

                <div className="footer__contacts">
                    <div className="footer__contact footer__contact_email">
                        <div className="footer__img"></div>
                        <div >yuliiapaziura@gmail.com</div>
                    </div>
                    <div className="footer__contact telegram">
                        <div className="footer__img"></div>
                        <a href='https://t.me/yupaziura' >Telegram</a>
                    </div>
                    <div className="footer__contact facebook">
                        <div className="footer__img"></div>
                        <a href='https://www.facebook.com/profile.php?id=100010341139078' >Facebook</a>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Footer;