import { useState } from "react";
import { Link, Outlet, useLocation, Navigate } from "react-router-dom";
import {
  Drawer,
  IconButton,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
  Toolbar,
  Typography,
  Box,
  AppBar
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import "./AdminDashboard.css";

const drawerWidth = 240;

const navLinks = [
  { to: "exams", label: "Exam List" },
  { to: "exams/add", label: "Add Exam" },
  { to: "duties", label: "Duty Management" },
  { to: "allocations", label: "Slot Allocation" },
  { to: "resources", label: "Resource Management" },
  { to: "slot-generation", label: "Slot Generation" },
];

const AdminDashboard = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const location = useLocation();

  // Redirect to exams by default
  if (location.pathname === "/admin" || location.pathname === "/admin/") {
    return <Navigate to="exams" replace />;
  }

  const drawer = (
    <Box
      sx={{
        width: drawerWidth,
        bgcolor: "#1e293b",
        height: "100%",
        display: "flex",
        flexDirection: "column",
      }}
      role="presentation"
      onClick={() => setSidebarOpen(false)}
      onKeyDown={() => setSidebarOpen(false)}
    >
      <Toolbar sx={{ mb: 2 }}>
        <Typography variant="h6" noWrap sx={{ fontWeight: 700, color: "#fff" }}>
          Admin Panel
        </Typography>
      </Toolbar>
      <List>
        {navLinks.map((item) => (
          <ListItem key={item.to} disablePadding>
            <ListItemButton
              component={Link}
              to={item.to}
              selected={location.pathname.endsWith(item.to)}
              sx={{
                color: "#fff",
                "&.Mui-selected, &.Mui-selected:hover": {
                  backgroundColor: "#334155",
                  color: "#f1c40f"
                },
                "&:hover": {
                  backgroundColor: "#273449",
                  color: "#f1c40f"
                }
              }}
            >
              <ListItemText primary={item.label} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Box>
  );

  return (
    <Box sx={{ display: "flex" }}>
      {/* AppBar with Hamburger */}
      <AppBar
        position="fixed"
        sx={{
          zIndex: (theme) => theme.zIndex.drawer + 1,
          bgcolor: "#2c3e50"
        }}
        elevation={1}
      >
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={() => setSidebarOpen(true)}
            sx={{ mr: 2 }}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" noWrap component="div">
            Dashboard
          </Typography>
        </Toolbar>
      </AppBar>

      {/* Drawer for Sidebar */}
      <Drawer
        anchor="left"
        open={sidebarOpen}
        onClose={() => setSidebarOpen(false)}
        ModalProps={{
          keepMounted: true,
        }}
        sx={{
          "& .MuiDrawer-paper": {
            width: drawerWidth,
            boxSizing: "border-box",
            background: "#1e293b",
            color: "#fff"
          }
        }}
      >
        {drawer}
      </Drawer>

      {/* Main content */}
      <Box
        component="main"
        sx={{
          flexGrow: 1,
          bgcolor: "#f5f7fa",
          minHeight: "100vh",
          p: { xs: 2, md: 4 },
          mt: 8
        }}
      >
        <Outlet />
      </Box>
    </Box>
  );
};

export default AdminDashboard;
