import server from "./server";

export const postContactApi = async ( data ) => {
  // console.log(data , 'data in apiiiii');
  const res = await server.post(
    `${import.meta.env.VITE_SECOND_DOMAIN}/contacts`,
    { data }
  );
  console.log(res?.data, "contact page ");
  return res?.data;
};
