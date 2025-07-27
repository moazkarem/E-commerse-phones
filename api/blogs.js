import server from "./server";

export const getBlogsApi = async () => {
  const res = await server.get(
    `${import.meta.env.VITE_SECOND_DOMAIN}/blogs?populate=*`
  );
  // console.log(res?.data, "blogs page section");
  return res?.data;
};
