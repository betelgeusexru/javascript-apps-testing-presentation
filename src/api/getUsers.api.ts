import axios from "axios";
import { formatter } from "../utils/formatter";

export const GET_USERS_API_ENDPOINT =
  "https://jsonplaceholder.typicode.com/users";

type TResponse = {
  id: number;
};

export const getUsers = async () => {
  try {
    const response = await axios.get(GET_USERS_API_ENDPOINT);

    if (!response.data) {
      response.data = response;
    }

    // @ts-ignore
    const userIds = response.data.map((user: { id: number }) => user.id);

    return formatter(userIds);
  } catch (e) {
    console.error("Cannot get user ids", e);
  }
};
