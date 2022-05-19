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
  addBarberReducer,
  removeBarberReducer,
  selectBarber,
} from "./reducers/userReducers";
import {
  facilityDetailReducer,
  facilityListReducer,
  maleFacilityListReducer,
  femaleFacilityListReducer,
  facilityEmployeesReducer,
  facilityBarbersReducer,
} from "./reducers/facilityReducers";

import { categoryListReducer } from "./reducers/categoryReducers";
import {
  serviceUserReducer,
  createServiceReducer,
  deleteServiceReducer,
  serviceBarberReducer,
  editServiceInfoReducer,
} from "./reducers/serviceReducers";

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
  addBarber: addBarberReducer,
  removeBarber: removeBarberReducer,
  facilityBarbers: facilityBarbersReducer,
  categoryList: categoryListReducer,
  serviceUser: serviceUserReducer,
  serviceBarber: serviceBarberReducer,
  createService: createServiceReducer,
  deleteService: deleteServiceReducer,
  selectBarber: selectBarber,
  editServiceInfo: editServiceInfoReducer,
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
