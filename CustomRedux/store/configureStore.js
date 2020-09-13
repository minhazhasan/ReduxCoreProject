import { configureStore, getDefaultMiddleware } from "@reduxjs/toolkit";
import reducer from "./reducers";
import logger from "./middleware/logger";
import errorNotification from "./middleware/error";
import api from "./middleware/api";

export default function () {
  return configureStore({
    reducer,
    middleware: [...getDefaultMiddleware(), logger, errorNotification, api],
  });
}
