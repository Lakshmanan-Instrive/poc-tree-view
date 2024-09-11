import React from "react";
import { Handle } from "react-flow-renderer";
import { Checkbox, Switch, Typography } from "@mui/material";

const CustomNode = ({ data }) => {
  return (
    <div style={{ padding: 10, border: "1px solid #ddd", borderRadius: 5 }}>
      <Handle type="target" position="top" style={{ background: "#555" }} />
      <Typography variant="body2">{data.label}</Typography>
      <Checkbox />
      <Switch />
      <Handle type="source" position="bottom" style={{ background: "#555" }} />
    </div>
  );
};

export default CustomNode;
