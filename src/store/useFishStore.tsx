import { ImmerStateCreator } from "./useStore";
export interface FishStore {
  name: string;
  race: {
    name: string;
    age: number;
    type: {
      name: string;
    };
  };
  actions: {
    setTypeName: (name: string) => void;
    setFishName: (name: string) => void;
  };
}

export const useFishStore: ImmerStateCreator<FishStore> = (set, ...rest) => {
  return {
    name: "",
    race: {
      name: "koi",
      age: 2,
      type: {
        name: "fish",
      },
    },
    actions: {
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
    },
  };
};
