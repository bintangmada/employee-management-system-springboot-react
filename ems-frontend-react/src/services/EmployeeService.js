import axios from "axios";

const REST_API_BASE_URL = "http://localhost:8033/api/employee";

export const listEmployees = () => {
  return axios.get(REST_API_BASE_URL + "/get-all");
};

export const createEmployee = (employee) => {
  return axios.post(REST_API_BASE_URL, employee);
};
