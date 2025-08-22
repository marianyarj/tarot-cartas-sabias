import { createBrowserRouter } from "react-router-dom";
import Layout from "../layout/Layout";
import Home from "../pages/Home";
import CardDetail from "../pages/CardDetail";
import TarotReading from "../pages/TarotReading";

const routerTarot = createBrowserRouter([
    {
        path: "/",
        element: <Layout />,
        children: [
            {
                path: "",
                element: <Home />,
                children: [
                    {
                        path: "/carddetail/:id",
                        element: <CardDetail />
                    },
                ]
            },
            {
                path: "/tarotreading",
                element: <TarotReading />
            }
        ]
    }
])

export default routerTarot;