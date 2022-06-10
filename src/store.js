import { applyMiddleware, combineReducers, createStore } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import thunk from "redux-thunk";
import {
  facilityBarbersReducer,
  facilityDetailReducer,
  facilityEmployeesReducer,
  facilityListReducer,
  femaleFacilityListReducer,
  maleFacilityListReducer,
} from "./reducers/facilityReducers";
import {
  addBarberReducer,
  backUrlReducer,
  normalUserListReducer,
  removeBarberReducer,
  selectBarber,
  userDetailReducer,
  userListReducer,
  userLoginReducer,
  userRegisterReducer,
  usersNamesReducer,
} from "./reducers/userReducers";

import {
  categoryListReducer,
  createCategoryReducer,
} from "./reducers/categoryReducers";
import {
  createServiceReducer,
  deleteServiceReducer,
  editServiceInfoReducer,
  editServiceReducer,
  serviceBarberReducer,
  serviceNABarberReducer,
  serviceUserReducer,
} from "./reducers/serviceReducers";

import {
  appointmentBarberListReducer,
  appointmentDetailReducer,
  appointmentSubmittedListReducer,
  appointmentTodayListForBarberReducer,
  appointmentUserListReducer,
  approveAppointmentReducer,
  createAppointmentReducer,
  NABarberInfoReducer,
  NAFacilityInfoReducer,
  possibleTimesReducer,
  rejectAppointmentReducer,
} from "./reducers/appointmentReducers";

const reducer = combineReducers({
  userLogin: userLoginReducer,
  backUrl: backUrlReducer,
  userDetail: userDetailReducer,
  userList: userListReducer,
  usersNames: usersNamesReducer,
  userRegister: userRegisterReducer,
  appointmentUserList: appointmentUserListReducer,
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
  serviceNABarber: serviceNABarberReducer,
  createService: createServiceReducer,
  deleteService: deleteServiceReducer,
  selectBarber: selectBarber,
  editServiceInfo: editServiceInfoReducer,
  editService: editServiceReducer,
  NABarberInfo: NABarberInfoReducer,
  NAFacilityInfo: NAFacilityInfoReducer,
  appointmentDetail: appointmentDetailReducer,
  appointmentTodayListForBarber: appointmentTodayListForBarberReducer,
  appointmentBarberList: appointmentBarberListReducer,
  appointmentSubmittedList: appointmentSubmittedListReducer,
  possibleTimes: possibleTimesReducer,
  createAppointment: createAppointmentReducer,
  editAppointmentApprove: approveAppointmentReducer,
  editAppointmentReject: rejectAppointmentReducer,
  createCategory: createCategoryReducer,
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
