import { DISPLAY_DETAILS } from "../constants/types";
import { user } from "../dashboard/employeeDetails/employeeData";

export const employeeDetails = () => {
  return {
    type: DISPLAY_DETAILS,
    payload: user
  };
};
