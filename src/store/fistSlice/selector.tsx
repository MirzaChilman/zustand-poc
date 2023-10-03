import { useStore } from "../useStore";

export const useFishName = () => useStore((state) => state.fish.name);
export const useFishRace = () => useStore((state) => state.fish.race);
export const useFishActions = () => useStore((state) => state.fish.actions);
