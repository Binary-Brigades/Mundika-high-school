import React from "react";
import "slick-carousel/slick/slick.css";
import Slider from "react-slick";


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
  };

  return (
    <div>
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
            <p className="lg:text-2xl mt-10 text-base md:text-lg">
              The School Library
            </p>
          </div>
        </div>
      ))}
    </Slider>
     <div className="flex flex-row lg:flex-row">
     <div className="lg:w-1/2 lg:mr-4">
     <h5 className="text-1xl font-bold mb-1">The Library</h5>
     <p>
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
     <img
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT0p8us-zIoKW5lNYbA2E6_XeOIWBk_FFmCTg&s"
          alt="Library Image"
          className="w-full h-auto"
        />
      </div>
     </div>
     <h5 className="text-1xl font-bold mb-1">Library Mission</h5>
     <p>Empowering students to become lifelong learners and critical thinkers by providing access to diverse resources, fostering a culture of inquiry, and promoting a love of reading and exploration.</p>

     <h4 className="text-1xl font-bold mb-1">Here’s a link to our E-Library! <br />Have Fun As you Explore.</h4>
   </div>
  
  );
 

}
export default Elibrary;
