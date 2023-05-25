import { Outlet } from "react-router-dom";
import Header from "../components/header/Header";
import "./RootLayout.scss";


const RootLayout = () => {

    const isAuth = localStorage.getItem("token");

    return (
        <div className="root-container">
            {isAuth && <Header />}
            <Outlet />
        </div>
    );
}

export default RootLayout