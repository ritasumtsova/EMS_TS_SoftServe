import { ActionType } from '../../types/store/actionTypes';
import { employeesActionTypes } from './../actionTypes/employeesActionTypes';
import { Employee, EmployeeIds } from './../../types/components/employees';

export const addEmployee = (employee: Employee): ActionType => {
  return {
    type: employeesActionTypes.ADD_EMPLOYEE,
    payload: employee
  }
};

export const fetchNewEmployee = (newEmployee: Employee): ActionType => {
  return {
    type: employeesActionTypes.FETCH_NEW_EMPLOYEE,
    payload: newEmployee
  }
};

export const deleteEmployee = (data: EmployeeIds): ActionType => {
  return {
    type: employeesActionTypes.DELETE_EMPLOYEE,
    payload: data
  }
};

export const fetchDeletedEmployee = (employeeId: string): ActionType => {
  return {
    type: employeesActionTypes.FETCH_DELETED_EMPLOYEE,
    payload: employeeId
  }
};