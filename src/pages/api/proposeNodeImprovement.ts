import { NextApiRequest, NextApiResponse } from "next";
import fbAuth from "../../middlewares/fbAuth";

import { admin, checkRestartBatchWriteCounts, commitBatch, db } from "../../lib/firestoreServer/admin";
import {
  addToPendingPropsNums,
  compareChoices,
  compareFlatLinks,
  createUpdateUserVersion,
  getNode,
  getTypedCollections,
  proposalNotification,
  versionCreateUpdate,
} from "../../utils";
import { INodeLink } from "src/types/INodeLink";

// Logic
// - getting versionsColl, userVersionsColl based on nodeType
// - processing versionCreateUpdate based on nodeType
//   - if version is not deleted then user can perform vote
//    - calling updating reputation method
//      - updating reputation and community increment basaed on tag ids
//    - getting user version based on nodeType, versionID, uname and voter
//    - checking is version approved based on wrongs and corrects
//    - if versionData is accepted
//      - getting newMaxVersionRating, adminPoints, nodeAdmin, aImgUrl, aFullname, aChooseUname from getCumulativeProposerVersionRatingsOnNode method
//      - proposal was accepted previously, not accepted just now
//        - schoolPoints, schoolMonthlyPoints, schoolWeeklyPoints, schoolOthersPoints, schoolOthMonPoints, schoolOthWeekPoints (not implemented)
//     - {nodeType}Versions, {nodeType}VersionComments (comments not implemented)
//     - nodes where this user is Admin

