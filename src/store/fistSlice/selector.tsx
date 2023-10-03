import { useStore } from "../useStore";

export const useFishName = () => useStore((state) => state.fish.name);
export const useFishRace = () => useStore((state) => state.fish.race);
export const useFishActionsName = () =>
  useStore((state) => state.fish.setFishName);
export const useFishActionsType = () =>
  useStore((state) => state.fish.setTypeName);
