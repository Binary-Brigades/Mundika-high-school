import React from "react";
import TeacherCard from "./TeacherCard";

function DepartmentStuff({ department, teachers }) {
  return (
    <div className="mb-3">
      <h3>{department} Department</h3>
      <div className="grid w-full grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 md:gap-5 lg:gap-7">
        {teachers.map((teacher) => {
          return (
            <TeacherCard
              name={teacher.name}
              role={teacher.role}
              subjects={teacher.subjects}
              image={teacher.image}
            />
          );
        })}
      </div>
    </div>
  );
}

export default DepartmentStuff;
