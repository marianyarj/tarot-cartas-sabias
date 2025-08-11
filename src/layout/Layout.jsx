import { Outlet } from "react-router-dom";
import NavBar from "../components/NavBar";
import FooterBar from "../components/FooterBar";

function Layout() {
    return (
        <>
            <NavBar />
            <Outlet />
            <FooterBar />
        </>
    )
}

export default Layout