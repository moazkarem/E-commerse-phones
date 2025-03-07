import server from "./server";
export const getBrandsApi = async ({ limit, page }) => {
  try {
    const response = await server.get(
      `/api/v1/brands?limit=${limit}&page=${page}`
    );
    // console.log(response?.data, "from brands api ");
    return response?.data;
  } catch (error) {
    console.log("ERROR FROM API FUNCTION", error);
  }
};
