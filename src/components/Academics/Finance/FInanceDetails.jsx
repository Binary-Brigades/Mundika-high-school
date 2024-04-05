import React, { useRef } from "react";
import { useReactToPrint } from "react-to-print";

function FInanceDetails() {
  const PrintRef = useRef();
  const handlePrint = useReactToPrint({
    content: () => PrintRef.current,
  });

  return (
    <div
      ref={PrintRef}
      className="w-screen md:text-sm  justify-start pt-[8%] px-4 md:px-12 lg:px-10 flex flex-col"
    >
      <p className="text-sm md:text-md py-1 pt-12 md:pt-2 md:text-center mb-4 text-left">
        {" "}
        At Mundika High School, we aim to provide quality education and a
        supportive environment for our students.
        <br />
        Below is the fee structure for the Academic year 2024 to 2025.
      </p>
      <div className="bg-[#b08b8d] py-4 flex flex-col">
        <h1 className=" justify text-center font-semibold tracking-wider underline text-xl ">
          2024 Fees Structure
        </h1>

        <table className="table p-4 bg-[#b08b8d]rounded-lg shadow">
          <thead>
            <tr>
              <th className=" text-left border-b-2 p-4 dark:border-dark-5 whitespace-nowrap font-normal text-gray-900">
                VOTE HEAD
              </th>
              <th className=" text-left border-b-2 p-4 dark:border-dark-5 whitespace-nowrap font-normal text-gray-900">
                TERM 1<p>Ksh</p>
              </th>
              <th className="text-left border-b-2 p-4 dark:border-dark-5 whitespace-nowrap font-normal text-gray-900">
                TERM 2 <p>Ksh</p>
              </th>
              <th className="text-left border-b-2 p-4 dark:border-dark-5 whitespace-nowrap font-normal text-gray-900">
                TERM 3 <p>Ksh</p>
              </th>
              <th className="text-left border-b-2 p-4 dark:border-dark-5 whitespace-nowrap font-normal text-gray-900">
                TOTAL <p>Ksh</p>
              </th>
            </tr>
          </thead>
          <tbody>
            <tr className="text-gray-700">
              <td className="font-bold border-b-2 p-4 dark:border-dark-5">
                BES
              </td>
              <td className="border-b-2 p-4 dark:border-dark-5">20,200</td>
              <td className="border-b-2 p-4 dark:border-dark-5">6,600</td>
              <td className="border-b-2 p-4 dark:border-dark-5">3,585</td>
              <td className="border-b-2 p-4 dark:border-dark-5">30,385</td>
            </tr>
            <tr className="text-gray-700">
              <td className="font-bold border-b-2 p-4 dark:border-dark-5">
                M&I
              </td>
              <td className="border-b-2 p-4 dark:border-dark-5">1,000</td>
              <td className="border-b-2 p-4 dark:border-dark-5">1,000</td>
              <td className="border-b-2 p-4 dark:border-dark-5">0</td>
              <td className="border-b-2 p-4 dark:border-dark-5">2,000</td>
            </tr>
            <tr className="text-gray-700">
              <td className="font-bold border-b-2 p-4 dark:border-dark-5">
                L.T.T
              </td>
              <td className="border-b-2 p-4 dark:border-dark-5">2,161</td>
              <td className="border-b-2 p-4 dark:border-dark-5">1,146</td>
              <td className="border-b-2 p-4 dark:border-dark-5">1,015</td>
              <td className="border-b-2 p-4 dark:border-dark-5">4,322</td>
            </tr>
            <tr className="text-gray-700">
              <td className="font-bold border-b-2 p-4 dark:border-dark-5">
                ADM COSTS
              </td>
              <td className="border-b-2 p-4 dark:border-dark-5">2,622</td>
              <td className="border-b-2 p-4 dark:border-dark-5">1,473</td>
              <td className="border-b-2 p-4 dark:border-dark-5">1,149</td>
              <td className="border-b-2 p-4 dark:border-dark-5">5,244</td>
            </tr>
            <tr className="text-gray-700">
              <td className="font-bold border-b-2 p-4 dark:border-dark-5">
                P.E
              </td>
              <td className="border-b-2 p-4 dark:border-dark-5">3,368</td>
              <td className="border-b-2 p-4 dark:border-dark-5">1,792</td>
              <td className="border-b-2 p-4 dark:border-dark-5">1,145</td>
              <td className="border-b-2 p-4 dark:border-dark-5">6,305</td>
            </tr>
            <tr className="text-gray-700">
              <td className="font-bold border-b-2 p-4 dark:border-dark-5">
                E.W.C
              </td>
              <td className="border-b-2 p-4 dark:border-dark-5">2,250</td>
              <td className="border-b-2 p-4 dark:border-dark-5">1,250</td>
              <td className="border-b-2 p-4 dark:border-dark-5">1,000</td>
              <td className="border-b-2 p-4 dark:border-dark-5">4,500</td>
            </tr>
            <tr className="text-gray-700">
              <td className="font-bold border-b-2 p-4 dark:border-dark-5">
                ACTIVITY
              </td>
              <td className="border-b-2 p-4 dark:border-dark-5">399</td>
              <td className="border-b-2 p-4 dark:border-dark-5">239</td>
              <td className="border-b-2 p-4 dark:border-dark-5">160</td>
              <td className="border-b-2 p-4 dark:border-dark-5">798</td>
            </tr>
            <tr className="text-gray-700">
              <td className="font-bold border-b-2 p-4 dark:border-dark-5">
                TOTAL
              </td>
              <td className=" font-bold border-b-2 p-4 dark:border-dark-5">
                32,000
              </td>
              <td className=" font-bold border-b-2 p-4 dark:border-dark-5">
                13,500
              </td>
              <td className=" font-bold border-b-2 p-4 dark:border-dark-5">
                8,054
              </td>
              <td className=" font-bold border-b-2 p-4 dark:border-dark-5">
                53,554
              </td>
            </tr>
          </tbody>
        </table>
      </div>
      <div>
        <div>
          <p className="font-bold">Payment Options</p>
          <ul className="list-disc px-4 md:px-8">
            <li>
              Cash or Cheque payments can be made at the school's administrative
              office during working hours{" "}
            </li>
            <li>
              Installment plans are available upon request.Please contact the
              Finance Department for more Information.
            </li>
          </ul>
        </div>
        <div>
          <p className="font-bold">Financial Assistance</p>
          <p>
            At Mundika High School,we believe in providing equal opportunities
            for all students. Financial aid and Scholarships are available for
            eligible students. Please contact the admissions office for further
            details and application procedures.
          </p>
        </div>
        <div>
          <p className="font-bold">Note</p>
          <ul className="list-disc px-4 md:px-8">
            <li>
              All fees are subject to change at the discretion of the School
              Administration{" "}
            </li>
            <li>Late payment may incur additional charges.</li>
            <li>
              For any fee related inquiries,please contact the Finance
              Department at 0113198044
            </li>
          </ul>
        </div>
        <div>
          <p className="pt-6">Mundika High School</p>
          <p>P.O BOX 38 Busia,Kenya</p>
          <p>0113198044</p>
          <p>mundika@gmail.com</p>
        </div>
      </div>
      <button
        className="bg-[#590000] text-white font-semibold max-w-[200px] py-2 px-4 rounded-md mt-4 md:mt-8 mx-auto"
        onClick={handlePrint}
      >
        Print this out!
      </button>
    </div>
  );
}

export default FInanceDetails;
