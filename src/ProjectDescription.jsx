import  { useState } from 'react';
import { Grid, Paper, Card, CardContent, Checkbox, Typography, IconButton, SvgIcon, TextareaAutosize } from '@mui/material';
import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutline';
import AddToQueueIcon from '@mui/icons-material/AddToQueue';

function ProjectDescription() {
  const [checked, setChecked] = useState(false);
  const [comment, setComment] = useState('dhndhdhdh');

  const handleCheckboxChange = (event) => {
    setChecked(event.target.checked);
  };

  const handleCommentChange = (event) => {
    setComment(event.target.value);
  };

return (
    <>
        <Grid container alignItems="center">
            <Checkbox
                checked={checked}
                onChange={handleCheckboxChange}
                icon={<CheckCircleOutlineIcon />}
                checkedIcon={<CheckCircleOutlineIcon />}
                inputProps={{ 'aria-label': 'Duly noted and accepted' }}
            />
            <Typography variant="body1">
                <strong>Description of project</strong>
            </Typography>
        </Grid>
        <Grid container alignItems="center">
            <Checkbox
                checked={checked}
                onChange={handleCheckboxChange}
                icon={<CheckCircleOutlineIcon />}
                checkedIcon={<CheckCircleOutlineIcon />}
                inputProps={{ 'aria-label': 'Duly noted and accepted' }}
            />
            <Typography variant="body1">
                <strong>Description of project</strong>
            </Typography>
        </Grid>
    </>
);
}

export default ProjectDescription;
