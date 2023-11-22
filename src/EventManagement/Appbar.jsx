import * as React from "react";
import { Link } from "react-router-dom";
import {
  AppBar,
  Box,
  Toolbar,
  Typography,
  Menu,
  Container,
  Button,
  MenuItem,
} from "@mui/material";

import HomeIcon from "@mui/icons-material/Home";
const pages = ["About", "Events", "Pricing", "Jobs+"];

export default function Appbar() {
  const [anchorElNav, setAnchorElNav] = React.useState(null);

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };
  return (
    <div className="lala">
    <AppBar
      position="static"
      style={{
        backgroundColor: "DarkSeaGreen",
      }}
    >
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <Typography
            variant="h6"
            noWrap
            sx={{
              mr: 2,
              display: { xs: "none", md: "flex" },
              fontWeight: 700,
              color: "green",
            }}
          >
            EventsHub!
          </Typography>

          <Link to="/home">
            <HomeIcon style={{ color: "black" }}> </HomeIcon>
          </Link>

          <Box sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}>
            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: "bottom",
                horizontal: "left",
              }}
              keepMounted
              transformOrigin={{
                vertical: "top",
                horizontal: "left",
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{
                display: { xs: "block", md: "none" },
              }}
            >
              {pages.map((page) => (
                <MenuItem key={page} onClick={handleCloseNavMenu}>
                  <Typography textAlign="center">{page}</Typography>
                </MenuItem>
              ))}
            </Menu>
          </Box>
          <Box sx={{ flexGrow: 1, display: { xs: "none", md: "flex" } }}>
            {pages.map((page) => (
              <Button
                key={page}
                onClick={handleCloseNavMenu}
                sx={{ my: 2, color: "black", display: "block" }}
              >
                {page}
              </Button>
            ))}
          </Box>
          <Box
            display="flex"
            justifyContent="flex-end"
            alignItems="center"
            sx={{ flexGrow: 1 }}
          >
            <Button
              variant="outlined"
              style={{ backgroundColor: "white", color: "green" }}
            >
              <nav>
                <CustomLink
                  to="/login"
                  style={{ textDecoration: "none", color: "green" }}
                >
                  LOGIN
                </CustomLink>
              </nav>
            </Button>
          </Box>
          <Box
            display="flex"
            justifyContent="flex-end"
            alignItems="center"
            sx={{ flexGrow: 0 }}
          >
            <Button variant="contained" color="success">
              <nav>
                <CustomLink
                  to="/signup"
                  style={{ textDecoration: "none", color: "white" }}
                >
                  SIGN UP
                </CustomLink>
              </nav>
            </Button>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
</div>
  );
}
function CustomLink({ to, children, ...props }) {
  return (
    <Link to={to} {...props}>
      {children}
    </Link>
  );
}

