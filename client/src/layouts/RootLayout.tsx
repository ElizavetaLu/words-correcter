import { Outlet } from "react-router-dom";
import Header from "../components/header/Header";
import "./RootLayout.scss";
import Modal from "../components/modal/Modal";


const RootLayout = () => {

    const isAuth = localStorage.getItem("token");

    return (
        <div className="root-container">
            <Modal />
            {isAuth && <Header />}
            <Outlet />
        </div>
    );
}

export default RootLayout