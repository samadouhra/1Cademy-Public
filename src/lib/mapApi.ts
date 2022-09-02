import API from "@/lib/utils/axiosConfig";

import {
  ResponseAutocompleteTags,
} from "../knowledgeTypes";
import { getIdToken } from "./firestoreClient/auth";

// Will send to and endpoint like this:
// http://localhost:3000/api/{mapUrl}
export const postWithToken = async (mapUrl: string, postData: any = {}): Promise<ResponseAutocompleteTags> => {
  const token = await getIdToken();
  const response = await API.post(
    `${mapUrl}`,
    { ...postData },
    { headers: { Authorization: `Bearer ${token}` } }
  );
  return response.data;
};

// export const updateCorrectNode = async (): Promise<ResponseAutocompleteTags> => {
//   const token = await getIdToken()
//   const response = await API.get("/api/tagsAutocomplete", { headers: { Authorization: token ? `Bearer ${token}` : '' }, params: { q: tagName } })
//   return response.data
// }
