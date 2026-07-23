import { Group } from "@mui/icons-material";
import {
  Box,
  AppBar,
  Toolbar,
  Typography,
  Container,
  MenuList,
  LinearProgress,
} from "@mui/material";
import { NavLink } from "react-router";
import MenuItemLink from "../shared/components/MenuItemLink";
import { useStore } from "../../lib/hooks/useStore";
import { Observer } from "mobx-react-lite";

export default function NavBar() {
  const { uiStore } = useStore();

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar
        position="static"
        sx={{
          position: "relative",
          backgroundImage:
            "linear-gradient(135deg, #182a73 0%, #218aae 80%, #20a7ac 100%)",
        }}>
        <Container maxWidth="xl">
          <Toolbar sx={{ display: "flex", justifyContent: "space-between" }}>
            <Box sx={{ display: "flex", alignItems: "center", gap: 2 }}>
              <Group fontSize="large" />
              <Typography
                component={NavLink}
                to={"/"}
                variant="h4"
                sx={{
                  fontWeight: "bold",
                  color: "inherit",
                  textDecoration: "none",
                }}>
                Reactivities
              </Typography>
            </Box>
            <MenuList sx={{ display: "flex", gap: 4, alignItems: "center" }}>
              <MenuItemLink to={"/activities"}>Activities</MenuItemLink>
              <MenuItemLink to={"/createActivity"}>
                Create Activity
              </MenuItemLink>
              <MenuItemLink to={"/counter"}>Counter</MenuItemLink>
            </MenuList>
            <Box>User Menu</Box>
          </Toolbar>
        </Container>
        <Observer>
          {() =>
            uiStore.isLoading ? (
              <LinearProgress
                color="secondary"
                sx={{
                  position: "absolute",
                  bottom: 0,
                  left: 0,
                  right: 0,
                  height: 4,
                }}
              />
            ) : null
          }
        </Observer>
      </AppBar>
    </Box>
  );
}
