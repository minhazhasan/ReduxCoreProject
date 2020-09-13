// 3 ways to create action types, action creators, reducers
import { createSlice } from "@reduxjs/toolkit";
import { createSelector } from "reselect";
import { apiCall } from "./apiActions";
import { bugsURL } from "../config.json";

let lastId = 0;

const bugSlice = createSlice({
  name: "bugs",
  initialState: {
    list: [],
    loading: false,
    lastFetch: null,
  },
  reducers: {
    bugsRequestStart: (bugs, action) => {
      bugs.loading = action.payload.loading;
    },
    bugsRequestFailed: (bugs, action) => {
      bugs.loading = action.payload.loading;
    },

    bugsRecieved: (bugs, action) => {
      action.payload.forEach((element) => {
        bugs.list.push(element);
      });
      bugs.loading = false;
      bugs.lastFetch = Date.now();
    },
    ASSIGN_BUG: (bugs, action) => {
      const { bugId, userId } = action.payload;
      const index = bugs.list.findIndex((bug) => bug.id === bugId);
      bugs.list[index].userId = userId;
    },

    ADD_BUG: (bugs, action) => {
      bugs.list.push({
        id: ++lastId,
        description: action.payload.description,
        resolved: false,
      });
    },
    REMOVE_BUG: (bugs, action) =>
      bugs.list.filter((bug) => bug.id !== action.payload.id),
    RESOLVE_BUG: (bugs, action) => {
      const index = bugs.list.findIndex((bug) => bug.id === action.payload.id);
      bugs.list[index].resolved = true;
    },
  },
});

console.log(bugSlice);

// Selector
export const getUnresolvedBugs = createSelector(
  (state) => state.entities.bugs,
  (bugs) => bugs.filter((bug) => !bug.resolved)
);

export const getBugsByUser = (userId) =>
  createSelector(
    (state) => state.entities.bugs,
    (bugs) => bugs.filter((bug) => bug.userId === userId)
  );

export const bugActions = bugSlice.actions;
export default bugSlice.reducer;

export const loadBugs = () =>
  apiCall({
    url: bugsURL,
    onSuccess: bugActions.bugsRecieved.type,
    onStart: bugActions.bugsRequestStart.type,
    onError: bugActions.bugsRequestFailed.type,
  });
// Action Creators

// export const ADD_BUG = createAction("bugAdded");
// export const REMOVE_BUG = createAction("bugRemoved");
// export const RESOLVE_BUG = createAction("bugResolved");

// // export function bugAdded(description) {
// //   return {
// //     type: ADD_BUG,
// //     payload: {
// //       description: description,
// //     },
// //   };
// // }

// export function bugRemoved(id) {
//   return bugUpdateActions(id, REMOVE_BUG);
// }

// export function bugResolved(id) {
//   return bugUpdateActions(id, RESOLVE_BUG);
// }

// function bugUpdateActions(id, actionType) {
//   return {
//     type: actionType,
//     payload: {
//       id,
//     },
//   };
// }

// Reducer

// let lastId = 0;

// export default createReducer([], {
//   // key: value
//   // action: function
//   [ADD_BUG.type]: (bugs, action) => {
//     bugs.push({
//       id: ++lastId,
//       description: action.payload.description,
//       resolved: false,
//     });
//   },

//   [REMOVE_BUG.type]: (bugs, action) =>
//     bugs.filter((bug) => bug.id !== action.payload.id),

//   [RESOLVE_BUG.type]: (bugs, action) => {
//     const index = bugs.findIndex((bug) => bug.id === action.payload.id);
//     bugs[index].resolved = true;
//   },
// });

// export default function reducer(state = [], action) {
//   if (action.type === ADD_BUG.type) {
//     return [
//       ...state,
//       {
//         id: ++lastId,
//         description: action.payload.description,
//         resolved: false,
//       },
//     ];
//   } else if (action.type === REMOVE_BUG.type) {
//     return state.filter((bug) => bug.id !== action.payload.id);
//   } else if (action.type === RESOLVE_BUG.type) {
//     return state.map((bug) =>
//       bug.id === action.payload.id ? { ...bug, resolved: true } : bug
//     );
//   }

//   return state;
// }
