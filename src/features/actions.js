import authWithAxios from "../utils/authWithAxios";
// import axios from "axios";

export const API_ACTION_START = "API_ACTION_START";
export const API_ACTION_FAIL = "API_ACTION_FAIL";
export const PLANT_GET_SUCCESS = "PLANT_DATA_SUCCESS";
export const PLANT_UPDATE_SUCCESS = "PLANT_UPDATE_SUCCESS";
export const USER_LOGIN_SUCCESS = "USER_LOGIN_SUCCESS";
export const USER_SIGN_SUCCESS = "USER_SIGN_SUCCESS";
export const UPDATE_ERROR = "UPDATE_ERROR";
export const UPDATE_ISWATERED = "UPDATE_ISWATERED";

export const getPlants = () => (dispatch) => {
  dispatch({ type: API_ACTION_START });
  authWithAxios()
    .get(
      "https://dont-let-it-die.herokuapp.com/plants/user/" +
        localStorage.getItem("id")
    )
    .then((res) => {
      dispatch({ type: PLANT_GET_SUCCESS, payload: res.data });
    })
    .catch((err) => dispatch({ type: API_ACTION_FAIL, payload: err }));
};
