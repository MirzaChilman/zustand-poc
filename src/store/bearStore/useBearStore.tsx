import { ImmerStateCreator } from "../useStore";

export interface BearStore {
  name: string;
}

export const useBearStore: ImmerStateCreator<BearStore> = (set, get, api) => {
  console.log({ set, get, api });
  return {
    name: "mirza",
  };
};
