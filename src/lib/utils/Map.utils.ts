import dagre from "dagre";

export const MIN_CHANGE = 4; // The minimum change on the map to initiate a setstate.
export const MAP_RIGHT_GAP = 730; // The gap on the right side of the map for the sidebar area.
export const NODE_WIDTH = 580; // Default node width
export const NODE_HEIGHT = 97; // Default node height
export const NODE_GAP = 19; // The minimum gap between the stacked nodes.
export const COLUMN_GAP = 190; // The minimum gap between the node columns.
export const XOFFSET = 580; // Default X offset to shift all the nodes and relations.
export const YOFFSET = 160; // Default Y offset to shift all the nodes and relations.

// dagre object
// list so that the reference can be modified throughout project
export let dag1: dagre.graphlib.Graph<{}> = new dagre.graphlib.Graph({ compound: true })
  .setGraph({
    // directed: true,
    rankdir: "LR",
    nodesep: NODE_GAP,
    ranksep: COLUMN_GAP
  })
  .setDefaultEdgeLabel(function () {
    // Default to assigning a new object as a label for each new edge.
    return {};
  });
// // export const visibleNodes = new Set();
// // set of ids of changedNodes
// export const tempNodes = new Set();
// // all nodes that have been modified
// export const changedNodes = {};
// // object of sets
// // keys: reference node ids
// // values: set of node ids that are citing this reference
// // export const citations = {};
// // set of all ids of allTags nodes

// const firstWeekDay = (thisDate) => {
//   let today = new Date();
//   if (thisDate) {
//     today = new Date(thisDate.getTime());
//   }
//   const daysDiff = today.getDate() - today.getDay();
//   let firstWeekDay = new Date(today.setDate(daysDiff));
//   return (
//     firstWeekDay.getMonth() + 1 + "-" + firstWeekDay.getDate() + "-" + firstWeekDay.getFullYear()
//   );
// };

// const firstMonthDay = (thisDate) => {
//   let today = new Date();
//   if (thisDate) {
//     today = new Date(thisDate.getTime());
//   }
//   return today.getMonth() + 1 + "-" + 1 + "-" + today.getFullYear();
// };

// export const loadReputationsData = (
//   db,
//   isCommunity,
//   reputationType,
//   tagId,
//   setReputationsDict,
//   setReputationsLoaded
// ) => {
//   const reputationsDictTemp = {};
//   let reputationsQuery;

//   if (isCommunity) {
//     if (reputationType === "All Time") {
//       reputationsQuery = db.collection("comPoints");
//     } else if (reputationType === "Monthly") {
//       reputationsQuery = db
//         .collection("comMonthlyPoints")
//         .where("firstMonthDay", "==", firstMonthDay());
//     } else if (reputationType === "Weekly") {
//       reputationsQuery = db
//         .collection("comWeeklyPoints")
//         .where("firstWeekDay", "==", firstWeekDay());
//     } else if (reputationType === "Others") {
//       reputationsQuery = db.collection("comOthersPoints");
//     } else if (reputationType === "Others Monthly") {
//       reputationsQuery = db
//         .collection("comOthMonPoints")
//         .where("firstMonthDay", "==", firstMonthDay());
//     }
//   } else {
//     if (reputationType === "All Time") {
//       reputationsQuery = db.collection("reputations").where("tagId", "==", tagId);
//     } else if (reputationType === "Monthly") {
//       reputationsQuery = db
//         .collection("monthlyReputations")
//         .where("tagId", "==", tagId)
//         .where("firstMonthDay", "==", firstMonthDay());
//     } else if (reputationType === "Weekly") {
//       //  return here and change tag to tagId, after updating values in database
//       reputationsQuery = db
//         .collection("weeklyReputations")
//         .where("tagId", "==", tagId)
//         .where("firstWeekDay", "==", firstWeekDay());
//     } else if (reputationType === "Others") {
//       reputationsQuery = db.collection("othersReputations").where("tagId", "==", tagId);
//     } else if (reputationType === "Others Monthly") {
//       reputationsQuery = db
//         .collection("othMonReputations")
//         .where("tagId", "==", tagId)
//         .where("firstMonthDay", "==", firstMonthDay());
//     }
//   }
//   const reputationsSnapshot = reputationsQuery.onSnapshot(function (snapshot) {
//     const docChanges = snapshot.docChanges();
//     if (docChanges.length > 0) {
//       for (let change of docChanges) {
//         const reputationData = change.doc.data();
//         let uname, isAdmin, admin, adminPoints, aImgUrl, aFullname, aChooseUname;
//         if (isCommunity) {
//           admin = reputationData.admin;
//           adminPoints = reputationData.adminPoints;
//           aImgUrl = reputationData.aImgUrl;
//           aFullname = reputationData.aFullname;
//           aChooseUname = reputationData.aChooseUname;
//           delete reputationData.admin;
//           delete reputationData.adminPoints;
//           delete reputationData.aImgUrl;
//           delete reputationData.aFullname;
//           delete reputationData.aChooseUname;
//         } else {
//           uname = reputationData.uname;
//           isAdmin = reputationData.isAdmin;
//           delete reputationData.uname;
//           delete reputationData.isAdmin;
//         }

