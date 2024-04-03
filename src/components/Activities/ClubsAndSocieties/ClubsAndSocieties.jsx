import Sidebar from "../../common/Sidebar";
import { useState } from "react";
import Header from "../../common/Header";
import Footer from "../../common/Footer";

const clubs = [
  {
    name: "Drama Club",
    img: "https://3.files.edl.io/60c8/18/10/22/171316-6ff283a1-280f-4d70-b616-ae77c12c4488.jpg",
  },
  {
    name: "Music Club",
    img: "https://media.istockphoto.com/id/153867731/vector/exhibition-of-a-song.jpg?s=612x612&w=0&k=20&c=Gdp5K96KyECaTERr6M468PZlknVg2a4V_VIM9eKBDNw=",
  },
  {
    name: "Art Club",
    img: "https://www.stickylife.com/media/catalog/category/Art_Club.png",
  },
  {
    name: "Debate Club",
    img: "https://www.monticelloacademy.org/application/files/cache/thumbnails/e44796d27b75690e3be2c94b94b4b795.png",
  },
  {
    name: "Science Club",
    img: "https://clpmag.com/wp-content/uploads/2022/09/clinical-laboratory-technician.jpg",
  },
  {
    name: "Maths Club",
    img: "https://3.files.edl.io/3721/20/12/21/230753-105f34cf-85fa-4905-b355-51f27a6aad5e.png",
  },
  {
    name: "Literature Club",
    img: "https://www.kpl.gov/app/uploads/2023/08/CTA-YA-Banned-Book-Club@72x-1536x864.png",
  },
  {
    name: "Environment Club",
    img: "https://www.baysidehighschool.org/ourpages/auto/2023/3/3/48488454/recycle.jpg?rnd=1677829228461",
  },
  {
    name: "Scouts",
    img: "https://thumbs.dreamstime.com/z/scouting-isolated-cartoon-vector-illustration-scout-boy-uniform-high-school-activity-american-explorer-student-club-tourist-261545351.jpg?ct=jpeg",
  }
];

function ClubsAndSocieties() {
  const [showSideBar, setShowSidebar] = useState(false);
  return (
    <div className="w-[100vw]">
      <Header setShowSidebar={setShowSidebar} />
      <Sidebar showSideBar={showSideBar} />
      <div className="pt-24 md:px-24 px-2">
        <h1 className="text-xl text-bold text-center mb-4">
          Clubs And Societies
        </h1>
        <div className="flex gap-4 flex-col w-full md:flex-row items-center">
          <p className="w-full">
            Whether you're passionate about the arts, sciences, sports, or
            community service, our clubs and societies provide the perfect
            platform to pursue your interests. From drama club to robotics team,
            from debate society to environmental club, our offerings cater to a
            wide array of talents and interests. <br/>Joining a club or society is
            more than just a extracurricular activity – it's a chance to develop
            leadership skills, collaborate with peers, and make a positive
            impact both within the school community and beyond. With dedicated
            faculty advisors and enthusiastic student leaders guiding each
            group, you'll have the support you need to thrive and succeed.
          </p>
          <img
            className="h-72 w-full md:w-1/2 object-cover rounded-md"
            src="https://scontent.fmba5-1.fna.fbcdn.net/v/t1.6435-9/36837424_2130462343633653_5751953638847152128_n.jpg?stp=dst-jpg_p180x540&_nc_cat=108&ccb=1-7&_nc_sid=5f2048&_nc_ohc=irwWU3_qhpMAX857LNY&_nc_pt=1&_nc_ht=scontent.fmba5-1.fna&cb_e2o_trans=q&oh=00_AfB6Jj8biDoFKpg1rFVbpEMoUlg4K0lNz_KuFpoFYb4o4A&oe=66348C3F"
            alt=""
          />
        </div>
        <h1 className="text-bold text-xl my-4">Our Clubs</h1>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-2 md:gap-4">
          {clubs.map((club, index) => (
            <div
              key={index}
              className="flex h-full w-full relative flex-col items-center rounded-md overflow-hidden"
            >
              <img className="h-full w-full " src={club.img} alt={club.name} />
              <div className="bg-[#590000]/40 h-full flex justify-center items-center  absolute top-0  w-full">
                <p className="text-xl text-center text-bold text-[#fff]">
                  {club.name}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default ClubsAndSocieties;
