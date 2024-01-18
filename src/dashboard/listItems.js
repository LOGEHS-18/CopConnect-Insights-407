import * as React from 'react';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import ListSubheader from '@mui/material/ListSubheader';
import DashboardIcon from '@mui/icons-material/Dashboard';
import PeopleIcon from '@mui/icons-material/People';
import AssignmentIcon from '@mui/icons-material/Assignment';
import FolderIcon from '@mui/icons-material/Folder';
import { Button } from '@mui/material';

export const mainListItems = (
  <React.Fragment>
    <ListItemButton>
      <ListItemIcon>
        <DashboardIcon />
      </ListItemIcon>
      <ListItemText primary="Home" />
    </ListItemButton>
    <ListItemButton>
      <ListItemIcon>
        <FolderIcon/>
      </ListItemIcon>
      <ListItemText primary="LeaderBoard" onClick={() => (window.location.href = '/LeaderBoard')}>
      <Button type="submit" variant="outlined">LeaderBoard</Button>
      </ListItemText> 
    </ListItemButton>
    <ListItemButton>
      <ListItemIcon>
        <PeopleIcon />
      </ListItemIcon>
      <ListItemText primary="Pending Cases" />
    </ListItemButton>
    <ListItemButton>
      <ListItemIcon>
        <FolderIcon/>
      </ListItemIcon>
      <ListItemText primary="Report" onClick={() => (window.location.href = '/Report')}>
      <Button type="submit" variant="outlined">Report</Button>
      </ListItemText> 
    </ListItemButton>
  </React.Fragment>
);

export const secondaryListItems = (
  <React.Fragment>
    <ListSubheader component="div" inset>
      Top 5 Officers
    </ListSubheader>
    <ListItemButton>
      <ListItemIcon>
        <AssignmentIcon />
      </ListItemIcon>
      <ListItemText primary="Current month" />
    </ListItemButton>
    <ListItemButton>
      <ListItemIcon>
        <AssignmentIcon />
      </ListItemIcon>
      <ListItemText primary="Last quarter" />
    </ListItemButton>
    <ListItemButton>
      <ListItemIcon>
        <AssignmentIcon />
      </ListItemIcon>
      <ListItemText primary="Year-end sale" />
    </ListItemButton>
  </React.Fragment>
);
export const ThirdListItems = (
  <React.Fragment>
    <ListSubheader component="div" inset>
      Reports
    </ListSubheader>
    <ListItemButton>
      <ListItemIcon>
        <FolderIcon/>
      </ListItemIcon>
      <ListItemText primary="Specific FeedBack" onClick={() => (window.location.href = '/submissions')}>
      <Button type="submit" variant="outlined">Specific FeedBack Form</Button>
      </ListItemText> 
    </ListItemButton>
    <ListItemButton>
      <ListItemIcon>
        <FolderIcon/>
      </ListItemIcon>
      <ListItemText primary="General FeedBack" onClick={() => (window.location.href = '/submissions2')}>
      <Button type="submit" variant="outlined">General FeedBack Form</Button>
      </ListItemText> 
    </ListItemButton>
  </React.Fragment>
);
export const FourListItems = (
  <React.Fragment>
    <ListSubheader component="div" inset>
      Complaints
    </ListSubheader>
    <ListItemButton>
      <ListItemIcon>
        <FolderIcon/>
      </ListItemIcon>
      <ListItemText primary="Complaint" onClickcomplaint={() => (window.location.href = '/submission')}>
      <Button type="submit" variant="outlined"></Button>
      </ListItemText> 
    </ListItemButton>
  </React.Fragment>
);
