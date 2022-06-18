// basic

// components

// styles
import './nav.scss';

const Nav = () => {
    return (
        <>
            <nav className="nav">
                <div className="nav__linkblock">
                    <a className="nav__link" href="#">About me</a> 
                </div>
                <div className="nav__linkblock">
                    <a className="nav__link" href="#">Studies and courses</a> 
                </div>
                <div className="nav__linkblock">
                    <a className="nav__link" href="#">Experience</a>
                </div>
            </nav>
        </>
    )
}

export default Nav;