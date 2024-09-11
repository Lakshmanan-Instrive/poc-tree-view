import React, { useState } from "react";
import { TreeView, TreeItem } from "@mui/x-tree-view";
import { Typography, Switch, Box, Checkbox } from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import { styled } from "@mui/material/styles";
import CheckCircleOutlineIcon from "@mui/icons-material/CheckCircleOutline";
import AddToQueueIcon from "@mui/icons-material/AddToQueue";

const StyledTreeItem = styled(TreeItem)(({ theme }) => ({
  "& .MuiTreeItem-content": {
    display: "flex",
    alignItems: "center",
  },
  "& .MuiTreeItem-label": {
    display: "flex",
    justifyContent: "space-between",
    width: "100%",
  },
  "& .MuiTreeItem-iconContainer": {
    display: "none", // Add this line to hide the icon container
  },
  
}));

const CustomTreeView = () => {
  const [checked, setChecked] = useState(false);

  const handleCheckboxChange = (event) => {
    setChecked(event.target.checked);
  };

  return (
    <TreeView expandedItems={["1"]} aria-label="customized" >
      <StyledTreeItem
        nodeId="1"
        itemId="1"
        label={
          <Box
            display="flex"
            alignItems="center"
            justifyContent="space-between"
            width="100%"
          >
            <Checkbox
              checked={checked}
              onChange={handleCheckboxChange}
              icon={<CheckCircleOutlineIcon />}
              checkedIcon={<CheckCircleOutlineIcon />}
              inputProps={{ "aria-label": "Duly noted and accepted" }}
            />
            <Typography>
              Key team members: at least 0% must meet DEI requirement
            </Typography>

            <Switch />
          </Box>
        }
      >
        <StyledTreeItem
          nodeId="2"
          itemId="2"
          label={
            <Box
              display="flex"
              alignItems="center"
              justifyContent="space-between"
              width="100%"
            >
              <Typography>Technology</Typography>
            </Box>
          }
        ></StyledTreeItem>
        <StyledTreeItem
          nodeId="3"
          itemId="3"
          label={
            <Box
              display="flex"
              alignItems="center"
              justifyContent="space-between"
              width="100%"
            >
              <Typography>Technology</Typography>
            </Box>
          }
        ></StyledTreeItem>
      </StyledTreeItem>

      {/* Add more sections similarly for more nodes */}
    </TreeView>
  );
};

export default CustomTreeView;
