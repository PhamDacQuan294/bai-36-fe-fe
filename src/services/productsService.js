import { del, get, patch, post } from "../utils/request";

export const getProductList = async () => {
  const result = await get("api/v1/products");
  return result;
}

export const createProduct = async (options) => {
  const result = await post("api/v1/products/create", options);
  return result;
}

export const deleteProduct = async (id) => {
  const result = await del(`api/v1/products/delete/${id}`);
  return result;
}

export const editProduct = async (id, options) => {
    const result = await patch(`products/edit/${id}`, options);
    return result;
}
