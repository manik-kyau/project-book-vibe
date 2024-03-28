import { Outlet } from "react-router-dom";
import NavBar from "../NavBar/NavBar";

const MainLayout = () => {
    return (
        <div className="max-w-[1280px] mx-auto px-5 lg:px-0">
            <NavBar></NavBar>
            <Outlet></Outlet>
        </div>
    );
};

export default MainLayout;