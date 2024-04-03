import { useLocation } from "react-router-dom";
import Admission from "../components/Academics/Admission";
import ELibrary from "../components/Academics/ELibrary";
import Finance from "../components/Academics/Finance";
import Performance from "../components/Academics/Performance/Performance";
function Academics() {
  const { state } = useLocation();
  return (
    <div>
      {
        <div>
          {state === "Finance" && <Finance />}
          {state === "Performance" && <Performance />}
          {state === "Admission" && <Admission />}
          {state === "E-library" && <ELibrary />}
        </div>
      }
    </div>
  );
}

export default Academics;
