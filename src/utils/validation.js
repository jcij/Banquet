import * as yup from "yup";

export const addRoleFormValidations = yup.object({
  role: yup.string().required("Role is required"),
  permission: yup.string().required("Permission is required"),
});
