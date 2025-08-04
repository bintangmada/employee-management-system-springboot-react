import axios from "axios";

const REST_API_BASE_URL = "http://localhost:8033/api/employee";

export const listEmployees = () => {
  return axion.get(REST_API_BASE_URL + "/get-all");
};