//         if (change.type === "added" || change.type === "modified") {
//           if (isCommunity) {
//             reputationsDictTemp[reputationData.tagId] = {
//               ...reputationData,
//               tagId: reputationData.tagId,
//               admin,
//               adminPoints,
//               aImgUrl,
//               aFullname,
//               aChooseUname,
//             };
//           } else {
//             reputationsDictTemp[uname] = {
//               ...reputationData,
//               isAdmin,
//             };
//           }
//         }
//       }
//       setReputationsDict({ ...reputationsDictTemp });
//     }
//     setReputationsLoaded(true);
//   });
//   return () => reputationsSnapshot();
// };

// // setting the node type and visibility of a parent node inside a child
// export const setTypeVisibilityOfParentInsideChild = (oldNodes, nodeId, childId) => {
//   if (childId in oldNodes) {
//     // signal to React that something has changed in oldNodes[childId]
//     oldNodes[childId] = {
//       ...oldNodes[childId],
//       parents: [...oldNodes[childId].parents],
//     };
//     const parentIdx = oldNodes[childId].parents.findIndex((p) => p.node === nodeId);
//     oldNodes[childId].parents[parentIdx] = {
//       ...oldNodes[childId].parents[parentIdx],
//       visible: true,
//     };
//   }
// };

// // setting the node type and visibility of a child node inside a parent
// export const setTypeVisibilityOfChildInsideParent = (oldNodes, nodeId, parentId) => {
//   if (parentId in oldNodes) {
//     oldNodes[parentId] = {
//       ...oldNodes[parentId],
//       children: [...oldNodes[parentId].children],
//     };
//     const childIdx = oldNodes[parentId].children.findIndex((c) => c.node === nodeId);
//     oldNodes[parentId].children[childIdx] = {
//       ...oldNodes[parentId].children[childIdx],
//       visible: true,
//     };
//   }
// };

// // for every node downloaded from the database
// // export const addReference = (nodeId, nodeData) => {
// //   if (nodeData.nodeType === "Reference") {
// //     if (!(nodeId in citations)) {
// //       citations[nodeId] = new Set();
// //     }
// //   }
// //   // for listing the set of nodes that cite this reference
// //   for (let refObj of nodeData.references) {
// //     const refNode = refObj.node;
// //     // if reference does not exist in citations then add it
// //     if (!(refNode in citations)) {
// //       citations[refNode] = new Set();
// //     }
// //     // add nodeId to the set of nodes that are citing the reference node
// //     citations[refNode].add(nodeId);
// //   }
// // };

// // ???
// export const getDependentNodes = (dependents, necessaryNodeIds, dependentNodeIds) => {
//   for (let dependent of dependents) {
//     if (!necessaryNodeIds.includes(dependent.node) && !dependentNodeIds.includes(dependent.node)) {
//       dependentNodeIds.push(dependent.node);
//     }
//   }
// };

// adds a node to the dagre object and the list of nodes that should be visible on the map (oldNodes is updated)
// used for adding new nodes to map
// nodeId: nodeId of the node we want to add
// node: data of the node we want to add
// oldNodes: current value of nodesState in Map.js
// callback: called after oldNodes is updated and the new node is added to the dagre object
export const setDagNode = (nodeId, node, oldNodes, allTags, callback) => {
  // console.log("In setDagNode", nodeId);
  let newNode: any = {};
  if ("width" in node) {
    newNode.width = node.width;
  } else {
    newNode.width = NODE_WIDTH;
  }
  if ("height" in node) {
    newNode.height = node.height;
  } else {
    newNode.height = NODE_HEIGHT;
  }
  if ("left" in node) {
    newNode.left = node.left;
  }
  if ("top" in node) {
    newNode.top = node.top;
  }
  if ("x" in node) {
    newNode.x = node.x;
  }
  if ("y" in node) {
    newNode.y = node.y;
  }
  // add newNode data to dagre object with the id: nodeId
  dag1.setNode(nodeId, newNode);
  // if the node has at least one tag, check if the nodeId of the tag is in allTags
  // (clusters are based on nodes' first tags)
  if ("tagIds" in node && node.tagIds.length !== 0 && node.tagIds[0] in allTags) {
    // setParent sets a cluster for the node with node Id
    // node.tags[0].node: node Id of the first tag from the node data
    dag1.setParent(nodeId, "Tag" + node.tagIds[0]);
  }
  if (callback) {
    callback();
  }
  //   // ***************************************************************
  //   // Candidate for removal!
  //   // copyNode: creates copy of the object
  //   // copies the other attributes of the node (attributes not necessary for dagre object)
  //   newNode = copyNode(node);
  //   // ***************************************************************
  //   // id is deleted because nodeId will be used as key in oldNodes
  //   if ("id" in newNode) {
  //     delete newNode.id;
  //   }
  //   // adding the newNode to oldNodes
  //   oldNodes[nodeId] = newNode;
  //   return oldNodes;
};

