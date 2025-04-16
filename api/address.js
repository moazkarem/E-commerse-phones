import server from "./server";
import Server from "./server";

export const getAddresssesApi = async () => {
  const userData = JSON.parse(localStorage.getItem("userData"));
  const token = userData?.data?.token;
  const response = await server.get("/api/v1/addresses", {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
  console.log(response.data, "get address api function");
  return response;
};
