import { get } from "../utils/request";

export const getListCategory = async () => {
    const result = await get("api/v1/category");
    return result;
}