// // removes a node from the map
// export const removeDagNode = (nodeId, oldNodes) => {
//   // console.log("In removeDagNode");
//   // removes nodeId from dagre object
//   dag1[0].removeNode(nodeId);
//   // removes nodeId from oldNodes
//   if (nodeId in oldNodes) {
//     delete oldNodes[nodeId];
//   }
//   return oldNodes;
// };

// // adds edge to dagre object and oldEdges
// // from: node id of source of the new edge
// // to: node id of destination of the new edge
// // edge: data of the new edge
// export const setDagEdge = (from, to, edge, oldEdges) => {
//   // console.log("In setDagEdge");
//   // checks that the from and to nodes exist in map
//   if (dag1[0].hasNode(from) && dag1[0].hasNode(to)) {
//     const edgeId = from + "-" + to;
//     const newEdge = { ...edge };
//     dag1[0].setEdge(from, to, newEdge);
//     // adds newEdge to oldEdges
//     oldEdges[edgeId] = newEdge;
//   }
//   return oldEdges;
// };

// // removes edge from dagre object and oldEdges
// export const removeDagEdge = (from, to, oldEdges) => {
//   // console.log("In removeDagEdge");
//   dag1[0].removeEdge(from, to);
//   const edgeId = from + "-" + to;
//   if (edgeId in oldEdges) {
//     delete oldEdges[edgeId];
//   }
//   return oldEdges;
// };

// // hides all edges for the node with nodeId
// export const removeDagAllEdges = (nodeId, oldEdges) => {
//   // console.log("In removeDagAllEdges");
//   // nodeEdges: array of all edges connected to nodeId or null (if there are no edges)
//   const nodeEdges = dag1[0].nodeEdges(nodeId);
//   if (nodeEdges) {
//     for (let edge of nodeEdges) {
//       // remove edge from dagre object
//       // from: edge.v, to: edge.w
//       dag1[0].removeEdge(edge.v, edge.w);
//       const edgeId = edge.v + "-" + edge.w;
//       // removes edge from oldEdges
//       if (edgeId in oldEdges) {
//         delete oldEdges[edgeId];
//       }
//     }
//   }
//   return oldEdges;
// };

// // for hiding nodes in the map
// export const hideNodeAndItsLinks = (nodeId, oldNodes, oldEdges) => {
//   // for every parent
//   for (let parent of oldNodes[nodeId].parents) {
//     // if parent is visible on map
//     if (parent.node in oldNodes) {
//       // find index of nodeId in list of children of parent
//       const childIdx = oldNodes[parent.node].children.findIndex((c) => c.node === nodeId);
//       // copy list of children for parent node in oldNodes
//       oldNodes[parent.node] = {
//         ...oldNodes[parent.node],
//         children: [...oldNodes[parent.node].children],
//       };
//       // update the child node of the parent node and make its visibility false
//       oldNodes[parent.node].children[childIdx] = {
//         ...oldNodes[parent.node].children[childIdx],
//         visible: false,
//         nodeType: oldNodes[nodeId].nodeType,
//       };
//     }
//   }
//   // for every child
//   for (let child of oldNodes[nodeId].children) {
//     // if child is visible on map
//     if (child.node in oldNodes) {
//       // find index of nodeId in list of parents of child
//       const parentIdx = oldNodes[child.node].parents.findIndex((p) => p.node === nodeId);
//       // copy list of parents for child node in oldNodes
//       oldNodes[child.node] = {
//         ...oldNodes[child.node],
//         parents: [...oldNodes[child.node].parents],
//       };
//       // update the parent node of the child node and make its visibility false
//       oldNodes[child.node].parents[parentIdx] = {
//         ...oldNodes[child.node].parents[parentIdx],
//         visible: false,
//         nodeType: oldNodes[nodeId].nodeType,
//       };
//     }
//   }
//   // remove edges from this node to every other node
//   oldEdges = removeDagAllEdges(nodeId, { ...oldEdges });
//   // removes the node itself
//   oldNodes = removeDagNode(nodeId, oldNodes);
//   return { oldNodes, oldEdges };
// };

