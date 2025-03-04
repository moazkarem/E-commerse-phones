import server from "./server";
export const getAllCategoriesApi = async () => {
  try {
    const response = await server.get("/api/v1/categories");
    return response?.data?.data;
  } catch (err) {
    console.log("ERROR IN CATEGORIES API", err);
  }
};