async function handler(req: NextApiRequest, res: NextApiResponse) {
  try {
    const { data } = req.body || {};
    const {
      id,
      user,
      title,
      children,
      content,
      nodeType,
      nodeImage,
      nodeVideo,
      nodeAudio,
      parents,
      tagIds,
      tags,
      subType,
      proposal,
      summary,
      choices,
      addedParents,
      addedChildren,
      removedParents,
      removedChildren,
    } = data || {};

    const { userData } = user || {};
    let batch = db.batch();
    let writeCounts = 0;

    let { referenceIds, references, referenceLabels } = data || {};
    if (references.length && typeof references[0] === "object") {
      referenceIds = references.map((_reference: INodeLink) => _reference.node);
      referenceLabels = references.map((_reference: INodeLink) => _reference.label);
      references = references.map((_reference: INodeLink) => _reference.title);
    }
    if (!Array.isArray(referenceIds)) {
      referenceIds = [];
    }
    if (!Array.isArray(references)) {
      references = [];
    }
    if (!Array.isArray(referenceLabels)) {
      referenceLabels = [];
    }

    const currentTimestamp = admin.firestore.Timestamp.fromDate(new Date());
    const { nodeData, nodeRef } = await getNode({ nodeId: id });
    const { versionsColl, userVersionsColl }: any = getTypedCollections({ nodeType });
    const versionRef = versionsColl.doc();
    const versionData: any = {
      node: id,
      title,
      children,
      content,
      nodeImage,
      nodeVideo,
      nodeAudio,
      parents,
      referenceIds,
      referenceLabels,
      references: references,
      tagIds,
      tags,
      proposer: userData.uname,
      imageUrl: userData.imageUrl,
      fullname: userData.fullname,
      chooseUname: userData.chooseUname,
      subType,
      proposal,
      summary,
      createdAt: currentTimestamp,
      updatedAt: currentTimestamp,
      viewers: 1,
      corrects: 1,
      wrongs: 0,
      awards: 0,
      deleted: false,
      accepted: false,
    };
    if (nodeType === "Question") {
      versionData.choices = choices;
    }
    [batch, writeCounts] = await versionCreateUpdate({
      batch,
      nodeId: id,
      nodeData,
      nodeRef,
      nodeType: nodeType,
      versionId: versionRef.id,
      versionData,
      newVersion: true,
      childType: false,
      voter: userData.uname,
      correct: 1,
      wrong: 0,
      award: 0,
      addedParents,
      addedChildren,
      removedParents,
      removedChildren,
      currentTimestamp,
      writeCounts,
    });
    // From here on, we specify the type of the changes that the user is proposing on this node
    // using some boolean fields to be added to the version.
    if (nodeType === "Question") {
      if (versionData.choices.length > nodeData.choices.length) {
        versionData.addedChoices = true;
      } else if (versionData.choices.length < nodeData.choices.length) {
        versionData.deletedChoices = true;
      }
      if (!compareChoices({ node1: data, node2: nodeData })) {
        versionData.changedChoices = true;
      }
    }
    if (title !== nodeData.title) {
      versionData.changedTitle = true;
    }
    if (content !== nodeData.content) {
      versionData.changedContent = true;
    }
    if (nodeImage !== "" && nodeData.nodeImage === "") {
      versionData.addedImage = true;
    } else if (nodeImage === "" && nodeData.nodeImage !== "") {
      versionData.deletedImage = true;
    } else if (nodeImage !== nodeData.nodeImage) {
      versionData.changedImage = true;
    }
    if (nodeVideo !== "" && nodeData.nodeVideo === "") {
      versionData.addedVideo = true;
    } else if (nodeVideo === "" && nodeData.nodeVideo !== "") {
      versionData.deletedVideo = true;
    } else if (nodeVideo !== nodeData.nodeVideo) {
      versionData.changedVideo = true;
    }
    if (nodeAudio !== "" && nodeData.nodeAudio === "") {
      versionData.addedAudio = true;
    } else if (nodeAudio === "" && nodeData.nodeAudio !== "") {
      versionData.deletedAudio = true;
    } else if (nodeAudio !== nodeData.nodeAudio) {
      versionData.changedAudio = true;
    }
    if (versionData.referenceIds.length > nodeData.referenceIds.length) {
      versionData.addedReferences = true;
    } else if (versionData.referenceIds.length < nodeData.referenceIds.length) {
      versionData.deletedReferences = true;
    }
    if (
      !compareFlatLinks({ links1: referenceIds, links2: nodeData.referenceIds }) ||
      !compareFlatLinks({ links1: referenceLabels, links2: nodeData.referenceLabels })
    ) {
      versionData.changedReferences = true;
    }
    if (versionData.tagIds.length > nodeData.tagIds.length) {
      versionData.addedTags = true;
    } else if (versionData.tagIds.length < nodeData.tagIds.length) {
      versionData.deletedTags = true;
    }
    if (!compareFlatLinks({ links1: tagIds, links2: nodeData.tagIds })) {
      versionData.changedTags = true;
    }
    if (addedParents.length > 0) {
      versionData.addedParents = true;
    }
    if (addedChildren.length > 0) {
      versionData.addedChildren = true;
    }
    if (removedParents.length > 0) {
      versionData.removedParents = true;
    }
    if (removedChildren.length > 0) {
      versionData.removedChildren = true;
    }
    batch.set(versionRef, versionData);
    [batch, writeCounts] = await checkRestartBatchWriteCounts(batch, writeCounts);

    const userVersionRef = userVersionsColl.doc();
    const userVersionData = {
      award: false,
      correct: true,
      createdAt: currentTimestamp,
      updatedAt: currentTimestamp,
      version: versionRef.id,
      user: userData.uname,
      wrong: false,
    };
    [batch, writeCounts] = await createUpdateUserVersion({
      batch,
      userVersionRef,
      userVersionData,
      nodeType,
      writeCounts,
    });

    //  If the proposal is not approved, we do not directly update the node document inside versionCreateUpdate function,
    //  so we have to set nodeData.versions + 1 here
    if (!versionData.accepted) {
      batch.update(nodeRef, {
        versions: nodeData.versions + 1,
        updatedAt: currentTimestamp,
      });
      [batch, writeCounts] = await checkRestartBatchWriteCounts(batch, writeCounts);
      [batch, writeCounts] = await addToPendingPropsNums({
        batch,
        tagIds: nodeData.tagIds,
        value: 1,
        voters: [userData.uname],
        writeCounts,
      });
    }

    [batch, writeCounts] = await proposalNotification({
      batch,
      nodeId: id,
      nodeTitle: versionData.accepted ? title : nodeData.title,
      uname: userData.uname,
      versionData,
      currentTimestamp,
      writeCounts,
    });
    await commitBatch(batch);
    return res.status(200).json({ success: true });
  } catch (err) {
    console.error(err);
    return res.status(500).json({ err, success: false });
  }
}

export default fbAuth(handler);
