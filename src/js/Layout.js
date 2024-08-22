import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import ScrollToTop from "./component/scrollToTop";
import { Home } from "./views/home";
import { Demo } from "./views/demo";
import { Single } from "./views/single";

import injectContext from "./store/appContext";
import { Footer } from "./component/footer";
import Navbar from "./component/Navbar";
import DetailsPeople from "./views/DetailsPeople";
import DetailsPlanets from "./views/DetailsPlanets";
import DetailsVehicles from "./views/DetailsVehicles";



const Layout = () => {
    //the basename is used when your project is published in a subdirectory and not in the root of the domain
    // you can set the basename on the .env file located at the root of this project, E.g: BASENAME=/react-hello-webapp/
    const basename = process.env.BASENAME || "";

    return (
        <div>
            <BrowserRouter basename={basename}>
                <ScrollToTop>
                    <Navbar />
                    <Routes>
                        <Route path="/" element={<Home />} />
                        <Route path="/demo" element={<Demo />} />
                        <Route path="/single/:theid" element={<Single />} />
                        {/* Usa la ruta correcta para los personajes */}

                        <Route path="/people/:id" element={<DetailsPeople />} />
                        <Route path="/planets/:id" element={<DetailsPlanets />} />
                        <Route path="/vehicles/:id" element={< DetailsVehicles/>} />
                        <Route path="*" element={<h1>Not found!</h1>} />
                    </Routes>
                    <Footer />
                </ScrollToTop>
            </BrowserRouter>
        </div>
    );
};

export default injectContext(Layout);