// // for showing a hidden node
// export const makeNodeVisibleInItsLinks = (uNodeData, oldNodes, oldEdges, oldAllNodes) => {
//   // copy list of the node's children to modify userNode object
//   uNodeData.children = [...uNodeData.children];
//   // for each child
//   for (let childIdx = 0; childIdx < uNodeData.children.length; childIdx++) {
//     // determines whether children are shown or hidden on map for setting child icons green or orange
//     const child = uNodeData.children[childIdx];
//     // change the visible attribute for each child node
//     uNodeData.children[childIdx] = {
//       ...uNodeData.children[childIdx],
//       // whether the child is currently visible on the map
//       visible:
//         child.node in oldAllNodes &&
//         "visible" in oldAllNodes[child.node] &&
//         oldAllNodes[child.node].visible,
//     };
//   }
//   uNodeData.parents = [...uNodeData.parents];
//   for (let parentIdx = 0; parentIdx < uNodeData.parents.length; parentIdx++) {
//     // determines whether parents are shown or hidden on map for setting parent icons green or orange
//     const parent = uNodeData.parents[parentIdx];
//     // change the visible attribute for each parent node
//     uNodeData.parents[parentIdx] = {
//       ...uNodeData.parents[parentIdx],
//       // whether the parent is currently visible on the map
//       visible:
//         parent.node in oldAllNodes &&
//         "visible" in oldAllNodes[parent.node] &&
//         oldAllNodes[parent.node].visible,
//     };
//   }
//   // for every child
//   for (let child of uNodeData.children) {
//     // if child is visible on map
//     if (child.node in oldNodes) {
//       // find index of nodeId in list of parents of child
//       const parentIdx = oldNodes[child.node].parents.findIndex((p) => p.node === uNodeData.id);
//       // copy list of parents for child node in oldNodes
//       oldNodes[child.node] = {
//         ...oldNodes[child.node],
//         parents: [...oldNodes[child.node].parents],
//       };
//       // update the parent node of the child node and make its visibility true
//       oldNodes[child.node].parents[parentIdx] = {
//         ...oldNodes[child.node].parents[parentIdx],
//         visible: true,
//         nodeType: uNodeData.nodeType,
//       };
//     }
//   }
//   // for every parent
//   for (let parent of uNodeData.parents) {
//     // if parent is visible on map
//     if (parent.node in oldNodes) {
//       // find index of nodeId in list of children of parent
//       const childIdx = oldNodes[parent.node].children.findIndex((c) => c.node === uNodeData.id);
//       // copy list of children for parent node in oldNodes
//       oldNodes[parent.node] = {
//         ...oldNodes[parent.node],
//         children: [...oldNodes[parent.node].children],
//       };
//       // update the child node of the parent node and make its visibility true
//       oldNodes[parent.node].children[childIdx] = {
//         ...oldNodes[parent.node].children[childIdx],
//         visible: true,
//         nodeType: uNodeData.nodeType,
//       };
//     }
//   }
//   return { uNodeData, oldNodes, oldEdges };
// };

// // for proposing links to existing parent/child nodes or creating new child nodes
// // or the database signals that new parent/child links are added to a node
// // nodeId: id of node that is being proposed on
// // newNode: data of the node that is being proposed on
// // called when any node from the database is loaded in order to create links from the node to existing nodes on the map
// export const setNewParentChildrenEdges = (nodeId, newNode, oldEdges) => {
//   // console.log("In setNewParentChildrenEdges");
//   for (let child of newNode.children) {
//     // checks whether the dagre object doesn't have any edge defined from nodeId to id of the child
//     // should not add another edge if edge already exists
//     if (!dag1[0].hasEdge(nodeId, child.node)) {
//       // adds edge from nodeId to child to oldEdges
//       oldEdges = setDagEdge(nodeId, child.node, { label: child.label }, oldEdges);
//     }
//   }
//   for (let parent of newNode.parents) {
//     // checks whether the dagre object doesn't have any edge defined from nodeId to id of the parent
//     // should not add another edge if edge already exists
//     if (!dag1[0].hasEdge(parent.node, nodeId)) {
//       // adds edge from nodeId to parent to oldEdges
//       oldEdges = setDagEdge(parent.node, nodeId, { label: parent.label }, oldEdges);
//     }
//   }
//   return oldEdges;
// };

// // node: data of the node that is visible on the map
// // newNode: the updated data of the node that should be changed on the map
// // compares the links in node with newNode and if there is a difference, update oldEdges and dagre object
// export const compareAndUpdateNodeLinks = (node, nodeId, newNode, oldEdges) => {
//   // console.log("In compareAndUpdateNodeLinks");
//   // Put everything in CompareLinks.
//   // for loops look at existing parent/child links of node
//   // for each child of node on the map
//   for (let child of node.children) {
//     // check whether child of node is a child of newNode
//     const newLink = linkExists(newNode.children, child);
//     // if false, this child link is on the map but in updated data from database, it doesn't exist anymore
//     if (newLink === false) {
//       // child link should be removed from map
//       oldEdges = removeDagEdge(nodeId, child.node, oldEdges);
//       // indicates that some properties of the child link need to be updated
//     } else if (newLink !== true) {
//       oldEdges = setDagEdge(nodeId, child.node, newLink, oldEdges);
//     }
//   }
//   // for each parent of node on the map
//   for (let parent of node.parents) {
//     // check whether parent of node is a parent of newNode
//     const newLink = linkExists(newNode.parents, parent);
//     // if false, this parent link is on the map but in updated data from database, it doesn't exist anymore
//     if (newLink === false) {
//       // parent link should be removed from map
//       oldEdges = removeDagEdge(parent.node, nodeId, oldEdges);
//       // indicates that some properties of the parent link need to be updated
//     } else if (newLink !== true) {
//       oldEdges = setDagEdge(parent.node, nodeId, newLink, oldEdges);
//     }
//   }
//   // looks at new parent/child links that never existed before to node with nodeId
//   return setNewParentChildrenEdges(nodeId, newNode, oldEdges);
// };

