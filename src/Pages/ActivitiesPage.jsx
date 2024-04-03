import React from "react";
import { useLocation } from "react-router";
import ClubsAndSocieties from "../components/Activities/ClubsAndSocieties";
import GamesAndSports from "../components/Activities/GamesAndSports/GamesAndSports";

function ActivitiesPage() {
  const { state } = useLocation();
  return (
    <div>
      {
        <div>
          {state === "Clubs & Societies" && <ClubsAndSocieties />}
          {state === "Games & Sports" && <GamesAndSports />}
        </div>
      }
    </div>
  );
}

export default ActivitiesPage;
