import React, { useEffect } from "react";
import { Box, Divider, Typography, Checkbox, Switch } from "@mui/material";
import CheckCircleOutlineIcon from "@mui/icons-material/CheckCircleOutline";

// Example JSON data
const sample_data = {
  root: {
    label: "Key team members: at least 0% must meet DEI requirement",
    checked: false,
    toggle: false,
    comment: "",
  },
  nodes: {
    Technology1: [
      {
        label: "Key team members: at least 0% must meet DEI requirement",
        checked: false,
        toggle: false,
        comment: "ABC",
      },
      {
        label: "Key team members: at least 0% must meet DEI requirement",
        checked: false,
        toggle: false,
        comment: "",
      },
    ],
    Technology2: [
      {
        label: "Key team members: at least 0% must meet DEI requirement",
        checked: false,
        toggle: false,
        comment: "CDE",
      },
      {
        label: "Key team members: at least 0% must meet DEI requirement",
        checked: false,
        toggle: false,
        comment: "FGH",
      },
      {
        label: "Key team members: at least 0% must meet DEI requirement",
        checked: false,
        toggle: false,
        comment: "FGH",
      },
    ],
  },
};

function DynamicDividerTree() {
  const [data, setData] = React.useState(sample_data);
  const [height, setHeight] = React.useState(null);
  const divElement = document.getElementById("divider_vertical");
  useEffect(() => {
    console.log("useEffect");
    // Get the height of the div and reduce 10px

    console.log(divElement);
    const divHeight = divElement ? divElement.offsetHeight : 0;
    console.log(divHeight);
    setHeight(divHeight - 30);
  }, [divElement, data]);

  const handleCheckboxChange = (key, value) => {
    setData((prevData) => {
      const newNodes = prevData.nodes[key].map((node) => {
        if (node === value) {
          return { ...node, checked: !node.checked };
        }
        return node;
      });
      return {
        ...prevData,
        nodes: {
          ...prevData.nodes,
          [key]: newNodes,
        },
      };
    });
  };
  const handleCommentChange = (event, key, value) => {
    console.log(value, event.target.value);
    setData((prevData) => {
      const newNodes = prevData.nodes[key].map((node) => {
        if (node === value) {
          return { ...node, comment: event.target.value };
        }
        return node;
      });
      return {
        ...prevData,
        nodes: {
          ...prevData.nodes,
          [key]: newNodes,
        },
      };
    });
  };

  const handleToggleChange = (key, value) => {
    // Write your logic here
    console.log(key, value);
    setData((prevData) => {
      const newNodes = prevData.nodes[key].map((node) => {
        if (node === value) {
          return { ...node, toggle: !node.toggle };
        }
        return node;
      });
      return {
        ...prevData,
        nodes: {
          ...prevData.nodes,
          [key]: newNodes,
        },
      };
    });
  };

  const rootToggleChange = () => {
    setHeight(null);
    setData({
      ...data,
      root: {
        ...data.root,
        toggle: !data.root.toggle,
      },
    });
  };
  const rootCheckboxChange = () => {
    setData((prevData) => {
      return {
        ...prevData,
        root: { ...prevData.root, checked: !prevData.root.checked },
      };
    });
  };
  const rootCommentChange = (event) => {
    setData((prevData) => {
      return {
        ...prevData,
        root: { ...prevData.root, comment: event.target.value },
      };
    });
  };
  return (
    <Box padding={"20px 20px 20px 300px"}>
      <Box position={"relative"} right={"10px"}>
        <Checkbox
          checked={data.root.checked}
          sx={{ padding: "0" }}
          onChange={() => rootCheckboxChange()}
          icon={<CheckCircleOutlineIcon />}
          checkedIcon={<CheckCircleOutlineIcon />}
          inputProps={{ "aria-label": "Duly noted and accepted" }}
        />
        {data.root.label}
        <Switch
          sx={{ marginLeft: "118px" }}
          checked={data.root.toggle}
          onChange={() => rootToggleChange()}
        />
        {data.root.toggle && (
          <Box sx={{ marginLeft: "50px", width: "90%" }}>
            <input
              style={{ width: "90%", height: "100px" }}
              placeholder="Enter comment"
              type="text"
              onChange={(e) => handleCommentChange(e, key, value)}
              value={data.root.comment}
            />
          </Box>
        )}
      </Box>

      <Divider
        orientation="vertical"
        flexItem
        id="divider_vertical"
        sx={{
          borderLeftWidth: 1,
          marginRight: 1,
          paddingLeft: "0px",
        }}
      >
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "flex-start",
            marginLeft: "-10px",
          }}
        >
          {Object.entries(data.nodes).map(([key, values]) => (
            <>
              <Box marginLeft={"50px"} key={key}>
                {key}
              </Box>
              {values.map((value, index) => (
                <>
                  <Box
                    key={index}
                    sx={{
                      display: "flex",
                      alignItems: "center",
                      height: "40px",
                    }}
                  >
                    <Divider
                      sx={{
                        width: "50px",
                        borderBottomWidth: 1,
                        borderColor: "black",
                      }}
                    />
                    <Checkbox
                      checked={value.checked}
                      sx={{ padding: "0" }}
                      onChange={() => handleCheckboxChange(key, value)}
                      icon={<CheckCircleOutlineIcon />}
                      checkedIcon={<CheckCircleOutlineIcon />}
                      inputProps={{ "aria-label": "Duly noted and accepted" }}
                    />
                    <Typography sx={{ paddingRight: "50px" }}>
                      {value.label}
                    </Typography>
                    <Switch
                      checked={value.toggle}
                      onChange={() => handleToggleChange(key, value)}
                    />
                  </Box>
                  {value.toggle && (
                    <Box sx={{ marginLeft: "50px", width: "90%" }}>
                      <input
                        style={{ width: "90%", height: "100px" }}
                        placeholder="Enter comment"
                        type="text"
                        onChange={(e) => handleCommentChange(e, key, value)}
                        value={value.comment}
                      />
                    </Box>
                  )}
                </>
              ))}
            </>
          ))}
        </Box>
      </Divider>
    </Box>
  );
}

export default DynamicDividerTree;
