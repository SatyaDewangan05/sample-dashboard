"use client";

import { styled } from "@mui/material/styles";
import Drawer from "@mui/material/Drawer";
import List from "@mui/material/List";

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

const DrawerHeader = styled("div")(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  padding: "20px",
  // necessary for content to be below app bar
  ...theme.mixins.toolbar,
}));

export default function MobileDrawer({ open, setOpen }) {
  const [active, setActive] = useState("Dashboard");

  return (
    <Drawer open={open} onClose={() => setOpen(false)}>
      <DrawerHeader>
        {open ? (
          <Image src={LogoWithName} alt="Images" />
        ) : (
          <Image className="mx-auto" src={Logo} alt="Images" />
        )}
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