// export const createOrUpdateNode = (newNode, nodeId, oldNodes, oldEdges, allTags) => {
//   // console.log("In createOrUpdateNode, nodeId:", nodeId);
//   for (let childIdx = 0; childIdx < node.children.length; childIdx++) {
//     const child = node.children[childIdx];
//     // specify the visibility and type of the child nodes
//     oldNodes[nodeId].children[childIdx] = {
//       ...oldNodes[nodeId].children[childIdx],
//       visible: child.node in oldNodes,
//     };
//     setTypeVisibilityOfParentInsideChild(oldNodes, nodeId, child.node);
//   }
//   for (let parentIdx = 0; parentIdx < node.parents.length; parentIdx++) {
//     const parent = node.parents[parentIdx];
//     oldNodes[nodeId].parents[parentIdx] = {
//       ...oldNodes[nodeId].parents[parentIdx],
//       visible: parent.node in oldNodes,
//     };
//     setTypeVisibilityOfChildInsideParent(oldNodes, nodeId, parent.node);
//   }
//   let newNodeData;
//   // set height to default node height
//   // let height = NODE_HEIGHT;
//   // height needs to continually be set to account for variation in node title, content, and image
//   // if node is currently hidden on the map
//   if (!(nodeId in oldNodes)) {
//     newNodeData = {
//       ...newNode,
//       editable: false,
//       // width: NODE_WIDTH,
//       // height,
//     };
//     // adds newNode to dagre object and to oldNodes
//     // null: no callback
//     oldNodes = setDagNode(nodeId, newNodeData, oldNodes, allTags, null);
//     // creates edges from newNode to children nodes
//     for (let child of newNode.children) {
//       oldEdges = setDagEdge(nodeId, child.node, { label: child.label }, oldEdges);
//     }
//     // creates edges from parent nodes to newNode
//     for (let parent of newNode.parents) {
//       oldEdges = setDagEdge(parent.node, nodeId, { label: parent.label }, oldEdges);
//     }
//     // if node is currently visible
//   } else {
//     const node = oldNodes[nodeId];
//     // check whether any attributes of node from the map has changed from the attributes of the node stored in the database
//     if (!compare2Nodes(newNode, node)) {
//       // updates node links
//       oldEdges = compareAndUpdateNodeLinks(node, nodeId, newNode, oldEdges);
//       // if (
//       //   "open" in newNode &&
//       //   newNode.open &&
//       //   "height" in newNode &&
//       //   Number(newNode.height)
//       // ) {
//       //   height = Number(newNode.height);
//       // } else if (
//       //   "open" in newNode &&
//       //   !newNode.open &&
//       //   "closedHeight" in newNode &&
//       //   Number(newNode.closedHeight)
//       // ) {
//       //   height = Number(newNode.closedHeight);
//       // }
//       newNodeData = {
//         ...node,
//         ...newNode,
//         editable: false,
//         // width: NODE_WIDTH,
//         // height,
//       };
//       // if ("height" in newNode && newNode.height) {
//       //   newNodeData.openHeight = newNode.height;
//       // }
//       oldNodes = setDagNode(nodeId, newNodeData, oldNodes, allTags, null);
//     }
//   }
//   return { oldNodes, oldEdges };
// };

// export const copyNode = (node) => {
//   let newNode = { ...node };
//   newNode.parents = [];
//   for (let parent of node.parents) {
//     newNode.parents.push({ ...parent });
//   }
//   newNode.children = [];
//   for (let child of node.children) {
//     newNode.children.push({ ...child });
//   }
//   newNode.tagIds = [];
//   for (let tagId of node.tagIds) {
//     newNode.tagIds.push({ ...tagId });
//   }
//   newNode.tags = [];
//   for (let tag of node.tags) {
//     newNode.tags.push({ ...tag });
//   }
//   newNode.referenceIds = [];
//   for (let referenceId of node.referenceIds) {
//     newNode.referenceIds.push({ ...referenceId });
//   }
//   newNode.references = [];
//   for (let reference of node.references) {
//     newNode.references.push({ ...reference });
//   }
//   newNode.referenceLabels = [];
//   for (let referenceLabel of node.referenceLabels) {
//     newNode.referenceLabels.push({ ...referenceLabel });
//   }
//   if (newNode.nodeType === "Question") {
//     newNode.choices = [];
//     for (let choice of node.choices) {
//       newNode.choices.push({ ...choice });
//     }
//   }
//   return newNode;
// };

