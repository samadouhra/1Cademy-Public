import { graphlib } from "dagre";
import { Dispatch, MutableRefObject, SetStateAction, useCallback, useEffect, useMemo, useState } from "react";

import { AllTagsTreeView } from "../components/TagsSearcher";
import { dagreUtils, GraphObject } from "../lib/utils/dagre.util";
import { setDagNodes } from "../lib/utils/Map.utils";
import { EdgeData, EdgesData, FullNodeData, FullNodesData } from "../nodeBookTypes";

export type Task = {
  id: string;
  height: number;
} | null;

type UseWorkerQueueProps = {
  g: MutableRefObject<graphlib.Graph<{}>>;
  graph: { nodes: FullNodesData; edges: EdgesData };
  setGraph: Dispatch<
    SetStateAction<{
      nodes: FullNodesData;
      edges: EdgesData;
    }>
  >;
  setMapWidth: any;
  setMapHeight: any;
  mapWidth: number;
  mapHeight: number;
  allTags: AllTagsTreeView;
  onComplete: () => void;
};
export const useWorkerQueue = ({
  g,
  graph,
  setGraph,
  setMapWidth,
  setMapHeight,
  mapWidth,
  mapHeight,
  allTags,
  onComplete,
}: UseWorkerQueueProps) => {
  const [queue, setQueue] = useState<Task[]>([]);
  const [isWorking, setIsWorking] = useState(false);
  const [didWork, setDidWork] = useState(false);

  const recalculateGraphWithWorker = useCallback(
    (nodesToRecalculate: FullNodesData, edgesToRecalculate: any) => {
      let oldMapWidth = mapWidth;
      let oldMapHeight = mapHeight;
      let oldNodes = { ...nodesToRecalculate };
      let oldEdges = { ...edgesToRecalculate };
      setIsWorking(true);
      const worker: Worker = new Worker(new URL("../workers/MapWorker.ts", import.meta.url));

      worker.postMessage({
        oldMapWidth,
        oldMapHeight,
        oldNodes,
        oldEdges,
        allTags,
        graph: dagreUtils.mapGraphToObject(g.current),
      });
      worker.onerror = err => {
        console.error("[WORKER]error:", err);
        worker.terminate();
        setIsWorking(false);
      };
      worker.onmessage = e => {
        const { oldMapWidth, oldMapHeight, oldNodes, oldEdges, graph } = e.data;

        const gObject = dagreUtils.mapGraphToObject(g.current);
        const graphObject: GraphObject = graph;

        graphObject.edges.forEach(cur => {
          const indexFound = gObject.edges.findIndex(c => c.from === cur.from && c.to == cur.to);
          if (indexFound < 0) return;
          gObject.edges[indexFound] = { ...cur };
        });
        graphObject.nodes.forEach(cur => {
          const indexFound = gObject.nodes.findIndex(c => c.id === cur.id);
          if (indexFound < 0) return;
          gObject.nodes[indexFound] = { ...cur };
        });

        const gg = dagreUtils.mapObjectToGraph(gObject);

        worker.terminate();

        g.current = gg;
        setMapWidth(oldMapWidth);
        setMapHeight(oldMapHeight);
        // setClusterNodes(oldClusterNodes);

        setDidWork(true);
        setGraph(({ nodes, edges }) => {
          // console.log("[queue]: set results", { nodes, edges, gg, oldNodes, oldEdges });
          const nodesCopy = { ...nodes };
          Object.keys(nodesCopy).forEach(nodeId => {
            const resultNode: FullNodeData = oldNodes[nodeId];
            if (!resultNode) return;

            const overrideNode: FullNodeData = {
              ...nodesCopy[nodeId],
              left: resultNode.left,
              top: resultNode.top,
              x: resultNode.x,
              y: resultNode.y,
              height: resultNode.height,
            };
            nodesCopy[nodeId] = overrideNode;
          });

          const edgesCopy = { ...edges };
          Object.keys(edgesCopy).forEach(edgeId => {
            const resultEdge: EdgeData = oldEdges[edgeId];
            if (!resultEdge) return;

            edgesCopy[edgeId] = { ...resultEdge };
          });
          return { nodes: nodesCopy, edges: edgesCopy };
        });

        setIsWorking(false);
        setTimeout(() => {
          onComplete();
        }, 1000);
      };
    },
    [allTags, g, mapHeight, mapWidth, onComplete, setGraph, setMapHeight, setMapWidth]
  );

  useEffect(() => {
    if (isWorking) return;
    if (!queue.length) return;
    if (!g?.current) return;

    // CREATE WORKER with Nodes and Nodes changed
    // console.log("[queue]: recalculateGraphWithWorker", { graph, queue });
    const individualNodeChanges: FullNodeData[] = queue
      .map(cur => {
        if (!cur) return null;
        return { ...graph.nodes[cur.id], height: cur.height };
      })
      .flatMap(cur => cur || []);
    const nodesToRecalculate = setDagNodes(g.current, individualNodeChanges, graph.nodes, allTags);

    recalculateGraphWithWorker(nodesToRecalculate, graph.edges);
    setQueue([]);
  }, [allTags, g, graph, isWorking, queue, recalculateGraphWithWorker /* tasksToWait */]);

  const addTask = (newTask: Task) => {
    setQueue(queue => [...queue, newTask]);
  };

  const queueFinished = useMemo(() => {
    if (!didWork) return false; // it dident execute a task before
    if (queue.length) return false; // it has pendient tasks

    // if (isQueueWorking) return false; // is working now
    return true;
  }, [didWork, queue.length]);

  return { addTask, queue, isQueueWorking: isWorking, queueFinished };
};
