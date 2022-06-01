import { Box, Card, CardContent, CardHeader, Divider, List, Typography } from "@mui/material";
import { SxProps, Theme } from "@mui/system";
import React, { FC } from "react";

import { encodeTitle, isValidHttpUrl } from "../lib/utils";
import { LinkedKnowledgeNode } from "../src/knowledgeTypes";
import LinkedNodeItem from "./LinkedNodeItem";

type Props = {
  tags: LinkedKnowledgeNode[];
  sx?: SxProps<Theme>;
};

const TagsList: FC<Props> = ({ tags, sx }) => {
  const getReferenceTitle = (el: LinkedKnowledgeNode) => {
    if (isValidHttpUrl(el.label)) {
      return `${el.title}:  ${el.label}`;
    }
    return el.title || "";
  };

  return (
    <Card sx={{ ...sx }}>
      <CardHeader
        sx={{
          height: "60px",
          px: "50px",
          backgroundColor: theme => theme.palette.grey[100]
        }}
        title={
          <Box>
            <Typography variant="h5" fontWeight={300} fontSize="23px">
              Tags
            </Typography>
          </Box>
        }
      ></CardHeader>
      <CardContent sx={{ px: "0px" }}>
        <List sx={{ p: "0px" }} dense>
          {tags.map((node, idx, src) => (
            <React.Fragment key={idx}>
              <LinkedNodeItem
                // key={idx}
                title={getReferenceTitle(node)}
                linkSrc={`../${encodeTitle(node.title)}/${node.node}`}
                nodeType={node.nodeType}
                nodeImageUrl={node.nodeImage}
                nodeContent={node.content}
                showListItemIcon={false}
                label={node.label || ""}
                sx={{ p: "40px 50px" }}
              />
              {idx < src.length - 1 && <Divider />}
            </React.Fragment>
          ))}
        </List>
      </CardContent>
    </Card>
  );
};

export default TagsList;
