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
import { useEffect } from "react";
import { useRouter } from "next/router";
import Link from "next/link";

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
    path: "/dashboard/posts",
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
  const [openNavs, setOpenNavs] = React.useState<string[]>([]);

  const handleClick = (path: string) => {
    if (isSelectedPath(path)) {
      setOpenNavs(openNavs.filter((item) => item !== path));
    } else {
      setOpenNavs([...openNavs, path]);
    }
  };

  const isSelectedPath = (path: string) => {
    let hasMatchRoute = false;
    openNavs.map((route) => {
      if (route.includes(path)) {
        hasMatchRoute = true;
      }
    });
    return hasMatchRoute;
  };

  return (
    <div>
      <Toolbar />
      <Divider />
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
              <div key={index}>
                <ListItemButton key={index} onClick={(e) => handleClick(item.path)}>
                  <ListItemIcon>{item.icon}</ListItemIcon>
                  <ListItemText primary={item.label} />
                  {isSelectedPath(item.path) ? <ExpandLess /> : <ExpandMore />}
                </ListItemButton>

                <Collapse in={isSelectedPath(item.path)} timeout="auto" unmountOnExit>
                  <List component="div" disablePadding>
                    {item.subs.map((child, childIndex) => {
                      return (
                        <Link href={child.path} key={childIndex}>
                          <ListItemButton sx={{ pl: 4 }}>
                            <ListItemIcon>{child.icon}</ListItemIcon>
                            <ListItemText primary={child.label} />
                          </ListItemButton>
                        </Link>
                      );
                    })}
                  </List>
                </Collapse>
              </div>
            );
          } else {
            return (
              <Link href={item.path} key={index}>
                <ListItemButton>
                  <ListItemIcon>{item.icon}</ListItemIcon>
                  <ListItemText primary={item.label} />
                </ListItemButton>
              </Link>
            );
          }
        })}
      </List>
      <Divider />
      <List>
        {["Logout"].map((text, index) => (
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
