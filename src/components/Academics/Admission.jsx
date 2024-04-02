import React, { useState } from "react";
import Header from "../common/Header";
import Footer from "../common/Footer";
import Sidebar from "../common/Sidebar";

function Admission() {
  const [showSideBar, setShowSidebar] = useState(false);
  return (
    <div>
      <Header setShowSidebar={setShowSidebar} />
      <Sidebar showSideBar={showSideBar} />
      <div className="flex flex-col pt-[100px] px-6 md:px-12">
        <div className="paragraph mb-4">
          <p className="w-[100%] md:w-[60%]">
            At Mundika High School, we strive to make the admissions process as
            smooth and transparent as possible. We welcome prospective students
            and their families to explore the opportunities available at our
            institution. Below you will find information regarding admission
            requirements, application procedures, and important dates. Admission
            Requirements
          </p>
        </div>
        <h1 className="text-1xl font-bold mb-1">Admission Requirements</h1>
        <p>
          To be considered for admission into Form 1 (or equivalent), applicants
          must meet the following requirements:
        </p>

        <div className="ls">
          <ul className="list-disc pl-4">
            <li>Completion of primary education or equivalent.</li>
            <li>Submission of a completed application form.</li>
            <li>Academic records/transcripts from previous schooling.</li>
            <li>Birth certificate or other proof of age.</li>
            <li>
              Any additional documents or requirements as specified by the
              school.
            </li>
          </ul>
        </div>
        <div className="lp">
          <h1 className="text-1xl font-bold mb-1">Application Process</h1>
        </div>
        <div className="lt">
          <ol className="list-decimal pl-4">
            <li>
              Complete the Application Form: Download the application form from
              our website or obtain a hard copy from the school's admissions
              office. Fill out all required fields accurately and completely.
            </li>
            <li>
              Gather Required Documents: Collect all necessary documents,
              including academic records, birth certificate, and any other
              documents specified in the application form.
            </li>
            <li>
              Submit Your Application: Submit your completed application form
              and supporting documents to the school's admissions office by the
              specified deadline. Applications can be submitted in person or by
              mail.
            </li>
            <li>
              Admissions Assessment: Applicants may be required to undergo an
              admissions assessment, which may include written tests,
              interviews, or other evaluations.
            </li>
            <li>
              Notification of Admission: Once the admissions committee has
              reviewed your application, you will be notified of the admission
              decision via email or postal mail.
            </li>
          </ol>
        </div>
        <div className="lr">
          <div className="text-1xl font-bold mb-1">
            <p>Important Dates</p>
          </div>
          <ul>
            <li>Application Deadline: [Insert Date]</li>
            <li>Admissions Assessment: [Insert Dates, if applicable]</li>
            <li>Notification of Admission: [Insert Date]</li>
          </ul>
        </div>
        <div className="contact us">
          <p className="text-1xl font-bold mb-1">Contact Us</p>
          <p>
            For inquiries regarding the admissions process or to schedule a
            campus tour, please contact: Mundika High School [Admissions Office
            Address] Phone: [Phone Number] Email: [Email Address] We look
            forward to welcoming you to [School Name] and assisting you
            throughout the admissions process. If you have any questions or need
            further assistance, please do not hesitate to contact us
          </p>
        </div>
        <div className="text-1xl font-bold mb-6">
          <h6>Download Application Form!</h6>
        </div>
        {/* <div className="flex flex-col mb-4">
    
      <h3 className = "text-xl font-bold">Completed application form</h3>
      <p>Complete the school's application form with accurate information.</p>
    </div>
    
    <div className="flex flex-col mb-4">
      <h3 className = "text-xl font-bold">Previous Academic Records</h3>
      <p>Submit transcripts or records of academic achievement from previous schools. This may include your K.C.P.E result slip</p>
    </div>

    <div className="flex flex-col mb-4">
      <h3 className = "text-xl font-bold">Recommendation Letter</h3>
    <p>Provide recommendation letters from teachers or school counselors.</p>
    </div>

    <div className="flex flex-row mb-4">
      <h3 className = "text-xl font-bold">Entrance Exam</h3>
    <p>Take and pass entrance exams to assess academic readiness.</p>
    </div>

    <div className="flex flex-row mb-4">
      <h3 className = "text-xl font-bold">Interviews</h3>
      <p>Attend an interview with school officials to discuss goals and aspirations.</p>
    </div> */}
      </div>
      <Footer />
    </div>
  );
}

export default Admission;
