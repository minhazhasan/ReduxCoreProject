// class ReduxM {



//     constructor() {
//         this._state = {};
//     }

//     get getState() {
//         return this._state;
//     }

//     dispatch(action) { }
//     subscribe(listener) { }


// }

// function createStore() {
//     return new ReduxM();
// }

// module.exports.createStore = createStore;

var createStore = function (reducer) {
    let state;
    let listener = [];

    function subscribe(actionListener) {
        listener.push(actionListener);
    }

    function dispatch(action) {
        // call the reducer to get the new state
        state = reducer(state, action);

        for (let i = 0; i < listener.length; i++) listener[i]();
    }

    function getState() {
        return state;
    }

    return {
        dispatch,
        getState,
        subscribe
    };
};

module.exports = createStore;