import { Group } from "@mui/icons-material";
import {
  Box,
  AppBar,
  Toolbar,
  Typography,
  Container,
  MenuList,
} from "@mui/material";
import { NavLink } from "react-router";
import MenuItemLink from "../shared/components/MenuItemLink";

export default function NavBar() {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar
        position="static"
        sx={{
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
            </MenuList>
            <Box>User Menu</Box>
          </Toolbar>
        </Container>
      </AppBar>
    </Box>
  );
}
