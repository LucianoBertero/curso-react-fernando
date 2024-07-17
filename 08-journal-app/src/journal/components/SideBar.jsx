import { TurnedInNot } from "@mui/icons-material";
import {
  Box,
  Divider,
  Drawer,
  ListItem,
  ListItemButton,
  ListItemIcon,
  Toolbar,
  List,
  Typography,
  ListItemText,
  Grid,
} from "@mui/material";
import { useSelector } from "react-redux";

export const SideBar = ({ drawerWidth }) => {
  const { displayName } = useSelector((state) => state.auth);

  return (
    <Box
      component="nav"
      sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 } }}
    >
      <Drawer
        variant="permanent"
        open
        sx={{
          display: { xs: "block" },
          "& .MuiDrawer-paper": { boxSizing: "border-box", width: drawerWidth },
        }}
      >
        <Toolbar>
          <Typography variant="h6" noWrap component={"div"}>
            {displayName}
          </Typography>
        </Toolbar>
        <Divider></Divider>
        <List>
          {["enero", "febrerp", "marzo", "abril"].map((text) => (
            <ListItem key={text} disablePadding>
              <ListItemButton>
                <ListItemIcon>
                  <TurnedInNot></TurnedInNot>
                </ListItemIcon>
                <Grid container>
                  <ListItemText primary={text}></ListItemText>
                  <ListItemText secondary={"dasdasdasdsadadd"}></ListItemText>
                </Grid>
              </ListItemButton>
            </ListItem>
          ))}
        </List>
      </Drawer>
    </Box>
  );
};
