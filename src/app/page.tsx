"use client";

import {
  useFishActions,
  useFishName,
  useFishRace,
} from "@/store/fistSlice/selector";
import React from "react";

const Bear = () => {
  console.log("BEAR");

  const fishName = useFishName();
  const { type } = useFishRace();
  return (
    <div>
      <h1>BEAR COMPONENT</h1>
      <h1>This Bear can eat {fishName}</h1>
      <h2>Fish type: {type.name}</h2>
    </div>
  );
};

const FishName = () => {
  console.log("FISH NAME");

  const fishName = useFishName();
  return <h1 data-testid="fishNameValue">Fish Name: {fishName}</h1>;
};

const FishRaceTypeName = () => {
  console.log("FishRaceTypeName");

  const { type } = useFishRace();
  return <div>{type.name}</div>;
};

const Fish = () => {
  const { setFishName, setTypeName } = useFishActions();
  return (
    <div>
      <h1>FISH COMPONENT</h1>
      <input
        className="text-red-900"
        data-testid="fishNameChange"
        type="text"
        onChange={(event) => {
          setFishName(event?.target.value);
        }}
      />
      <input
        type="text"
        onChange={(event) => {
          setTypeName(event?.target.value);
        }}
      />
    </div>
  );
};

export default function Home() {
  return (
    <main data-testid="mirza">
      test
      <Bear />
      <br />
      <Fish />
      <br />
      <FishName />
      <br />
      <FishRaceTypeName />
    </main>
  );
}
