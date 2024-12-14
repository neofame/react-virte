import React, { useState } from 'react';
import { Drawer, IconButton, List, ListItem, ListItemText, ListItemIcon, Toolbar, Tooltip, Box, Collapse, Divider } from '@mui/material';
import { ExpandLess, ExpandMore } from '@mui/icons-material';
import MenuIcon from '@mui/icons-material/Menu';
import HomeIcon from '@mui/icons-material/Home';
import InfoIcon from '@mui/icons-material/Info';
import ContactMailIcon from '@mui/icons-material/ContactMail';
import VideocamIcon from '@mui/icons-material/Videocam';
import SettingsIcon from '@mui/icons-material/Settings';
import { useNavigate } from 'react-router-dom';

const Navigation = () => {
  const [open, setOpen] = useState(false);
  const [compact, setCompact] = useState(false);
  const [homeOpen, setHomeOpen] = useState(false);
  const navigate = useNavigate(); // React Router의 useNavigate 훅

  const handleToggle = () => {
    setOpen(!open);
  };

  const handleCompactToggle = () => {
    setCompact(!compact); // 메뉴 모드 전환
  };

  const handleHomeClick = () => {
    setHomeOpen(!homeOpen);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const navigateTo = (path) => {
    // 여기에 네비게이션 로직을 추가하세요. 예: useNavigate() 훅 사용.

    navigate(path);
    console.log(`Navigating to ${path}`);
    handleClose();
  };

  return (
    <>
      <IconButton
        edge="start"
        color="inherit"
        aria-label="menu"
        onClick={handleToggle}
        sx={{
          marginRight: 1,
          '&:focus': {
            outline: 'none',
            boxShadow: 'none',
          },
          '& .MuiSvgIcon-root': {
            fontSize: '1.5rem', // 아이콘 크기를 줄임
          },
        }}
      >
        <MenuIcon />
      </IconButton>
      <Drawer anchor="left" open={open} onClose={handleClose}>
        <Toolbar sx={{ justifyContent: 'flex-start', paddingLeft: 1 }}>
          <IconButton 
            onClick={handleCompactToggle} 
            sx={{
              marginRight: 1,
              '&:focus': {
                outline: 'none',
                boxShadow: 'none',
              },
              '& .MuiSvgIcon-root': {
                fontSize: '1.5rem', // 아이콘 크기를 줄임
              },
            }}
          >
            <MenuIcon />
          </IconButton>
        </Toolbar>
        <List>
          {compact ? (
            <Box>
              <Tooltip title="Home" placement="right">
                <ListItem button onClick={handleHomeClick}>
                  <ListItemIcon sx={{ minWidth: '40px', marginLeft: '8px' }}><HomeIcon fontSize="small" /></ListItemIcon>
                  {homeOpen ? <ExpandLess /> : <ExpandMore />}
                </ListItem>
              </Tooltip>
              <Collapse in={homeOpen} timeout="auto" unmountOnExit>
                <List component="div" disablePadding>
                  <Tooltip title="Sub Item 1" placement="right">
                    <ListItem button sx={{ pl: 4 }} onClick={() => navigateTo('/About')}>
                      <ListItemIcon sx={{ minWidth: '40px' }}><HomeIcon fontSize="small" /></ListItemIcon>
                      {/* <ListItemText primary="Sub Item 1" /> */}
                    </ListItem>
                  </Tooltip>
                  <Tooltip title="Sub Item 2" placement="right">
                    <ListItem button sx={{ pl: 4 }}>
                      <ListItemIcon sx={{ minWidth: '40px' }}><HomeIcon fontSize="small" /></ListItemIcon>
                      {/* <ListItemText primary="Sub Item 2" /> */}
                    </ListItem>
                  </Tooltip>
                </List>
              </Collapse>
              <Divider />
              <Tooltip title="Videos" placement="right">
                <ListItem button onClick={() => navigateTo('/videos')}>
                  <ListItemIcon sx={{ minWidth: '40px', marginLeft: '8px' }}><VideocamIcon fontSize="small" /></ListItemIcon>
                </ListItem>
              </Tooltip>
              <Divider />
              <Tooltip title="Settings" placement="right">
                <ListItem button onClick={() => navigateTo('/settings')}>
                  <ListItemIcon sx={{ minWidth: '40px', marginLeft: '8px' }}><SettingsIcon fontSize="small" /></ListItemIcon>
                </ListItem>
              </Tooltip>
            </Box>
          ) : (
            <>
              <ListItem button onClick={handleHomeClick}>
                <ListItemIcon sx={{ minWidth: '40px', marginLeft: '8px' }}><HomeIcon /></ListItemIcon>
                <ListItemText primary="Home" />
                {homeOpen ? <ExpandLess /> : <ExpandMore />}
              </ListItem>
              <Collapse in={homeOpen} timeout="auto" unmountOnExit>
                <List component="div" disablePadding>
                  <ListItem button sx={{ pl: 4 }} onClick={() => navigateTo('/About')}>
                    <ListItemIcon sx={{ minWidth: '40px' }}><HomeIcon /></ListItemIcon>
                    <ListItemText primary="Sub Item 1" />
                  </ListItem>
                  <ListItem button sx={{ pl: 4 }}>
                    <ListItemIcon sx={{ minWidth: '40px' }}><HomeIcon /></ListItemIcon>
                    <ListItemText primary="Sub Item 2" />
                  </ListItem>
                </List>
              </Collapse>
              <Divider />
              <ListItem button onClick={() => navigateTo('/videos')}>
                <ListItemIcon sx={{ minWidth: '40px', marginLeft: '8px' }}><VideocamIcon /></ListItemIcon>
                <ListItemText primary="Videos" />
              </ListItem>
              <Divider />
              <ListItem button onClick={() => navigateTo('/Home')}>
                <ListItemIcon sx={{ minWidth: '40px', marginLeft: '8px' }}><SettingsIcon /></ListItemIcon>
                <ListItemText primary="Home" />
              </ListItem>
            </>
          )}
        </List>
      </Drawer>
    </>
  );
};

export default Navigation;
