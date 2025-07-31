import server from "./server";

export const getBlogsApi = async () => {
  const res = await server.get(
    `${import.meta.env.VITE_SECOND_DOMAIN}/blogs?populate=*`
  );
  // console.log(res?.data, "blogs page section");
  return res?.data;
};

//================ single blog
export const getSingleBlogApi = async (id) => {
  const res = await server.get(
    `${import.meta.env.VITE_SECOND_DOMAIN}/blogs/${id}?populate=*`
  );
  // console.log(res?.data, "single blogs page section");
  return res?.data;
};
