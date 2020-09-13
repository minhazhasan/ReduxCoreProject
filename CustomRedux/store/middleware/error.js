const errorNotification = (store) => (next) => (action) => {
  console.log("In Error: ", action);
  if (action.type === "error")
    console.log("Toastify: ", action.payload.message);
  else next(action);
};

export default errorNotification;
