import { createStore, combineReducers, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";
import {
  userLoginReducer,
  userDetailReducer,
  userListReducer,
  usersNamesReducer,
  userRegisterReducer,
  normalUserListReducer,
} from "./reducers/userReducers";
import {
  facilityDetailReducer,
  facilityListReducer,
  maleFacilityListReducer,
  femaleFacilityListReducer,
  facilityEmployeesReducer,
} from "./reducers/facilityReducers";

const reducer = combineReducers({
  userLogin: userLoginReducer,
  userDetail: userDetailReducer,
  userList: userListReducer,
  usersNames: usersNamesReducer,
  userRegister: userRegisterReducer,
  facilityDetail: facilityDetailReducer,
  facilityList: facilityListReducer,
  maleFacilityList: maleFacilityListReducer,
  femaleFacilityList: femaleFacilityListReducer,
  facilityEmployees: facilityEmployeesReducer,
  normalUserList: normalUserListReducer,
});

const userInfoFromStorage = localStorage.getItem("userInfo")
  ? JSON.parse(localStorage.getItem("userInfo"))
  : null;

const initialState = {
  userLogin: { userInfo: userInfoFromStorage },
};
const middleware = [thunk];
const store = createStore(
  reducer,
  initialState,
  composeWithDevTools(applyMiddleware(...middleware))
);
export default store;
