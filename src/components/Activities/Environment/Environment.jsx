import Sidebar from "../../common/Sidebar";
import { useState } from "react";
import Header from "../../common/Header";
import Footer from "../../common/Footer";
import EnvironmentHero from "./EnvironmentHero"

function Environment() {
    const [showSideBar, setShowSidebar] = useState(false);
    return (
        <div className="w-[100vw]">
            <Header setShowSidebar={setShowSidebar} />
            <Sidebar showSideBar={showSideBar} />
            <EnvironmentHero />
            <div className="pt-24 md:px-24 px-2">
                <h1 className="text-xl text-bold text-center mb-4">
                    Environment and Social Activities
                </h1>
            </div>
            <Footer/>
        </div>    
    )
    
}
export default Environment;