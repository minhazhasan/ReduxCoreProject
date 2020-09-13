const func = ({ dispatch, getsState }) => (next) => (action) => {
  if (typeof action === "function") action(dispatch, getsState);
  else next(action);
};

export default func;
