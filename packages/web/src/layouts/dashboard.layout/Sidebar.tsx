import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import CssBaseline from "@mui/material/CssBaseline";
import Divider from "@mui/material/Divider";
import Drawer from "@mui/material/Drawer";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import {
  Menu as MenuIcon,
  Mail as MailIcon,
  Inbox as InboxIcon,
  StarBorder,
  ExpandLess,
  ExpandMore,
  Send as SendIcon,
  Drafts as DraftsIcon,
  Person,
  Article,
  Add,
  List as ListIcon,
  Home,
} from "@mui/icons-material";

import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
// import routes from "src/constants/routes.constant";
import { Collapse, ListSubheader } from "@mui/material";

const drawerWidth = 240;

interface Props {}

const routes = [
  {
    label: "Home",
    path: "/dashboard",
    icon: <Home />,
  },
  {
    label: "Posts",
    icon: <Article />,
    subs: [
      { label: "Add Post", path: "/dashboard/posts/new", icon: <Add /> },
      { label: "All Post", path: "/dashboard/posts/all", icon: <ListIcon /> },
    ],
  },
  {
    label: "Profile",
    path: "/dashboard/profile",
    icon: <Person />,
  },
];

export default function Sidebar(props: Props) {
  const [open, setOpen] = React.useState(false);

  const handleClick = () => {
    setOpen(!open);
  };
  return (
    <div>
      <Toolbar />
      <Divider />
      <List>
        <List
          sx={{ width: "100%", maxWidth: 360, bgcolor: "background.paper" }}
          component="nav"
          aria-labelledby="nested-list-subheader"
          // subheader={
          //   <ListSubheader component="div" id="nested-list-subheader">
          //     Nested List Items
          //   </ListSubheader>
          // }
        >
          {routes.map((item, index) => {
            if (item.subs) {
              return (
                <>
                  <ListItemButton key={index} onClick={handleClick}>
                    <ListItemIcon>{item.icon}</ListItemIcon>
                    <ListItemText primary={item.label} />
                    {open ? <ExpandLess /> : <ExpandMore />}
                  </ListItemButton>

                  <Collapse in={open} timeout="auto" unmountOnExit>
                    <List component="div" disablePadding>
                      {item.subs.map((child, childIndex) => {
                        return (
                          <ListItemButton sx={{ pl: 4 }} key={childIndex} component="a" href={child.path}>
                            <ListItemIcon>
                              {child.icon}
                              {/* <StarBorder /> */}
                            </ListItemIcon>
                            <ListItemText primary={child.label} />
                          </ListItemButton>
                        );
                      })}
                    </List>
                  </Collapse>
                </>
              );
            } else {
              return (
                <ListItemButton key={index} component="a" href={item.path}>
                  <ListItemIcon>{item.icon}</ListItemIcon>
                  <ListItemText primary={item.label} />
                </ListItemButton>
              );
            }
          })}
        </List>
      </List>
      <Divider />
      <List>
        {["All mail", "Trash", "Spam"].map((text, index) => (
          <ListItem key={text} disablePadding>
            <ListItemButton>
              <ListItemIcon>{index % 2 === 0 ? <InboxIcon /> : <MailIcon />}</ListItemIcon>
              <ListItemText primary={text} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </div>
  );
}
