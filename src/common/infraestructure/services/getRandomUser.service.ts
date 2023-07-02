import { RANDOM_USER_API } from "../api/randomUser/config/randomUser.api";
import {
  RandomUserAPIResponse,
  Result as ResultUser,
} from "../api/randomUser/models/randomUser.models";

export const getRandomUsers = async (
  quantity: number
): Promise<ResultUser[]> => {
  const response = await RANDOM_USER_API.get<RandomUserAPIResponse>(
    `/?results=${quantity}`
  );
  return response.data.results;
};
