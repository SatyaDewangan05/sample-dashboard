"use client";

import { styled } from "@mui/material/styles";
import MuiDrawer from "@mui/material/Drawer";
import List from "@mui/material/List";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";

import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import InboxIcon from "@mui/icons-material/MoveToInbox";
import MailIcon from "@mui/icons-material/Mail";
import { useState } from "react";
import Image from "next/image";

import Logo from "@/images/logo.svg";
import LogoWithName from "@/images/logo_with_name.png";
import { IconMenu2 } from "@tabler/icons-react";

const drawerWidth = 220;

const openedMixin = (theme) => ({
  width: drawerWidth,
  transition: theme.transitions.create("width", {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.enteringScreen,
  }),
  overflowX: "hidden",
});

const closedMixin = (theme) => ({
  transition: theme.transitions.create("width", {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  overflowX: "hidden",
  width: "80px",
  [theme.breakpoints.up("sm")]: {
    width: "80px",
  },
});

const DrawerHeader = styled("div")(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  padding: "20px",
  // necessary for content to be below app bar
  ...theme.mixins.toolbar,
}));

const Drawer = styled(MuiDrawer, {
  shouldForwardProp: (prop) => prop !== "open",
})(({ theme }) => ({
  width: drawerWidth,
  flexShrink: 0,
  whiteSpace: "nowrap",
  boxSizing: "border-box",
  variants: [
    {
      props: ({ open }) => open,
      style: {
        ...openedMixin(theme),
        "& .MuiDrawer-paper": openedMixin(theme),
      },
    },
    {
      props: ({ open }) => !open,
      style: {
        ...closedMixin(theme),
        "& .MuiDrawer-paper": closedMixin(theme),
      },
    },
  ],
}));

export default function MiniDrawer({ open, setOpen }) {
  const [active, setActive] = useState("Dashboard");

  return (
    <Drawer variant="permanent" open={open}>
      <DrawerHeader>
        <IconButton onClick={() => setOpen((prevState) => !prevState)}>
          {open ? (
            <Image src={LogoWithName} alt="Images" />
          ) : (
            <Image className="mx-auto" src={Logo} alt="Images" />
          )}
        </IconButton>
      </DrawerHeader>
      <p
        className={`h-5 uppercase text-xs  text-gray-500 ${
          open ? "pl-5" : "text-center"
        }`}
      >
        Main Menu
      </p>
      <List>
        {["Dashboard", "Recruitment", "Schedule", "Employee", "Department"].map(
          (text, index) => (
            <ListItem key={text} disablePadding sx={{ display: "block" }}>
              <ListItemButton
                sx={[
                  {
                    minHeight: 48,
                    px: 2,
                    color: active === text ? "#FF5151" : "unset",
                  },
                  open
                    ? {
                        justifyContent: "initial",
                      }
                    : {
                        justifyContent: "center",
                      },
                ]}
                onClick={() => setActive(text)}
              >
                <ListItemIcon
                  sx={[
                    {
                      //   minWidth: 0,
                      justifyContent: "center",
                      color: active === text ? "#FF5151" : "gray",
                    },
                    open
                      ? {
                          mr: 2,
                        }
                      : {
                          mx: "auto",
                        },
                  ]}
                >
                  {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
                </ListItemIcon>
                <ListItemText
                  primary={text}
                  sx={[
                    open
                      ? {
                          opacity: 1,
                        }
                      : {
                          opacity: 0,
                        },
                  ]}
                />
              </ListItemButton>
            </ListItem>
          )
        )}
      </List>
      <p
        className={`h-5 uppercase text-xs text-gray-500 ${
          open ? " pl-5" : "text-center"
        }`}
      >
        Other
      </p>
      <List>
        {["Support", "Settings"].map((text, index) => (
          <ListItem key={text} disablePadding sx={{ display: "block" }}>
            <ListItemButton
              sx={[
                {
                  minHeight: 48,
                  px: 2,
                },
                open
                  ? {
                      justifyContent: "initial",
                    }
                  : {
                      justifyContent: "center",
                    },
              ]}
              onClick={() => setActive(text)}
            >
              <ListItemIcon
                sx={[
                  {
                    justifyContent: "center",
                    color: active === text ? "#FF5151" : "gray",
                  },
                  open
                    ? {
                        mr: 2,
                      }
                    : {
                        mx: "auto",
                      },
                ]}
              >
                {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
              </ListItemIcon>
              <ListItemText
                primary={text}
                sx={[
                  open
                    ? {
                        opacity: 1,
                      }
                    : {
                        opacity: 0,
                      },
                ]}
              />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Drawer>
  );
}
