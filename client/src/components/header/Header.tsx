import { NavLink } from "react-router-dom";

import LogoTitle from "../logo-title/LogoTitle";
import "./Header.scss";


const Header = () => {

    return (
        <header className="header">
            <LogoTitle />

            <div className="header__right">
                <NavLink to='/profile' className="header__user">
                    <p className="header__user-name">Name Lastname</p>
                    <div className="header__avatar">
                        <img className="header__avatar-icon" src="/images/icons/profile.png" alt="profile" />
                    </div>
                </NavLink>
                <button className="header__button" onClick={() => { }}>log out</button>
            </div>
        </header>
    )
}

export default Header