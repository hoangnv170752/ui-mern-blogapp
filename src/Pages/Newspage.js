import React, { useEffect, useState } from "react";
import {Link} from "react-router-dom";
import { NewsContextProvider } from "../Components/News/NewsContext";
import News from "../Components/News/News";
import Navbar from "../Components/Navbar/Navbar.jsx";
import "./News.css";

function Newspage() {
    return(
        <div>
            <Navbar />
            <NewsContextProvider>
                <News />
            </NewsContextProvider> 
        </div>
    );
}

export default Newspage;
