import React, { useState } from "react";
import { Box, Button, Checkbox, IconButton, Switch } from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import DeleteIcon from "@mui/icons-material/Delete";
import { styled } from "@mui/system";
import CheckCircleOutlineIcon from "@mui/icons-material/CheckCircleOutline";

const TreeViewWrapper = styled(Box)(({ theme }) => ({
  paddingBottom: "6em",
  width: "100%",
  ul: {
    listStyle: "none",
    paddingLeft: "32px",
    li: {
      padding: "50px 0px 0px 35px",
      position: "relative",
      "&:before": {
        content: '""',
        position: "absolute",
        top: "-2px",
        left: "-22px",
        borderLeft: "2px solid #a2a5b5",
        width: "1px",
        height: "100%",
      },
      "&:after": {
        content: '""',
        position: "absolute",
        borderTop: "2px solid #a2a5b5",
        top: "64px",
        left: "-20px",
        width: "59px",
      },
      "&:last-child:before": {
        top: "-24px",
        height: "90px",
      },
    },
  },
  ".root-node": {
    "&:before": {
      content: "unset",
    },
    "&:after": {
      content: "unset",
    },
  },
  "& > ul > li": {
    padding: 0,
    "&:before": {
      content: "unset",
    },
    "&:after": {
      content: "unset",
    },
  },
}));

const TreeView = () => {
  const [treeData, setTreeData] = useState([
    {
      level: "A",
      subLevels: [
        {
          level: "B",
          subLevels: [
            // {
            //   level: "C",
            //   subLevels: [],
            // },
            // { level: "C", subLevels: [] },
            // { level: "C", subLevels: [] },
          ],
        },
        { level: "B", subLevels: [] },
      ],
    },
  ]);

  const handleAddSameLevel = (index) => {
    // Function to add a new level at the same position
  };

  const handleAddSubLevel = (index) => {
    // Function to add a sub-level under the current level
  };

  const handleRemove = (index) => {
    // Function to remove the current level
  };

  const renderTree = (levels) => {
    return levels.map((levelData, index) => (
      <li key={index}>
        <Box display={'flex'} justifyContent={'space-between'} >
        <Box>
          <Checkbox
            // checked={value.checked}
            sx={{ padding: "0 10px 0 0" }}
            // onChange={() => handleCheckboxChange(key, value)}
            icon={<CheckCircleOutlineIcon />}
            checkedIcon={<CheckCircleOutlineIcon />}
            inputProps={{ "aria-label": "Duly noted and accepted" }}
          />
          {levelData.level}</Box>
          <Switch />
        </Box>
        {levelData.subLevels.length > 0 && (
          <ul>{renderTree(levelData.subLevels)}</ul>
        )}
      </li>
    ));
  };

  return (
    <TreeViewWrapper>
      <ul className="root-node">{renderTree(treeData)} </ul>
    </TreeViewWrapper>
  );
};

export default TreeView;
