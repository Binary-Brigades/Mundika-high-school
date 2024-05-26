import { useState } from "react"
import News from "./News"
import Events from "./Events"
const NewsComponent = () => {
    const [Event, setEvent] = useState(false)

    
    return (
        <div className="w-screen px-4 md:px-12 lg:px-24 mt-4 flexx flex-col">
            <div className="w-full justify-start flex flex-row gap-[5em]">
                <button onClick={()=>setEvent(false)} className={`p-2 md:p-3  text-xl focus:font-semibold transition-all duration-500 ease-in-out decoration-[#590000]/80 underline-offset-8 rounded-md decoration-4 ${!Event? 'underline bg-gray-200':''}`}>News</button>
                <button onClick={()=>setEvent(true)} className={`p-2 md:p-3 text-xl focus:font-semibold transition-all duration-500 ease-in-out focus:decoration-[#590000]/80 underline-offset-8 rounded-md decoration-4 ${Event? 'underline bg-gray-200':''}`}>Events</button>
            </div>
            {Event ? (
                <Events/>
            ) : (
                <News/>
            )}
        </div>
    )
}
export default NewsComponent