// basic

// components
import Nav from "../../components/nav/nav";

// styles
import './main-page.scss';


const MainPage = () => {
    return (
        <div className="main">
            <Nav/>
            <div className="main__content">
                
                <div className="main__photo">
                    <img src="" alt="" />
                </div>

                <div className="main__headers">
                    <div><h1 className="main__headers_h1">Hi! My name is Yuliia Paziura</h1></div>
                    <div><h2 className="main__headers_h2">I am a web-developer </h2></div>
                </div>

            </div>
        </div>
    )
}

export default MainPage;