const logger = (store) => (next) => (action) => {
  console.log("In logger: ", action);
  next(action);
};

export default logger;
