import server from "./server";

export const getAddresssesApi = async () => {
  const userData = JSON.parse(localStorage.getItem("userData"));
  const token = userData?.data?.token;
  const response = await server.get("/api/v1/addresses", {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
  // console.log(response.data, "get address api function");
  return response;
};

export const editAddressApi = async ({ address, selectedAddress }) => {
  console.log(selectedAddress, address, "tersr");
  const userData = JSON.parse(localStorage.getItem("userData"));
  const token = userData?.data?.token;
  const response = await server.put(
    `/api/v1/addresses/${selectedAddress}`,
    address,
    {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    }
  );
  console.log(response?.data, "edit data api ");
  return response;
};

export const addAddressApi = async ({ address }) => {
  console.log(address, "my data ");
  const storedData = localStorage.getItem("userData");
  const userData = storedData ? JSON.parse(storedData) : null;
  const token = userData?.data?.token;
  const response = await server.post("/api/v1/addresses", address, {
    headers: { Authorization: `Bearer ${token}` },
  });
  // console.log(response?.data, "from add address api ");
  return response;
};

export const delAddressApi = async ({ address }) => {
  console.log(address, "tersr");
  const userData = JSON.parse(localStorage.getItem("userData"));
  const token = userData?.data?.token;
  const response = await server.delete(
    `/api/v1/addresses/${address._id}`,

    {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    }
  );
  // console.log(response?.data, "delete data api ");
  return response;
};
