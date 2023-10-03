import { ImmerStateCreator } from "../useStore";
export interface FishSlice {
  name: string;
  race: {
    name: string;
    age: number;
    type: {
      name: string;
    };
  };
  setTypeName: (name: string) => void;
  setFishName: (name: string) => void;
}

export const useFishSlice: ImmerStateCreator<FishSlice> = (set, ...rest) => {
  return {
    name: "",
    race: {
      name: "koi",
      age: 2,
      type: {
        name: "fish",
      },
    },
    setTypeName: (name: string) => {
      set((state) => {
        state.fish.race.type.name = name;
      });
    },
    setFishName: (name: string) => {
      set((state) => {
        state.fish.name = name;
      });
    },
  };
};
