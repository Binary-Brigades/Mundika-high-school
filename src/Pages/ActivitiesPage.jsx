import React from "react";
import { useLocation } from "react-router";
import ClubsAndSocieties from "../components/Activities/ClubsAndSocieties/ClubsAndSocieties";
import GamesAndSports from "../components/Activities/GamesAndSports/GamesAndSports";
import Environment from "../components/Activities/Environment/Environment"

function ActivitiesPage() {
  var { state } = useLocation();

  if (state === null) {
    state = "Games & Sports";
  }
  return (
    <div>
      {
        <div>
          {state === "Clubs & Societies" && <ClubsAndSocieties />}
          {state === "Games & Sports" && <GamesAndSports />}
          {state === "Environment and Social Activities" && <Environment />}
        </div>
      }
    </div>
  );
}

export default ActivitiesPage;
