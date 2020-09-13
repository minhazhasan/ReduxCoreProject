// var store = require('./redux_test').createStore();
// store._state = { num: 1 };
// console.log(store);

import configureStore from "./store/configureStore";
import { bugActions, getUnresolvedBugs, getBugsByUser } from "./store/bugs";
import { projectActions } from "./store/projects";
import { userActions } from "./store/users";
import * as apiActions from "./store/apiActions";
import { loadBugs } from "./store/bugs";

// var createStore = require("./redux_test");
// var customStore = createStore(reducer);

// customStore.subscribe(() => {
//   console.log("Store Changed!", customStore.getState());
// });
// customStore.dispatch(actions.bugAdded("BUG 1"));

const store = configureStore();

// const unsubscribe = store.subscribe(() => {
//   console.log("Store Changed!", store.getState());
// });

// store.dispatch({
//   type: "apiCall",
//   payload: {
//     url: "/bugs",
//     onSuccess: "bugsRecieved",
//     onError: "bugsCallFailed",
//   },
// });

store.dispatch(loadBugs());

setTimeout(() => store.dispatch(loadBugs()), 3000);
// store.dispatch(userActions.ADD_USER({ name: "User 1" }));
// store.dispatch(userActions.ADD_USER({ name: "User 2" }));
// store.dispatch(userActions.ADD_USER({ name: "User 3" }));

// store.dispatch(projectActions.ADD_PROJECT({ name: "Project 1" }));
// store.dispatch(bugActions.ADD_BUG({ description: "bug 2" }));
// store.dispatch(bugActions.ADD_BUG({ description: "bug 1" }));
// store.dispatch(bugActions.ADD_BUG({ description: "bug 3" }));
// store.dispatch(bugActions.ADD_BUG({ description: "bug 4" }));

// store.dispatch(bugActions.ASSIGN_BUG({ bugId: 2, userId: 1 }));

// store.dispatch(bugActions.REMOVE_BUG({ id: 1 }));
// store.dispatch(bugActions.RESOLVE_BUG({ id: 3 }));

// const x = getUnresolvedBugs(store.getState());
// const y = getUnresolvedBugs(store.getState());
// const bugs = getBugsByUser(2)(store.getState());

// console.log(bugs);
