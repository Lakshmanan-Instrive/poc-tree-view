import React from "react";
import { Box, Typography } from "@mui/material";
import { styled } from "@mui/system";

const CommentContainer = styled(Box)(({ level }) => ({
  position: "relative",
  paddingLeft: `${20 + level * 20}px`,
  marginBottom: "10px",
  "&:before": {
    content: '""',
    position: "absolute",
    left: 0,
    top: 0,
    width: "1px",
    height: "100%",
    backgroundColor: "#ccc",
  },
  "&:after": {
    content: '""',
    position: "absolute",
    left: "0.5px",
    top: "100%",
    width: "20px",
    height: "1px",
    backgroundColor: "#ccc",
  },
  "&:last-child:before": {
    display: "none",
  },
}));

const Comment = ({ comment, level = 0 }) => (
  <CommentContainer level={level}>
    <Typography>{comment.text}</Typography>
    {comment.replies && comment.replies.length > 0 && (
      <Box>
        {comment.replies.map((reply) => (
          <Comment key={reply.id} comment={reply} level={level + 1} />
        ))}
      </Box>
    )}
  </CommentContainer>
);

export default Comment;
