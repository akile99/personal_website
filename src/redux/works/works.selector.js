import { createSelector } from "reselect";

const selectWork = (state) => state.work;

export const selectWorkCollections = createSelector(
  [selectWork],
  (work) => work.collections
);
