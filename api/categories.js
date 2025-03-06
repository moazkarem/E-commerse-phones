import server from "./server";
export const getAllCategoriesApi = async ({limit ,page}) => {
  try {
    const response = await server.get(`/api/v1/categories?limit=${limit}&page=${page}`);
    // console.log(response?.data)
    return response?.data;
  } catch (err) {
    console.log("ERROR IN CATEGORIES API", err);
  }
};
