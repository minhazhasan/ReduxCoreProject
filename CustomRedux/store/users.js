import { createSlice } from "@reduxjs/toolkit";

let lastId = 0;

const usersSlice = createSlice({
  name: "users",
  initialState: [],
  reducers: {
    ADD_USER: (user, action) => {
      user.push({
        id: ++lastId,
        name: action.payload.name,
      });
    },
  },
});
console.log(usersSlice);
export const userActions = usersSlice.actions;
export default usersSlice.reducer;
