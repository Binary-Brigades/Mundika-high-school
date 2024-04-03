import React from 'react'

function PerfomanceDetails() {
  return (
    <div className="w-screen md:text-sm  justify-start px-[8%] md:px-14 lg:px-20 flex flex-col">
        <p>School Perfomance</p>
        <table className="table p-4 bg-[#b08b8d]rounded-lg shadow">
          <thead>
              <tr>
                  <th className=" text-left border-b-2 p-4 dark:border-dark-5 whitespace-nowrap font-normal text-gray-900">
                      #
                  </th>
                  <th className=" text-left border-b-2 p-4 dark:border-dark-5 whitespace-nowrap font-normal text-gray-900">
                      Year
                  </th>
                  <th className="text-left border-b-2 p-4 dark:border-dark-5 whitespace-nowrap font-normal text-gray-900">
                      A
                  </th>
                  <th className="text-left border-b-2 p-4 dark:border-dark-5 whitespace-nowrap font-normal text-gray-900">
                      A-
                  </th>
                  <th className="text-left border-b-2 p-4 dark:border-dark-5 whitespace-nowrap font-normal text-gray-900">
                      B+
                  </th>
                  <th className="text-left border-b-2 p-4 dark:border-dark-5 whitespace-nowrap font-normal text-gray-900">
                      B
                  </th>
                  <th className="text-left border-b-2 p-4 dark:border-dark-5 whitespace-nowrap font-normal text-gray-900">
                      B-
                  </th>
                  <th className="text-left border-b-2 p-4 dark:border-dark-5 whitespace-nowrap font-normal text-gray-900">
                      C+
                  </th>
                  <th className="text-left border-b-2 p-4 dark:border-dark-5 whitespace-nowrap font-normal text-gray-900">
                      C
                  </th>
                  <th className="text-left border-b-2 p-4 dark:border-dark-5 whitespace-nowrap font-normal text-gray-900">
                      C-
                  </th>
                  <th className="text-left border-b-2 p-4 dark:border-dark-5 whitespace-nowrap font-normal text-gray-900">
                      D+
                  </th>
                  <th className="text-left border-b-2 p-4 dark:border-dark-5 whitespace-nowrap font-normal text-gray-900">
                      D
                  </th>
                  <th className="text-left border-b-2 p-4 dark:border-dark-5 whitespace-nowrap font-normal text-gray-900">
                      D-
                  </th>
                  <th className="text-left border-b-2 p-4 dark:border-dark-5 whitespace-nowrap font-normal textgit-gray-900">
                      ENTRY
                  </th>
                  <th className="text-left border-b-2 p-4 dark:border-dark-5 whitespace-nowrap font-normal text-gray-900">
                      MEAN
                  </th>
                  <th className="text-left border-b-2 p-4 dark:border-dark-5 whitespace-nowrap font-bold text-gray-900">
                      MEAN GRADE
                  </th>
              </tr>
          </thead>
          <tbody>
            <tr className="text-gray-700">
                <td className="font-bold border-b-2 p-4 dark:border-dark-5">
                    BES
                </td>
                <td className="border-b-2 p-4 dark:border-dark-5">
                    20,200
                </td>
                <td className="border-b-2 p-4 dark:border-dark-5">
                    6,600    
                </td>
                <td className="border-b-2 p-4 dark:border-dark-5">
                    3,585
                </td>
                <td className="border-b-2 p-4 dark:border-dark-5">
                    30,385
                </td>
            </tr>
            </tbody>
          </table>
    </div>
  )
}

export default PerfomanceDetails