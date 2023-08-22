import { Outlet } from "react-router-dom";
import Footer from "../pages/SharedPage/Footer/Footer";
import NavBar from "../pages/SharedPage/NavBar/NavBar";

const MainLayoute = () => {
    return (
        <div>
            <NavBar></NavBar>
            <Outlet></Outlet>
            <Footer></Footer>
        </div>
    );
};

export default MainLayoute;