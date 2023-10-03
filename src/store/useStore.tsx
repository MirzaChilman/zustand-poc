import { create } from "zustand";
import type { StateCreator } from "zustand";
import { devtools } from "zustand/middleware";
import { immer } from "zustand/middleware/immer";
import { BearStore, useBearStore } from "./bearSlice/useBearSlice";
import { FishStore, useFishStore } from "./fistSlice/useFishSlice";

type State = {
  bear: BearStore;
  fish: FishStore;
};

export type ImmerStateCreator<T> = StateCreator<
  State,
  [["zustand/immer", never], never],
  [],
  T
>;

// root store
export const useStore = create<State>()(
  immer(
    devtools((...args) => ({
      bear: useBearStore(...args),
      fish: useFishStore(...args),
    }))
  )
);
