import Sidebar from "../../common/Sidebar";
import { useState } from "react";
import Header from "../../common/Header";
import Footer from "../../common/Footer";
import EnvironmentHero from "./EnvironmentHero"
import EnvironmentActivities from "./Environment Activities"

function Environment() {
    const [showSideBar, setShowSidebar] = useState(false);
    return (
        <div className="w-[100vw]">
            <Header setShowSidebar={setShowSidebar} />
            <Sidebar showSideBar={showSideBar} />
            <EnvironmentHero />
            <EnvironmentActivities/>           
            <Footer/>
        </div>    
    )
    
}
export default Environment;