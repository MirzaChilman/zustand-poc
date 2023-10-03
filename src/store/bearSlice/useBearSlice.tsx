import { ImmerStateCreator } from "../useStore";

export interface BearSlice {
  name: string;
}

export const useBearSlice: ImmerStateCreator<BearSlice> = (set, get, api) => {
  console.log({ set, get, api });
  return {
    name: "mirza",
  };
};
