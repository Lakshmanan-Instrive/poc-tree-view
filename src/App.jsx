// import React from "react";
// import { Box, Checkbox, Switch, Typography } from "@mui/material";
// import Timeline from "@mui/lab/Timeline";
// import TimelineItem from "@mui/lab/TimelineItem";
// import TimelineSeparator from "@mui/lab/TimelineSeparator";
// import TimelineConnector from "@mui/lab/TimelineConnector";
// import TimelineContent from "@mui/lab/TimelineContent";
// import TimelineDot from "@mui/lab/TimelineDot";
// import CheckCircleOutlineIcon from "@mui/icons-material/CheckCircleOutline";

import DynamicDividerTree from "./DynamicDividerTree";
import TreeView from "./TreeView";
import "./App.css";

// // Sample JSON data
// const timelineData = [
//   {
//     date: "2024-01-01",
//     title: "Event 1",
//     description: "Description of event 1",
//   },
//   {
//     date: "2024-02-15",
//     title: "Event 2",
//     description: "Description of event 2",
//   },
//   {
//     date: "2024-03-10",
//     title: "Event 3",
//     description: "Description of event 3",
//   },
//   {
//     date: "2024-04-20",
//     title: "Event 4",
//     description: "Description of event 4",
//   },
// ];

// function App() {
//   return (
//     <div style={{ margin: "20px" }}>
//       <Typography variant="h4" gutterBottom>
//         Example
//       </Typography>
//       <Timeline position="right">
//         {timelineData.map((item, index) => (
//           <TimelineItem key={index}>
//             <TimelineSeparator>
//               {index === 0 ? (
//                 <Checkbox
//                   sx={{ padding: "0px" }}
//                   checked={false}
//                   // onChange={handleCheckboxChange}
//                   icon={<CheckCircleOutlineIcon />}
//                   checkedIcon={<CheckCircleOutlineIcon />}
//                   inputProps={{ "aria-label": "Duly noted and accepted" }}
//                 />
//               ) : (
//               <Box
//                 sx={{
//                   width: "2px",
//                   backgroundColor: "#bdbdbd",
//                   WebkitBoxFlex: 1,
//                   WebkitFlexGrow: 1,
//                   msFlexPositive: 1,
//                   flexGrow: 1,
//                 }}
//               />
//               )}

//               {index < timelineData.length - 1 && <TimelineConnector sx={{height:"10px"}} />}
//             </TimelineSeparator>
//             <TimelineSeparator
//               sx={{ transform: "rotate(90deg)", marginLeft: "21px" }}
//             >
//               {index < timelineData.length - 1 && <TimelineConnector />}
//             </TimelineSeparator>
//             {index < timelineData.length - 1 && (
//               <TimelineContent display={"flex"}>
//                 <Checkbox
//                   checked={false}
//                   // onChange={handleCheckboxChange}
//                   icon={<CheckCircleOutlineIcon />}
//                   checkedIcon={<CheckCircleOutlineIcon />}
//                   inputProps={{ "aria-label": "Duly noted and accepted" }}
//                 />
//               </TimelineContent>
//             )}
//           </TimelineItem>
//         ))}
//       </Timeline>
//     </div>
//   );
// }

// export default App;

export default function App() {
  return (
    // <DynamicDividerTree />
    <TreeView />
  );
}