// export const copyGraph = (graph) => {
//   let nodes = [];
//   let edges = [];
//   for (let node of graph.nodes) {
//     let nod = { ...node };
//     nod.parents = [];
//     for (let parent of node.parents) {
//       nod.parents.push({ ...parent });
//     }
//     nod.children = [];
//     for (let child of node.children) {
//       nod.children.push({ ...child });
//     }
//     nod.tags = [];
//     for (let tag of node.tags) {
//       nod.tags.push({ ...tag });
//     }
//     nod.references = [];
//     for (let reference of node.references) {
//       nod.references.push({ ...reference });
//     }
//     if (nod.nodeType === "Question") {
//       nod.choices = [];
//       for (let choice of node.choices) {
//         nod.choices.push({ ...choice });
//       }
//     }
//     nodes.push(nod);
//   }
//   for (let edge of graph.edges) {
//     edges.push({ ...edge });
//   }
//   return { nodes, edges };
// };

// export const compareProperty = (obj1, obj2, propName) => {
//   if ((propName in obj1 && !(propName in obj2)) || (!(propName in obj1) && propName in obj2)) {
//     return false;
//   }
//   if (!(propName in obj1) && !(propName in obj2)) {
//     return true;
//   }
//   if (obj1[propName] !== obj2[propName]) {
//     return false;
//   }
//   return true;
// };

// export const compareFirestoreTimestamp = (obj1, obj2, propName) => {
//   if ((propName in obj1 && !(propName in obj2)) || (!(propName in obj1) && propName in obj2)) {
//     return false;
//   }
//   if (!(propName in obj1) && !(propName in obj2)) {
//     return true;
//   }
//   if (obj1[propName].getTime() !== obj2[propName].getTime()) {
//     return false;
//   }
//   return true;
// };

// export const compareLinks = (
//   links1,
//   links2,
//   isTheSame,
//   // if true, check type and visibility
//   checkTypesVisibility
// ) => {
//   if (links1.length !== links2.length) {
//     return false;
//   }
//   // iterating through and comparing each of the links
//   for (let i = 0; i < links1.length && isTheSame; i++) {
//     if (
//       links1[i].node !== links2[i].node ||
//       links1[i].title !== links2[i].title ||
//       !compareProperty(links1[i], links2[i], "label") ||
//       (checkTypesVisibility &&
//         (!compareProperty(links1[i], links2[i], "type") ||
//           !compareProperty(links1[i], links2[i], "visible")))
//     ) {
//       return false;
//     }
//   }
//   return isTheSame;
// };

// export const compareFlatLinks = (links1, links2, isTheSame) => {
//   if (links1.length !== links2.length) {
//     return false;
//   }
//   for (let i = 0; i < links1.length; i++) {
//     if (links1[i] !== links2[i]) {
//       return false;
//     }
//   }
//   return isTheSame;
// };

// export const compareChoices = (node1, node2, isTheSame) => {
//   if (!("choices" in node1) && !("choices" in node2)) {
//     return isTheSame;
//   }
//   if (
//     ("choices" in node1 && !("choices" in node2)) ||
//     (!("choices" in node1) && "choices" in node2)
//   ) {
//     return false;
//   }
//   if (node1.choices.length !== node2.choices.length) {
//     return false;
//   }
//   for (let i = 0; i < node1.choices.length && isTheSame; i++) {
//     if (
//       node1.choices[i].choice !== node2.choices[i].choice ||
//       node1.choices[i].correct !== node2.choices[i].correct ||
//       node1.choices[i].feedback !== node2.choices[i].feedback
//     ) {
//       return false;
//     }
//   }
//   return isTheSame;
// };

