import React from "react";
import BomCard from "./BomCard";
import bomMembers from "../../assets/Data/bomMembers";
function BoardMembers() {
  
  return (
    <div className="w-full mt-5 md:mt-8">
      <h1 className="font-semibold text-xl">Board members</h1>
      <div className="w-full grid grid-cols-1 py-4 md:grid-cols-2 lg:grid-cols-3 gap-2 md:gap-6 lg:gap-8">
        {bomMembers.map((member) => (
          <BomCard
            title={member.title}
            key={member.name}
            name={member.name}
            image={member.image}
          />
        ))}
      </div>
    </div>
  );
}

export default BoardMembers;
