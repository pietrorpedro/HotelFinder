import { HashRouter, Route, Routes } from "react-router-dom";

import MainLayout from "./layout/MainLayout/MainLayout";
import Details from "./pages/details/Details";
import Home from "./pages/home/Home";
import Hotels from "./pages/hotels/Hotels";
import Profile from "./pages/profile/Profile";

const AppRouter = () => {
    return (
        <HashRouter>
            <Routes>
                <Route path="/" element={<MainLayout/>}>
                    <Route index element={<Home/>}/>
                    <Route path="detalhe/:id" element={<Details/>}/>
                    <Route path="perfil" element={<Profile/>}/>
                    <Route path="hoteis" element={<Hotels/>}/>
                </Route>
            </Routes>
        </HashRouter>
    )
}

export default AppRouter;