import { APIActionTypes } from "./../actionTypes/APIActionTypes";
import { ActionType } from '../../types/store/actionTypes';
import { departmentsActionTypes } from '../actionTypes/departmentsActionTypes';
import { DepartmentsInitState } from "../../types/store/initStateInterfaces";

const initState: DepartmentsInitState = {
  loading: false,
  departments: null,
  errorMessage: ''
};

const departmentsReducer = (state: DepartmentsInitState = initState, action: ActionType) => {
  switch(action.type) {
    case APIActionTypes.FETCH_START:
      return {
        ...state,
        loading: true
      };

    case departmentsActionTypes.FETCH_DEPARTMENTS:
      return {
        ...state,
        loading: false,
        departments: action.payload,
        errorMessage: ''
      };

    case APIActionTypes.FETCH_FAILURE:
      return {
        ...state,
        loading: false,
        departments: null,
        errorMessage: action.payload
      };

    default:
      return state;
  }
};

export default departmentsReducer;
