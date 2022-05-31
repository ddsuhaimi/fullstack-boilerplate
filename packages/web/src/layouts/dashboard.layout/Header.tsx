import { Badge, IconButton, Typography } from "@mui/material";
import React from "react";
import { Menu as MenuIcon, Notifications as NotificationsIcon, Person, ExpandMore } from "@mui/icons-material";

type Props = {
  handleDrawerToggle: () => void;
};

const Header = ({ handleDrawerToggle }: Props) => {
  return (
    <>
      <IconButton color="inherit" aria-label="open drawer" edge="start" onClick={handleDrawerToggle} sx={{ mr: 2, display: { sm: "none" } }}>
        <MenuIcon />
      </IconButton>
      <Typography variant="h6" noWrap component="div" sx={{ flexGrow: 1 }}></Typography>
      <IconButton color="inherit">
        <Person />
        <ExpandMore />
      </IconButton>
    </>
  );
};

export default Header;
