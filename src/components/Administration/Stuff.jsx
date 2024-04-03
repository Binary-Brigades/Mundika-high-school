import React from "react";
import BomCard from "./BomCard";
import adminMembers from "../../assets/Data/AdminMembers";
import DepartmentStuff from "./DepartmentStuff";
import DepartmentTeachers from "../../assets/Data/DepartmentTeachers";
function Stuff() {
  return (
    <div className="mt-3 w-full">
      <h1 className="text-xl tracking-wide font-semibold">Meet Our Staff</h1>
      <p>
        Our Dedicated Team of Educators Welcome to Mundika High School's Staff
        Members page! Our dedicated team of educators is committed to providing
        a nurturing and supportive learning environment where every student can
        thrive. Get to know our passionate and experienced staff members below:
      </p>
      <div className="w-full mt-3 tracking-wider font-semibold">
        <h2 className="mt-6 text-xl">Administration</h2>
        <div className="grid grid-cols-1 gap-2 md:gap-6 lg:gap-8 md:grid-cols-2 lg:grid-cols-3">
          {adminMembers.map((member) => (
            <BomCard
              title={member.title}
              key={member.name}
              name={member.name}
              image={member.image}
            />
          ))}
        </div>
        <h2 className="mt-6 mb-4 text-xl">Teaching Staff</h2>
        {DepartmentTeachers.map((department) => (
          <DepartmentStuff
            key={department.title}
            department={department.title}
            teachers={department.members}
          />
        ))}
      </div>
    </div>
  );
}

export default Stuff;
