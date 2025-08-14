import { Outlet } from "react-router-dom";
import NavBar from "../components/NavBar";
import FooterBar from "../components/FooterBar";

function Layout() {
    return (
        <>
            <div className="p-12 md:p-20 xl:pl-80 xl:pr-80 overflow-x-hidden">
                <NavBar />
                <Outlet />
                <FooterBar />
            </div>
        </>
    )
}

export default Layout