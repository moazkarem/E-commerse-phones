import server from "./server";

export const postSignUp = async ({ data }) => {
  const response = await server.post("api/v1/auth/signup", data);
  // console.log(response, "sign up data");
  return response;
};

export const postLoginApi = async ({ data }) => {
  const response = await server.post("/api/v1/auth/login", data);
  // console.log(response?.data, "from login auth api");
  return response;
};

export const postForgetPassApi = async ({ data }) => {
  const response = await server.post("/api/v1/auth/forgotPasswords", data);
  // console.log(response?.data, "from forget pass api");
  return response;
};

export const postVerifiyCodeApi = async ({ data }) => {
  const response = await server.post("/api/v1/auth/verifyResetCode", data);
  // console.log(response?.data, "from verifiy api");
  return response;
};

export const postResetPasswordApi = async ({ data }) => {
  const response = await server.put("/api/v1/auth/resetPassword", data);
  console.log(response?.data, "reset password api");
  return response;
};
