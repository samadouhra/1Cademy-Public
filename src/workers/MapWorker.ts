// dagre is used for calculating location of nodes and arrows
import dagre from "dagre";

import { JSONfn } from "../lib/utils/jsonFn";
import { setDagNode, setEdgeInDag, setNodeInDagger } from '../lib/utils/Map.utils'
// import "https://dagrejs.github.io/project/dagre/latest/dagre.min.js"
// self.importScripts("https://dagrejs.github.io/project/dagre/latest/dagre.min.js");

const layoutHandler = (
  mapChangedFlag,
  oldClusterNodes,
  oldMapWidth,
  oldMapHeight,
  oldNodes,
  oldEdges,
  allTags,
  dag1,
  XOFFSET,
  YOFFSET,
  MIN_CHANGE,
  MAP_RIGHT_GAP,
  NODE_WIDTH,
  setDagNodex,
  setDagEdge
) => {
  let mapNewWidth, mapNewHeight;
  while (mapChangedFlag) {
    mapChangedFlag = false;

    // DAGRE RECALCULATE LAYOUT
    console.log('DAGGER', dag1)
    dagre.layout(dag1);
    const clusterRegions = {};

    // Iterate oldNodes and find the cluster boundary
    // and update their size
    // if not existe create the cluster
    for (let nId in oldNodes) {
      //  if the node belongs to a cluster
      if (
        "tagIds" in oldNodes[nId] &&
        oldNodes[nId].tagIds.length > 0 &&
        oldNodes[nId].tagIds[0] in allTags
      ) {
        //  nodeN is the object corresponding to this node in dagr
        const nodeN = dag1.node(nId);
        if (oldNodes[nId].tagIds[0] in clusterRegions) {
          //  if the cluster is defined, update its bounds
          if (clusterRegions[oldNodes[nId].tagIds[0]].yMin > nodeN.y - nodeN.height / 2) {
            clusterRegions[oldNodes[nId].tagIds[0]].yMin = nodeN.y - nodeN.height / 2;
          }
          if (clusterRegions[oldNodes[nId].tagIds[0]].yMax < nodeN.y + nodeN.height / 2) {
            clusterRegions[oldNodes[nId].tagIds[0]].yMax = nodeN.y + nodeN.height / 2;
          }
          if (clusterRegions[oldNodes[nId].tagIds[0]].xMin > nodeN.x - nodeN.width / 2) {
            clusterRegions[oldNodes[nId].tagIds[0]].xMin = nodeN.x - nodeN.width / 2;
          }
          if (clusterRegions[oldNodes[nId].tagIds[0]].xMax < nodeN.x + nodeN.width / 2) {
            clusterRegions[oldNodes[nId].tagIds[0]].xMax = nodeN.x + nodeN.width / 2;
          }
        } else {
          //  define a cluster
          clusterRegions[oldNodes[nId].tagIds[0]] = {
            yMin: nodeN.y - nodeN.height / 2,
            yMax: nodeN.y + nodeN.height / 2,
            xMin: nodeN.x - nodeN.width / 2,
            xMax: nodeN.x + nodeN.width / 2,
          };
        }
      }
    }

    // Update OldClusterNodes
    for (let cNode in clusterRegions) {
      const nodeN = dag1.node("Tag" + cNode);
      oldClusterNodes[cNode] = {
        id: cNode,
        x: clusterRegions[cNode].xMin + XOFFSET,
        y: clusterRegions[cNode].yMin + YOFFSET,
        width: clusterRegions[cNode].xMax - clusterRegions[cNode].xMin,
        height: clusterRegions[cNode].yMax - clusterRegions[cNode].yMin,
        title: nodeN.title,
      };
    }

    // ITERATE oldNodes
    // get every node (nodeN) calculated by dagre
    // calculate OFFSETs
    // update with setDagNode
    // calculate map
    // debugger
    Object.keys(oldNodes).map((n) => {
      const nodeN = dag1.node(n);
      // If there is an object (label) assigned to the node in dag1[0], otherwise it'd be undefined:
      debugger
      if (nodeN) {
        const newLeft = nodeN.x + XOFFSET - nodeN.width / 2;
        const newTop = nodeN.y + YOFFSET - nodeN.height / 2;
        const thisNode = { ...oldNodes[n] };
        //  if the distance between the new edge and old edge is >= constant value MIN_CHANGE
        //  update the map's width and mapChangedFlag accordingly
        if (
          !("left" in thisNode) ||
          !("top" in thisNode) ||
          Math.abs(thisNode.left - newLeft) >= MIN_CHANGE ||
          Math.abs(thisNode.top - newTop) >= MIN_CHANGE
        ) {
          oldNodes = setNodeInDagger(dag1, n, { ...thisNode, left: newLeft, top: newTop }, oldNodes, {}, null);

          mapNewWidth = newLeft + nodeN.width + MAP_RIGHT_GAP;
          if (oldMapWidth < mapNewWidth) {
            oldMapWidth = mapNewWidth;
          }
          mapNewHeight = newTop + nodeN.height;
          if (oldMapWidth < mapNewHeight) {
            oldMapWidth = mapNewHeight;
          }
          mapChangedFlag = true;
        }
      }
      return null;
    });

    // ITERATE EDGES and calculate the new positions
    dag1.edges().map((e: any) => {
      const fromNode = dag1.node(e.v);
      const toNode = dag1.node(e.w);
      debugger
      console.log({ fromNode, toNode })
      if (
        "left" in fromNode &&
        "top" in fromNode &&
        "left" in toNode &&
        "top" in toNode &&
        "height" in fromNode &&
        "height" in toNode
      ) {
        const newFromX = fromNode.left + NODE_WIDTH;
        const newFromY = fromNode.top + Math.floor(fromNode.height / 2);
        const newToX = toNode.left;
        const newToY = toNode.top + Math.floor(toNode.height / 2);
        const thisEdge = oldEdges[e.v + "-" + e.w];
        console.log([
          !("fromX" in thisEdge),
          !("fromY" in thisEdge),
          !("toX" in thisEdge),
          !("toY" in thisEdge),
          Math.abs(thisEdge.fromX - newFromX) >= MIN_CHANGE,
          Math.abs(thisEdge.fromY - newFromY) >= MIN_CHANGE,
          Math.abs(thisEdge.toX - newToX) >= MIN_CHANGE,
          Math.abs(thisEdge.toY - newToY) >= MIN_CHANGE
        ])
        if (
          !("fromX" in thisEdge) ||
          !("fromY" in thisEdge) ||
          !("toX" in thisEdge) ||
          !("toY" in thisEdge) ||
          Math.abs(thisEdge.fromX - newFromX) >= MIN_CHANGE ||
          Math.abs(thisEdge.fromY - newFromY) >= MIN_CHANGE ||
          Math.abs(thisEdge.toX - newToX) >= MIN_CHANGE ||
          Math.abs(thisEdge.toY - newToY) >= MIN_CHANGE
        ) {
          debugger
          oldEdges = setEdgeInDag(
            dag1,
            e.v,
            e.w,
            {
              ...thisEdge,
              fromX: newFromX,
              fromY: newFromY,
              toX: newToX,
              toY: newToY,
            },
            oldEdges
          );
          console.log(' ---------->>>  WORKER 1', { oldEdges })
          mapChangedFlag = true;
        }
        return null;
      }
    });
  }
  console.log(' ---------->>>  WORKER 2', { oldEdges })
  return { mapChangedFlag, oldClusterNodes, oldMapWidth, oldMapHeight, oldNodes, oldEdges };
};

onmessage = (e) => {
  const {
    mapChangedFlag,
    oldClusterNodes,
    oldMapWidth,
    oldMapHeight,
    oldNodes,
    oldEdges,
    allTags,
    dag1,
    XOFFSET,
    YOFFSET,
    MIN_CHANGE,
    MAP_RIGHT_GAP,
    NODE_WIDTH,
    setDagNode,
    setDagEdge,
  } = e.data;
  let dagerObject = JSONfn.parse(dag1)
  dagerObject.__proto__ = dagre.graphlib.Graph.prototype;

  const workerResults = layoutHandler(
    mapChangedFlag,
    oldClusterNodes,
    oldMapWidth,
    oldMapHeight,
    oldNodes,
    oldEdges,
    allTags,
    dagerObject,
    XOFFSET,
    YOFFSET,
    MIN_CHANGE,
    MAP_RIGHT_GAP,
    NODE_WIDTH,
    JSONfn.parse(setDagNode),
    JSONfn.parse(setDagEdge)
  );
  postMessage(workerResults);
};
