import server from "./server";

export const getHeroDataApi = async () => {
  const res = await server.get(
    `${import.meta.env.VITE_SECOND_DOMAIN}/herosections?populate=*`
  );
  console.log(res?.data, "hero section");
  return res?.data;
};
