import React from "react";
import { Link } from "react-router-dom";

const Alumnis = [
  {
    name: "Joseph Michael",
    image:
      "data:image/png;base64,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",
    year: "2016-2020",
    id: 1,
    career: "Doctor"
  },
  {
    name: "Joseph Michael",
    image:
      "data:image/png;base64,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",
    year: "2016-2020",
    id: 2,
    career: "Engineer"
  },
  {
    name: "Joseph Michael",
    image:
      "data:image/png;base64,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",
    year: "2016-2020",
    id: 3,
    career: "CEO Uzima llc"
  },
  {
    name: "Joseph Michael",
    image:
      "data:image/png;base64,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",
    year: "2016-2020",
    id: 4,
    career: "Managing Director KALRO"
  },
  {
    name: "Joseph Michael",
    image:
      "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAAAkFBMVEWpq60pLTL///+nqausrrCvsbOipKYcISceIymho6YjJy0hJislKS4aHyUmKi8iJyz5+fkVGyHNzs8sMDXz8/O2t7nHyMnl5uZYW16Vl5nc3d7AwsPq6uvU1dZ8foFwcnVIS08AAAySlJZiZGcFDxhQU1aHiYwzNzuChIdydHdCRUleYGNoam1FSEwAAA4PFh4Wg8z0AAAMyUlEQVR4nN2dibKiOhCGERJAFBT35Ygr4jbH93+7C7iBsiTwRzj3r5pbU3OrNJ/pdHe2jiSLV/dnPFv0RvP5cDiklPr/nc9HvcVs/DP4wrdLIj+8+7MYDSVVVZVQ0ku3f/D/jzQcLcZdkY0QRdgd9+ZKU41zJSkAbSrDnjBMEYTd2YgE/ZbDFudUVTKaiaCEE/70KB9cDJP2ftANwhKOR4pajO5JqSqjMbRNQMKf0ngPSHUE7EkU4aAnQfAekFIPFUkwhOMhEO8BOcRYK4Jw4f/kIqRKC0DrShN2R010972kqKPSxlqScDCHm+c747wkYylC4XwIxhKE3dEX+G6MoxLJTnHC3pf4boy9rxPOpO/xhYzS7KuEg6GY+JAldVhsOBYi/KaBvlTQVAsQ/pAq+EJGUiBf5SfsNSviC6SOhBMOKuvAmxTCOxo5CRff9zDvanImq3yEFbjQT6lDYYSDL8fANCkSj6VyEM7q0IE3qRzhn51wVB9ALp/KTDish4U+pDAPRkbCbsVB4lMKYZxvsBEO6sYXSGHzN0yE4yrTmHSpTDkcC2FNAf3gz+JSGQhndQVkQ8wnrFEY/BRDYMwlrDUgC2IeYc0BGRBzCGs8Bh/KG4vZhLX1olE1s4NGJuGg7iZ6k5oZ+rMIu3XMZJKkZCVwWYSk6pYzixQjrNlsIktZM410wtHfAfQR0+eLqYS1D4RxpYfFNMI/4kZfSnWoaYRVN7iA+Aj/kJd5KM3bJBPWYOGXX2ryUnEi4Z8bhDclD8VEwr8T6uNKDPxJhH8qEkalJG0wJhD+/IUJRbKSphkJhH/VRgMl2OknYe+v2migBDv9IPyjfvShT3/6QSgy1pOHxH3FZ9x/JxSUcBNCqTLdHJzj0XEOm6lCqSDOjxT8nVDElxIqbZZu3zQ1Xddb/h/NNPvuciNREZBKNiHezRCqOq6ptdqNuNotTXMdBQ/57mzihF20jRK6X9n6O92TUrfdPZxR7WYQgrMZQpy+loZ3h9T6DnhEvs33Y4TYSEGoY+lWJl8gS2842H6MR4wY4RzZhXTj6bl4N2nehgK/WZmnESK7kEgTO7//nv1oTyRgN8Y6MUoI7EK6sQxmvkCGBezGWCdGCIGOlC5tLr6wG484xKg7jRDiHClxNV5AX+YEZqhRd/oi7KKmhUQ6tQoANhr6CdSCWCe+CBegLiSK1ykE2Gh0PEwT/E5cJBDCbNTj8zGCED8JxyA/Q05FezCQcQKNxdcU40k4xHwydYuNwYdaLsijDt8JQdGeXop40ai0JQbxGfUfhJhpE9lzx8EP2RuIoT4nUQ9CxIf6PxxrJpqlNsbnKXFCjJ+hbvZUiU0dzFBUxzFCSD5D9iYA0LfTPcJOH3nNnRDjZ9gnE5my+pCRqEYJIUZKL4hRGEg/IhDvZirhjFQtGygiiJB7/fMIIeID6aVcrI+qtYSMxBfhD2QYomw0kIFo0O2UtIQK98RBEuoOoBNvQT8kRMQf6oE8aSjrBGnTgxCxfEGmmFj4kD0t36bbPDggHCOM9FJ8VpgkiK9RZndCRKzAGqlvph7ATMO0JiBEeGawkfpmilg2IjdCyDCEetJA+gHwwwcDUcKkbHSCmFVEZZwBZhokbhJmkQ09DFEDcRESQhbz0cOw0TABrQpSUwmSlKKjYUiIiIhKQIhY6yZ7tKPxXQ1iHtzs+oSItBvvSkGpqZ98S/IMYaVL3MzpIVRWI0EyGrIts9CdLOOCIBz5hIhDUPSMzUpDwi2CcOgTlv+YgBDfhx1EyJd8Psgym5A+hBCqsgTZ2xYxDjsIK/UzUwmyRkOAq1APYVaj1B8JMf2VyBFPCImHkjKWEOFQIoea5jR+QJQg2/dkg1sNfkibQggXEmbjsFl+3/BdJqRhSk/CnKKh6Olhw+pDwqEykjBHvTA7h1EZEwzhXJojPkdA6o1xpZLPhzmDgXc1JsTRSD4f6JQJgQdE1KkTFCGdYDPTzrZuhGSPNVMTc+YkIEQd6gSbKSZW+KIwQgqdXmDS7rBdKCuVpCkyrbFh55Vh49D/sVa4oN/BhPtAQEIC7ETIxtNNQ1BOEwiXuYEytlBzUF4aCjbBMHG3Bvy8FHjVCXWiRgcdMQ3kzy2Q9/FIHzGJsjzg9Rl/fog6oh+IbBB2aoNy7lD+HB+yTvMQ4vAe6hj0TcoMs9b2FD2VTcCNFRIwWGvDnGl7fWKj3FC0+tDmBOul4IuxZFpujqE3sRdK1S5m3yIisimz4Y2a2T+lgvaeoiqDCJsVvgTaP4yJTBlu/ybJ0tE9eNs/xFejIc1+EY/aboDHoHTfA4YGxJuItOL3N/pJwZdYCPfxweHiJrrkuOccyLIv0Dh4V3gWA3Z3NCY6Zb6rHnZgH3pf/anwPA3uamVMhBw11pWbtn0RVOlEwZ1rSxBVzzaLx2nbblNIBz7PtYkrm0SbZ7OVMx479moqiO95NhF1PzZJVF32zXRjNXR9OxVSpeam+/lSeMmWmAjdbPum3v7oSisoUHOArdcm6n5GWHT5MkLo1Jl4pqa3jE7bMNpGS9fM1mq5IQK77/bVwLP6eV8VlIk6HC/nietOtktn3ySiCkVF9DyrLyCrSVJQ5IsGElvtK6LnfQuxA7FCPe/MQO491VEUenethorcXROSfFevyP1DQalp1YrcIRWWmlaq+3V14F3uuil2lxu94FYLxe7j/x/N9K2mwv/QTN/qYvwfvakcJxQZ9MkzI6Wvv4lOTz/q0wgpHxziEHW6d5bbyerk9S3DaBlGo++dVu75cjxsmlJIKuC7P2oMoepEPRSW1d04F9fTg9KzPpdlvSbB/t+DWaI/TdT6q62zUfFFdz/qRCELCPt0ZOqcgzmv8Tm3/1iI6vigffcYFN3FUSbU+kL5Gp9uc1xppt7hWhJutzTzdNnDSgsn1GuDXAcOiwbrn0WD2WQZmrlymgjIxJp7pefBhDaPp/SiwYyUuu0tyy+/JdZNLLdcQ6ji/LMLbqu9QbZs76iWgkyufVkmYBC6mWgQvDukbrqbEozRIrSIGrSEOJ4Jv41gek7RyrtpNWgLdiKVjiwln/ll6a2LUmgJKbWOcJFOJNJSx9/qeqilFWFMrwXN34mELHX8vbw3Rm5bzajnzelOw5LkQvlCRoOzoHlWTXa+mEinHv5OXpI0j2v/LbOuPsckikhbzq364rLsM7upZr+NwJ6d0k1D7ACMq2XtmbtRziZkm2IQssVfqcyWfWabeeS+UcI0TyRNroMWGLU8lgNF+e/MsEQMute+NQKjssxDvqUyvBWU72zo8dsW+lD+qSKW955yN73pGV9PiFVa3kUMpje7cnaiqPv9IfiSvsr8/RnfXcvMbOiqSkDf32QVbWd9Oy/LTunqm1EwSVl16ZnfP0z3p9Wa6E2t1MP8HG9Ypr1DSrfVA/pjMcXd8LxDmvK+HHWq86JRmYnvtfC9JZtYhR5z5weh5JLmaSQp/54wFJUqEplktT5bx/2m82cKTlf4SklFZfx7t1P+d7k/oiKpySC8SXurmlHkbfV3b6PUwY2+pMVMLM3L5BDGAj+d1MdGA8WfiEgM9QyE3VcnIi9qYxR9ykTpZlBkEUYcKv1XH0d6U6SmuZqQbzMSPqcZ9QmFLz1vgTXHmQzZhPL4dt0EXySpvNr3kdhMjRNMhPewKKCUV3ndCi+kB0JGwhBRRNHA8grrn6Sk2zyEASLtV02TpKDeWT4gA6GPKKDSM0LmNNdE2Qjl8ble+cxDrXO2F2UnlHvrukXDQNY6PRnlJZRn13rlbIE6VwYTZSaUBxUs42dL72dmMtyEsuzWKyTaLmvDmQll57dqqoh2DnO72QllWht/Y60pe7M5COVZux6DUW+x+Rh+Qrm73VVN52t3zpoOliOUZWWNL03Op/Za5WsyJ6E89qr1qbbHkseUIZTl/bq6uWJ7veduLz+hPKusG22Px8UUJ5TlaSWj0VhPizS2EKE8dnffjo3WzuUdgWUIZXlufNdUbT1j0VcIoW+qv9851RZI+y1koCUJ5YGz/k6Oo68PaRtLYgll+ef4BUZ9vWScJwkg9BmdtVhb1dbHYg4GRegzHn6FncK07N9Dqf6DEPr5eLOzExEfO1e9yZVjCyP0NZ+sTfArnebaned/MYMwhH4OMO3scF5H3+mbksPvKRShr55zvSIg9evOSTq+VVBAQl8jx96Vuj3TNne2w7QMyiwsoa/F9LS+Fjpha2nX9WmTvxHBKTihr8F8762vJs9+Vcu8rr3DvETqkioRhIEGo+nW/N3ZWs5VUsvQ7OuvfZmORNAFEkUYatCT9hN9vdtd7aAOVqfdtqzwknNYC8u+7nbr9nlPeqWjepaEEt71s5jT5ia4se66q38rdxJeVFfpaCEU7a7/AIk5DlA07zwCAAAAAElFTkSuQmCC",
    year: "2016-2020",
    id: 5,
    career: "Managing Director KALRO"
  },
  {
    name: "Joseph Michael",
    image:
      "data:image/png;base64,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",
    year: "2016-2020",
    id: 6,
    career: "Managing Director KALRO"
  },
  {
    name: "Joseph Michael",
    image:
      "data:image/png;base64,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",
    year: "2016-2020",
    id: 7,
    career: "Managing Director KALRO"
  },
  {
    name: "Joseph Michael",
    image:
      "data:image/png;base64,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",
    year: "2016-2020",
    id: 8,
    career: "Managing Director KALRO"
  },
];

function AlumniDirectory() {
  return (
    <div>
      <h1 className="border-red-500 px-2 border-l-8 mt-12 text-3xl font-semibold">
        Alumni
      </h1>
      <div className="grid grid-cols-1 sm:grid-cols-3 md:grid-cols-4 gap-4 mb-4">
        {
          Alumnis.map((alumnus)=>(
            <div key={alumnus.id} className="flex flex-col items-start space-y-1 justify-center bg-white shadow-md rounded-md p-4">
              <img src={alumnus.image} alt="" className="self-center h-40 w-full object-cover bg-red-500" />
              <h1 className="text-xl text-nowrap font-semibold">{alumnus.name}</h1>
              <h1 className="text-md text-start w-full text-gray-500">{alumnus.year}</h1>
              <p className="line-clamp-3 text-start w-full text-[12px] md:text-md md:text-nowrap">Career: {alumnus.career}</p>
            </div>
          ))
        }
      </div>
      <Link className="text-blue-400 mt-4">
      View more..
      </Link>
    </div>
  );
}

export default AlumniDirectory;