// export const compare2Nodes = (node1, node2) => {
//   if (Object.keys(node1).length !== Object.keys(node2).length) {
//     return false;
//   }
//   if (
//     node1.identifier !== node2.identifier ||
//     node1.selectionType !== node2.selectionType ||
//     node1.nodeType !== node2.nodeType ||
//     node1.admin !== node2.admin ||
//     node1.aImgUrl !== node2.aImgUrl ||
//     node1.aFullname !== node2.aFullname ||
//     node1.aChooseUname !== node2.aChooseUname ||
//     node1.left !== node2.left ||
//     node1.top !== node2.top ||
//     node1.width !== node2.width ||
//     node1.open !== node2.open ||
//     node1.editable !== node2.editable ||
//     node1.unaccepted !== node2.unaccepted ||
//     node1.isNew !== node2.isNew ||
//     node1.isTag !== node2.isTag ||
//     node1.title !== node2.title ||
//     node1.content !== node2.content ||
//     node1.viewers !== node2.viewers ||
//     node1.corrects !== node2.corrects ||
//     node1.correct !== node2.correct ||
//     node1.wrongs !== node2.wrongs ||
//     node1.wrong !== node2.wrong ||
//     node1.comments !== node2.comments ||
//     node1.versions !== node2.versions ||
//     node1.studied !== node2.studied ||
//     node1.isStudied !== node2.isStudied ||
//     node1.changed !== node2.changed ||
//     !compareFirestoreTimestamp(node1, node2, "changedAt") ||
//     !compareFirestoreTimestamp(node1, node2, "createdAt") ||
//     !compareFirestoreTimestamp(node1, node2, "updatedAt") ||
//     !compareFirestoreTimestamp(node1, node2, "firstVisit") ||
//     !compareFirestoreTimestamp(node1, node2, "lastVisit") ||
//     node1.bookmarked !== node2.bookmarked ||
//     node1.bookmarks !== node2.bookmarks ||
//     !compareFlatLinks(node1.referenceIds, node2.referenceIds, true) ||
//     !compareFlatLinks(node1.references, node2.references, true) ||
//     !compareFlatLinks(node1.referenceLabels, node2.referenceLabels, true) ||
//     !compareFlatLinks(node1.tagIds, node2.tagIds, true) ||
//     !compareFlatLinks(node1.tags, node2.tags, true) ||
//     !compareLinks(node1.parents, node2.parents, true, true) ||
//     !compareLinks(node1.children, node2.children, true, true) ||
//     !compareChoices(node1, node2, true) ||
//     !compareProperty(node1, node2, "nodeImage") ||
//     node1.bookmark !== node2.bookmark ||
//     node1.markStudied !== node2.markStudied ||
//     node1.nodeChanged !== node2.nodeChanged ||
//     node1.chosenNodeChanged !== node2.chosenNodeChanged ||
//     node1.referenceLabelChange !== node2.referenceLabelChange ||
//     node1.deleteLink !== node2.deleteLink ||
//     node1.openLinkedNode !== node2.openLinkedNode ||
//     node1.openAllChildren !== node2.openAllChildren ||
//     node1.hideNodeHandler !== node2.hideNodeHandler ||
//     node1.hideOffsprings !== node2.hideOffsprings ||
//     node1.toggleNode !== node2.toggleNode ||
//     node1.openNodePart !== node2.openNodePart ||
//     node1.selectNode !== node2.selectNode ||
//     node1.nodeClicked !== node2.nodeClicked ||
//     node1.correctNode !== node2.correctNode ||
//     node1.wrongNode !== node2.wrongNode ||
//     node1.uploadNodeImage !== node2.uploadNodeImage ||
//     node1.removeImage !== node2.removeImage ||
//     node1.changeChoice !== node2.changeChoice ||
//     node1.changeFeedback !== node2.changeFeedback ||
//     node1.switchChoice !== node2.switchChoice ||
//     node1.deleteChoice !== node2.deleteChoice ||
//     node1.addChoice !== node2.addChoice
//   ) {
//     return false;
//   }
//   return true;
// };

// export const compareNodes = (nodes1, nodes2) => {
//   if (Object.keys(nodes1).length !== Object.keys(nodes2).length) {
//     return false;
//   }
//   for (let nId of Object.keys(nodes1)) {
//     if (!compare2Nodes(nodes1[nId], nodes2[nId])) {
//       return false;
//     }
//   }
//   return true;
// };

// export const compareEdgeIds = (EdgeIds1, EdgeIds2) => {
//   if (EdgeIds1.length !== EdgeIds2.length) {
//     return false;
//   }
//   for (let idx = 0; idx < EdgeIds1.length; idx++) {
//     if (EdgeIds1[idx] !== EdgeIds2[idx]) {
//       return false;
//     }
//   }
//   return true;
// };

// export const compareEdges = (edges1, edges2) => {
//   if (Object.keys(edges1).length !== Object.keys(edges2).length) {
//     return false;
//   }
//   for (let eId of Object.keys(edges1)) {
//     if (
//       edges1[eId].label !== edges2[eId].label ||
//       edges1[eId].fromX !== edges2[eId].fromX ||
//       edges1[eId].fromY !== edges2[eId].fromY ||
//       edges1[eId].toX !== edges2[eId].toX ||
//       edges1[eId].toY !== edges2[eId].toY
//     ) {
//       return false;
//     }
//   }
//   return true;
// };

// export const compareClusters = (clusters1, clusters2) => {
//   if (Object.keys(clusters1).length !== Object.keys(clusters1).length) {
//     return false;
//   }
//   for (let cId of Object.keys(clusters1)) {
//     if (
//       clusters1[cId].x !== clusters2[cId].x ||
//       clusters1[cId].y !== clusters2[cId].y ||
//       clusters1[cId].width !== clusters2[cId].width ||
//       clusters1[cId].height !== clusters2[cId].height ||
//       clusters1[cId].title !== clusters2[cId].title
//     ) {
//       return false;
//     }
//   }
//   return true;
// };

// export const sortedEdgeIndex = (edges, newEdge) => {
//   let low = 0,
//     high = edges.length;

//   while (low < high) {
//     let mid = (low + high) >>> 1;
//     if (
//       edges[mid].from < newEdge.from ||
//       (edges[mid].from === newEdge.from && edges[mid].to < newEdge.to)
//     )
//       low = mid + 1;
//     else high = mid;
//   }
//   return low;
// };

// export const addNewEdge = (edges, from, to, label) => {
//   const newEdge = {
//     from,
//     to,
//     label,
//     fromX: 0,
//     fromY: 0,
//     toX: 0,
//     toY: 0,
//   };
//   const newEdgeIndex = sortedEdgeIndex(edges, newEdge);
//   edges.splice(newEdgeIndex, 0, newEdge);
//   return newEdge;
// };

