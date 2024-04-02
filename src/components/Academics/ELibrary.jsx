import React from "react";
import "slick-carousel/slick/slick.css";
import Slider from "react-slick";
import Header from "../common/Header";
import Footer from "../common/Footer";
import image from "/seb.jpg"



const LibraryItems = [
  {
    color: "bg-red-500",
    text: "hero text",
    image:
      "https://s3-alpha-sig.figma.com/img/eb1f/29f1/b200e7e8abde2e9e6967df28b54a097d?Expires=1713139200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=N5ihzogf2DpkgWjX~l9CmfaTHkxbbthKKzBFDPe428mU1O6Rbmt325pfar5l~xvXhpq1pd1KKeAt8O61239YIjZ9M-rnVGxCRH5sUqWpN5t01mBk1s8-DTA4ePS9fQ4gTHrvW1oyk88EAUYC0zZwh7i9FT~K2Z9DUny1D5vNoZDhJQV4XS7KJcVmvbk3i06N9XE2dNgjMjafQeBIsLoLyK-Oe0js6EulVSkTitwfEKoUkaEIA0rz81kUzBS8iBxyur~Vl06tDLW9-me4xYyhv1p4Xcm4gyTZgChp0guERZfQ60blVQNBm3Ya9WzaT-D18mPyPtnQKGZjDyVI83x6SQ__",
    id: 1,
  },
  {
    color: "bg-blue-500",
    text: "hero text",
    id: 2,
    image:
      "https://s3-alpha-sig.figma.com/img/eb1f/29f1/b200e7e8abde2e9e6967df28b54a097d?Expires=1713139200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=N5ihzogf2DpkgWjX~l9CmfaTHkxbbthKKzBFDPe428mU1O6Rbmt325pfar5l~xvXhpq1pd1KKeAt8O61239YIjZ9M-rnVGxCRH5sUqWpN5t01mBk1s8-DTA4ePS9fQ4gTHrvW1oyk88EAUYC0zZwh7i9FT~K2Z9DUny1D5vNoZDhJQV4XS7KJcVmvbk3i06N9XE2dNgjMjafQeBIsLoLyK-Oe0js6EulVSkTitwfEKoUkaEIA0rz81kUzBS8iBxyur~Vl06tDLW9-me4xYyhv1p4Xcm4gyTZgChp0guERZfQ60blVQNBm3Ya9WzaT-D18mPyPtnQKGZjDyVI83x6SQ__",
  },
];


function Elibrary() {

  const settings = {
    dots: false,
    arrows: true,
    infinite: true,
    speed: 1500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: false,
    autoplaySpeed: 2000,
    cssEase: "linear",
    pauseOnHover: true,
    pauseOnFocus: true,
    width: '100%',
    height: '300px',
  };


  return (
    <div>
      <Header/>
    <Slider {...settings}>
      {LibraryItems.map((items) => (
        <div
          key={items.id}
          className="h-[60vh] relative flex items-center flex-col text-center justify-center w-screen"
        >
          <img
            src={items.image}
            className="w-full z-[-1] h-full absolute top-0 right-0 object-cover self-center"
            alt=""
          />
          <div className="text-white h-full flex flex-col items-center bg-[#000068]/20 justify-center ">
            <p className="lg:text-2xl mt-10 text-base md:text-xl">
              The School Library
            </p>
          </div>
        </div>
      ))}
    </Slider>
    
     
     <div className="flex mt-5 flex-col md:flex-row justify-between gap-4 px-4 md:px12 lg:px-20">
    
     <div className="">
     <h5 className="text-xl font-bold mb-1 text-center w-full">The Library</h5>
     <p >
       At St Mary’s Mundika High School, our library isn't just a place to
       find books—it's a dynamic center of learning, discovery, and
       community engagement. Our mission is to foster a love of reading,
       promote information literacy, and support the academic success of
       every student. With a diverse collection of print and digital
       resources, innovative programs, and dedicated staff, we're here to
       help you explore, create, and achieve your academic goals. Dive into
       a world of knowledge and opportunity at our high school library
       today!
     </p>
     <h5 className="text-1xl font-bold mb-1">Library Mission</h5>
     <p>Empowering students to become lifelong learners and critical thinkers by providing access to diverse resources, fostering a culture of inquiry, and promoting a love of reading and exploration.</p>

     <h4 className="text-1xl font-bold mb-1 mt-8">
     <a href="http://koha.mmust.ac.ke:2048/login" className="text-blue-500 underline hover:text-blue-700">Here’s</a> a link to our E-Library! <br />Have Fun As you Explore.</h4>
     </div>
     <div>
     <img
     src={image}
         // src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT0p8us-zIoKW5lNYbA2E6_XeOIWBk_FFmCTg&s"
          alt="Library Image"
          className="w-[90%] max-h-[300px] object-cover"
        />
        <div className="text-center font-bold">
        <p>Mrs. Library</p>
        <p>School Librarian</p>

        <p>Library Vision</p>
        </div>

        <p>Our mission is to cultivate an inclusive and dynamic learning environment where every student can 
          thrive academically, intellectually, and personally. Through our comprehensive collection, 
          innovative programs, and collaborative partnerships, we aim to inspire curiosity, instill a passion 
          for learning, and equip students with the skills and knowledge needed to succeed in an ever-changing world</p>

        </div>
    
     </div>
     
    
     <div className="bg-cover mt-[5%] bg-no-repeat bg-[url('/book.jpg')]  h-[60vh] flex items-center flex-col text-center justify-center w-screen">
      <div className="h-full w-full bg-[rgba(0,0,0,.8)] text-white flex flex-col md:flex-row justify-evenly items-center">
        <div>
          <p>497</p>
        <h3 className="text-2xl font-bold mt-8 mb-4">Students Capacity</h3>
        </div>

        <div>
        <p>497</p>
        <h3 className="text-2xl font-bold mt-8 mb-4">Books Available</h3>
        </div>

        <div>
        <p>497</p>
        <h3 className="text-2xl font-bold mt-8 mb-4">Reference Books</h3>
        </div>
      </div>
     </div>
     
    
     <Footer/>
   </div>
   
  
  );
 

}
export default Elibrary;
