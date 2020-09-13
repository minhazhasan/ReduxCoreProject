import { createSlice } from "@reduxjs/toolkit";

let lastId = 0;

const projectSlice = createSlice({
  name: "projects",
  initialState: [],
  reducers: {
    ADD_PROJECT: (project, action) => {
      project.push({
        id: ++lastId,
        name: action.payload.name,
      });
    },
  },
});
console.log(projectSlice);
export const projectActions = projectSlice.actions;
export default projectSlice.reducer;
