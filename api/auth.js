import server from "./server";

export const postSignUp =async  ({ data }) => {
  console.log(data, "test form data");
  const response =await server.post("api/v1/auth/signup", data);
  console.log(response, "sign up data");
  return response;
};
