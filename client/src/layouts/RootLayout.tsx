import { Outlet } from "react-router-dom";
import "./RootLayout.scss";


const RootLayout = () => {


    return (
        <div className="root-container">
            <header>header</header>
            <Outlet />
        </div>
    );
}

export default RootLayout