// // verifies whether newLink exists in links array
// export const linkExists = (links, newLink) => {
//   for (let link of links) {
//     if (link.node === newLink.node) {
//       // for every other property other than node Id of newLink
//       for (let key of Object.keys(newLink)) {
//         // if that property does not exist in link or its value is different than in link
//         if (!(key in link) || link[key] !== newLink[key]) {
//           // indicates newLink exists in links but some of its properties are updated
//           return newLink;
//         }
//       }
//       // indicates newLink is in links
//       return true;
//     }
//   }
//   // indicates that no link in links has same node Id as the node Id for newLink
//   return false;
// };

// export const getSelectionText = () => {
//   var text = "";
//   var activeEl = document.activeElement;
//   var activeElTagName = activeEl ? activeEl.tagName.toLowerCase() : null;
//   if (
//     activeElTagName == "textarea" ||
//     (activeElTagName == "input" &&
//       /^(?:text|search|password|tel|url)$/i.test(activeEl.type) &&
//       typeof activeEl.selectionStart == "number")
//   ) {
//     text = activeEl.value.slice(activeEl.selectionStart, activeEl.selectionEnd);
//   } else if (window.getSelection) {
//     text = window.getSelection().toString();
//   }
//   return text;
// };

// const applyTagRemove = (oldAllTags, nodeId, dagreLoaded) => {
//   if (nodeId in oldAllTags) {
//     for (let parentTagId of oldAllTags[nodeId].tagIds) {
//       oldAllTags[parentTagId].children = oldAllTags[parentTagId].children.filter(
//         (tgId) => tgId !== nodeId
//       );
//     }
//     for (let childTagId of oldAllTags[nodeId].children) {
//       oldAllTags[childTagId].tagIds = oldAllTags[childTagId].tagIds.filter(
//         (tgId) => tgId !== nodeId
//       );
//     }
//     delete oldAllTags[nodeId];
//     if (dagreLoaded && dag1[0].hasNode("Tag" + nodeId)) {
//       dag1[0].removeNode("Tag" + nodeId);
//     }
//   }
// };

// export const applyAllTagChanges = (oAllTags, docChanges, dagreLoaded) => {
//   let oldAllTags = { ...oAllTags };
//   for (let change of docChanges) {
//     const cType = change.type;
//     const tagData = change.doc.data();
//     const nodeId = tagData.node;
//     if (tagData.deleted || cType === "removed") {
//       applyTagRemove(oldAllTags, nodeId, dagreLoaded);
//     } else {
//       if (nodeId in oldAllTags) {
//         oldAllTags[nodeId].title = tagData.title;
//         // Handle tags change. UPDATE
//         for (let tagIdx = 0; tagIdx < tagData.tagIds.length; tagIdx++) {
//           const tagId = tagData.tagIds[tagIdx];
//           const tag = tagData.tags[tagIdx];
//           if (!oldAllTags[nodeId].tagIds.includes(tagId)) {
//             oldAllTags[nodeId].tagIds.push(tagId);
//             oldAllTags[nodeId].tags.push(tag);
//             if (tagId in oldAllTags) {
//               oldAllTags[tagId].children.push(nodeId);
//             } else {
//               // if not exist parent add in oldTags
//               oldAllTags[tagId] = {
//                 nodeId: tagId,
//                 title: tag,
//                 children: [nodeId],
//                 checked: false,
//                 tags: [],
//               };
//             }
//           }
//         }
//         for (let oldTagId of oldAllTags[nodeId].tagIds) {
//           if (!tagData.tagIds.includes(oldTagId)) {
//             oldAllTags[nodeId].tagIds = oldAllTags[nodeId].tagIds.filter(
//               (tgId) => tgId !== oldTagId
//             );
//             oldAllTags[oldTagId].children = oldAllTags[oldTagId].children.filter(
//               (tgId) => tgId !== nodeId
//             );
//           }
//         }
//       } else {
//         // if not exist tag in oldAllTags,
//         oldAllTags[nodeId] = {
//           title: tagData.title,
//           checked: false,
//           nodeId,
//           tagIds: tagData.tagIds,
//           children: [],
//         };
//         // iterate every parent
//         for (let parentTagIdx = 0; parentTagIdx < tagData.tagIds.length; parentTagIdx++) {
//           const parentTagId = tagData.tagIds[parentTagIdx];
//           const parentTag = tagData.tags[parentTagIdx];
//           if (parentTagId in oldAllTags) {
//             // if exist parent add the child
//             oldAllTags[parentTagId].children.push(nodeId);
//           } else {
//             // if not exist parent, add parent
//             oldAllTags[parentTagId] = {
//               nodeId: parentTagId,
//               title: parentTag,
//               checked: false,
//               tags: [],
//               children: [nodeId],
//             };
//           }
//         }
//       }
//     }
//   }
//   return oldAllTags;
// };
