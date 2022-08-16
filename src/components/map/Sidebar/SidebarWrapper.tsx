// import "./SidebarWrapper.css";

import Image from "next/image";
import React from "react";

import MetaButton from "../MetaButton";

// import MetaButton from "../../MetaButton/MetaButton";

type SidebarWrapperProps = {
  headerImage: any,
  title: string,
  scrollToTop: any,
  closeSideBar: any,
  children: JSX.Element,
  noHeader?: any
}

const SidebarWrapper = (props: SidebarWrapperProps) => {
  return (
    <>
      <div id="SidebarContainer" className={props.noHeader ? "MiniUserProfileSidebar" : ""}>
        {!props.noHeader ? (
          <>
            <div id="SidebarHeader">
              {/* <img
                id="SidebarHeaderImage"
                src={props.headerImage}
                alt={props.title + " Header Background"}
                width="100%"
              ></img> */}
              <Image src={props.headerImage} alt={props.title + " Header Background"} />
              <div id="SidebarHeaderText">{props.title}</div>
            </div>
            <div id="SidebarBody">{props.children}</div>
          </>
        ) : (
          props.children
        )}
      </div>
      <div id="SideBarClose">
        <MetaButton
          onClick={props.closeSideBar}
          tooltip="Close the sidebar."
          tooltipPosition="Left"
        >
          <div className="CloseButton">
            <i className="material-icons">close</i>
          </div>
        </MetaButton>
      </div>
      {/* <div id="ScrollToTop">
        <MetaButton onClick={props.scrollToTop} tooltip="Back to top." tooltipPosition="Left">
          <i className="material-icons gray-text">arrow_upward</i>
        </MetaButton>
      </div> */}
    </>
  );
};

export const MemoizedSidebarWrapper = React.memo(SidebarWrapper);
