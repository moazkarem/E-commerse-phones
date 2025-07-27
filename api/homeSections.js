import server from "./server";

export const getHeroDataApi = async () => {
  const res = await server.get(
    `${import.meta.env.VITE_SECOND_DOMAIN}/herosections?populate=*`
  );
  console.log(res?.data, "hero section");
  return res?.data;
};

//========= ABOUT PAGE DATA
export const getAboutPageDataApi = async () => {
  const res = await server.get(
    `${import.meta.env.VITE_SECOND_DOMAIN}/aboutpages?populate=*`
  );
  console.log(res?.data, "about page section");
  return res?.data;
};
