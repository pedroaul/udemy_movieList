import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/home";
import Details from "./pages/details";
import Header from "./components/header";

function RoutesApp() {
    return(
        <BrowserRouter>
            <Header />
            <Routes>
                <Route path="/" element={ <Home/> } />
                <Route path="/details/:id" element={ <Details/> } />
            </Routes>
        </BrowserRouter>
    )
}

export default RoutesApp;