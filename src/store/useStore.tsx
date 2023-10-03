import { create } from "zustand";
import type { StateCreator } from "zustand";
import { devtools } from "zustand/middleware";
import { immer } from "zustand/middleware/immer";
import { BearSlice, useBearSlice } from "./bearSlice/useBearSlice";
import { FishSlice, useFishSlice } from "./fistSlice/useFishSlice";

type State = {
  bear: BearSlice;
  fish: FishSlice;
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
      bear: useBearSlice(...args),
      fish: useFishSlice(...args),
    }))
  )
);
