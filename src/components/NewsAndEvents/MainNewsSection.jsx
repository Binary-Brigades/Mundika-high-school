const MainNewsSection = () => {
    return (
        <main className="w-screen h-[340px] bg-[url('/games.png')] bg-no-repeat bg-cover">
            <div className="w-full text-base md:text-lg gap-4  text-white h-full flex flex-col p-4 text-center justify-center items-center bg-gradient-to-r from-[rgba(0,0,0,.5)] to-[rgba(200,70,80,.8)]">
                <h1 className="tracking-wider md:tracking-widest text-2xl md:text-3xl font-semibold">Latest News & Events</h1>
                <p>Stay updated with the latest new and events</p>
            </div>
         </main>
     )
}
 export default MainNewsSection