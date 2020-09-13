import { createAction } from "@reduxjs/toolkit";

export const apiCall = createAction("api/Call");
export const apiCallSuccess = createAction("api/CallSuccess");
export const apiCallFailed = createAction("api/CallFalied");
export const apiCallStart = createAction("api/callStart");
