import React from "react";
import { Banner } from "../components/banner/banner";
import { Featuredrooms } from "../components/featured rooms/featuredrooms";
import { Footer } from "../components/footer/footer";
import { Header } from "../components/header/header";
import { Service } from "../components/service/service";

function Home() {
    return(
        <div>
            <Header />
            <Banner />
            <Service />
            <Featuredrooms />
            <Footer />
        </div>
    )
}

export{Home}











