// basic

// conponents

// styles
import './footer.scss';

const Footer = () => {
    return (
        <>
            <div className="footer" id='footer'>
                <div className="footer__info">
                    <p>
                        This website was created using React framework.
                        <br/><br/>
                        Libraries I used in this project:
                    </p>
                    <ul>
                        <li>
                            Material UI
                        </li>
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