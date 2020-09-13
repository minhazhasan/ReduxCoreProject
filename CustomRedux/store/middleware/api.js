import axios from "axios";
import * as CONFIG from "../../config.json";
import * as apiActions from "../apiActions";

const api = ({ dispatch }) => (next) => async (action) => {
  if (action.type !== apiActions.apiCall.type) return next(action);

  const { url, data, method, onSuccess, onError, onStart } = action.payload;

  if (onStart) dispatch({ type: onStart, payload: { loading: true } });

  next(action);

  try {
    const response = await axios.request({
      baseURL: CONFIG.BaseURL,
      url,
      method,
      data,
    });
    dispatch(apiActions.apiCallSuccess(response.data));
    if (onSuccess) dispatch({ type: onSuccess, payload: response.data });
  } catch (error) {
    dispatch(apiActions.apiCallFailed(error.stack));
    if (onError)
      dispatch({
        type: onError,
        payload: { meesage: error.message, loading: false },
      });
  }
};

export default api;
