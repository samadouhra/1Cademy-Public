// import "./Proposals.css";

// import { TabPanel } from "@mui/lab";
// import { Box, Tab, Tabs } from "@mui/material";
import { Box, CircularProgress } from "@mui/material";
import React, { useEffect, useState } from "react";

import { useNodeBook } from "../../context/NodeBookContext";
//import EditProposal from "./EditProposal";
// import { useRecoilState, useRecoilValue } from "recoil";
// import {
//   openProposalState,
//   selectedNodeState,
//   selectionTypeState,
// } from "../../../../../store/MapAtoms";
// import SidebarTabs from "../../SidebarTabs/SidebarTabs";
// import EditProposal from "../EditProposal/EditProposal";
// import NewChildProposal from "../NewChildProposal/NewChildProposal";
// import ProposalsList from "../ProposalsList/ProposalsList";
//import NewChildProposal from "./NewChildProposal";
import ProposalsList from "./ProposalsList/ProposalsList";
import { MemoizedSidebarTabs } from "./SidebarTabs/SidebarTabs";

//type ProposedChildTypesIcons = "Concept" | "Relation" | "Question" | "Code" | "Reference" | "Idea";

// const proposedChildTypesIcons: { [key in ProposedChildTypesIcons]: string } = {
//   Concept: "local_library",
//   Relation: "share",
//   Question: "help_outline",
//   Code: "code",
//   Reference: "menu_book",
//   Idea: "emoji_objects",
// };

type ProposalsProps = {
  proposeNodeImprovement: any;
  fetchProposals: any;
  rateProposal: any;
  selectProposal: any;
  deleteProposal: any;
  proposeNewChild: any;
  openProposal: string;
};

const Proposals = (props: ProposalsProps) => {
  const { nodeBookState } = useNodeBook();
  // const [selectedNode] = useState();
  // const [selectionType] = useState();
  // const [openProposal, setOpenProposal] = useState(false);

  const [isAdmin, setIsAdmin] = useState(false);
  const [isRetrieving, setIsRetrieving] = useState(false);
  const [proposals, setProposals] = useState<any[]>([]);

  useEffect(() => {
    props.fetchProposals(setIsAdmin, setIsRetrieving, setProposals);
    // CHECK: a warning in happening here in fetchProposals (is trying to update the state while is rendering)
    // Try to solve adding await
    // next-dev.js?3515:24 Warning: Cannot update a component (`Proposals`) while rendering a different component (`Dashboard`)
    // TODO: check dependencies to remove eslint-disable-next-line
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    //setOpenProposal(false);
    if (nodeBookState.selectedNode) {
      props.fetchProposals(setIsAdmin, setIsRetrieving, setProposals);
    }
    // CHECK: a warning in happening here in fetchProposals (is trying to update the state while is rendering)
    // Try to solve adding await
    // next-dev.js?3515:24 Warning: Cannot update a component (`Proposals`) while rendering a different component (`Dashboard`)
    // TODO: check dependencies to remove eslint-disable-next-line
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [nodeBookState.selectedNode]);

  // useEffect(() => {
  //   setOpenProposal(false);
  // }, [selectionType]);

  const tabsItems = [
    {
      title: "Pending Proposals",
      content: !isRetrieving ? (
        <Box
          component="ul"
          className="collection"
          sx={{ padding: "0px", margin: "0px", display: "flex", flexDirection: "column", gap: "4px", p: "10px" }}
        >
          <ProposalsList
            proposals={proposals}
            setProposals={setProposals}
            proposeNodeImprovement={props.proposeNodeImprovement}
            fetchProposals={props.fetchProposals}
            rateProposal={props.rateProposal}
            selectProposal={props.selectProposal}
            deleteProposal={props.deleteProposal}
            editHistory={false}
            proposeNewChild={props.proposeNewChild}
            openProposal={props.openProposal}
            isAdmin={isAdmin}
          />
        </Box>
      ) : (
        <div style={{ width: "100%", display: "flex", justifyContent: "center", padding: "20px" }}>
          <CircularProgress />
        </div>
      ),
    },
    {
      title: "Approved Proposals",
      content: !isRetrieving ? (
        <Box
          component="ul"
          className="collection"
          sx={{ padding: "0px", margin: "0px", display: "flex", flexDirection: "column", gap: "4px", p: "10px" }}
        >
          <ProposalsList
            proposals={proposals}
            setProposals={setProposals}
            proposeNodeImprovement={props.proposeNodeImprovement}
            fetchProposals={props.fetchProposals}
            rateProposal={props.rateProposal}
            selectProposal={props.selectProposal}
            deleteProposal={props.deleteProposal}
            editHistory={true}
            proposeNewChild={props.proposeNewChild}
            openProposal={props.openProposal}
            isAdmin={isAdmin}
          />
        </Box>
      ) : (
        <div style={{ width: "100%", display: "flex", justifyContent: "center", padding: "20px" }}>
          <CircularProgress />
        </div>
      ),
    },
  ];

  return (
    // CHECK: I addedd overflow in y
    <div id="ProposalsContainer">
      {/* <div id="ProposeNewChildImprovementTitle">
        <strong>Propose New Child / Improvement</strong>
      </div> */}
      <div id="ProposalButtonsCollection">
        {/* <h6 style={{ margin: '0px' }}>Here Edit proposal component</h6> */}
        {/* CHECK: I commented this */}
        {/* <EditProposal
          openProposal={openProposal}
          proposeNodeImprovement={props.proposeNodeImprovement}
          selectedNode={nodeBookState.selectedNode}
        />
        <div
          id="ProposalButtonsRow"
          style={{ border: "solid 0px pink", display: "flex", justifyContent: "space-around" }}
        >
          {(Object.keys(proposedChildTypesIcons) as ProposedChildTypesIcons[]).map(
            (childNodeType: ProposedChildTypesIcons) => {
              return (
                <NewChildProposal
                  key={childNodeType}
                  childNodeType={childNodeType}
                  icon={proposedChildTypesIcons[childNodeType]}
                  openProposal={openProposal}
                  setOpenProposal={setOpenProposal}
                  proposeNewChild={props.proposeNewChild}
                />
              );
            }
          )}
        </div> */}
      </div>
      <MemoizedSidebarTabs tabsTitle="Proposals tabs" tabsItems={tabsItems} />
    </div>
  );
};

export default React.memo(Proposals);
