import { db } from "../lib/firestoreServer/admin";
import { convertToTGet } from "./";
export const comPointTypes = [
  "tags",
  "comPoints",
  "comMonthlyPoints",
  "comWeeklyPoints",
  "comOthersPoints",
  "comOthMonPoints",
  "comOthWeekPoints",
];

const tagCommunityFunctionOrPromise = async ({ collectionName, tagRef, tagDoc, tagData, callBack }: any) => {
  if (typeof callBack.then === "function") {
    await callBack({ collectionName, tagRef, tagDoc, tagData });
  } else {
    callBack({ collectionName, tagRef, tagDoc, tagData });
  }
};

export const tagsAndCommPoints = async ({ nodeId, callBack, t }: any) => {
  // Names of the collections to itterate through.
  for (let collectionName of comPointTypes) {
    const tagDocs = await convertToTGet(
      db.collection(collectionName).where(collectionName === "tags" ? "node" : "tagId", "==", nodeId),
      t
    );
    for (let tagDoc of tagDocs.docs) {
      const tagData = tagDoc.data();
      const tagRef = db.collection(collectionName).doc(tagDoc.id);
      await tagCommunityFunctionOrPromise({ collectionName, tagRef, tagDoc, tagData, callBack });
    }
    if (tagDocs.docs.length === 0) {
      const tagRef = db.collection(collectionName).doc();
      await tagCommunityFunctionOrPromise({ collectionName, tagRef, tagDoc: null, tagData: null, callBack });
    }
  }
};
