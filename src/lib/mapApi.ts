import API from "@/lib/utils/axiosConfig";

import { ResponseAutocompleteTags, ResponseUploadImage } from "../knowledgeTypes";
import { getIdToken } from "./firestoreClient/auth";

// Will send to and endpoint like this:
// http://localhost:3000/api/{mapUrl}
export const postWithToken = async (mapUrl: string, postData: any = {}): Promise<ResponseAutocompleteTags> => {
  const token = await getIdToken();
  const response = await API.post(`/api${mapUrl}`, { ...postData }, { headers: { Authorization: `Bearer ${token}` } });
  return response.data;
};

export const postImageWithToken = async (mapUrl: string, postData: any = {}): Promise<ResponseUploadImage> => {
  const token = await getIdToken();
  const response = await API.post(
    `/api${mapUrl}`,
    { ...postData },
    { headers: { Authorization: `Bearer ${token}`, "Content-Type": "multipart/form-data" } }
  );
  return response.data;
};
// export const updateCorrectNode = async (): Promise<ResponseAutocompleteTags> => {
//   const token = await getIdToken()
//   const response = await API.get("/api/tagsAutocomplete", { headers: { Authorization: token ? `Bearer ${token}` : '' }, params: { q: tagName } })
//   return response.data
// }
// extends unknown
export const Post = async <R>(mapUrl: string, postData: any = {}): Promise<R> => {
  const token = await getIdToken();
  const response = await API.post(`/api${mapUrl}`, { ...postData }, { headers: { Authorization: `Bearer ${token}` } });
  return response.data;
};
