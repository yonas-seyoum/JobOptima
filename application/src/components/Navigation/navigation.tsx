import { useState } from "react";
import {
  DarkModeRounded,
  LightMode,
  Person2Outlined,
} from "@mui/icons-material";
import logo from "../../components/intro/loogo.png";
import { Link, useNavigate } from "react-router-dom";
import { useMediaQuery } from "react-responsive";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";
import IconButton from "@mui/material/IconButton";
import { AppBar, Box, Button, Toolbar, Typography } from "@mui/material";
import { routes } from "./util/constants";
import useAuth from "../../Hooks/useAuth";
import { useThemeContext } from "../../Context/ThemeContextProvider";
import MobileMenu from "./components/mobileMenu";
import { NavigationProps } from "../../util/types";

export default function Navigation({ scrollTo }: NavigationProps) {
  const { homeRoute, jobsRoute, profileRoute, authRoute } = routes;

  const { logout } = useAuth();
  const navigate = useNavigate();

  const isMobile = useMediaQuery({ query: "(min-width : 768px)" });

  const handle = () => {
    logout();
    navigate(profileRoute, { replace: true });
  };

  const [isOpen, setIsOpen] = useState(false);
  const handleHumbergerMenuClick = () => {
    setIsOpen(!isOpen);
  };

  const { theme } = useThemeContext();

  const { primary, secondary, tertiary } = theme;

  const [dd, setDd] = useState(false);

  const { changeTheme } = useThemeContext();

  return (
    <AppBar
      elevation={0}
      sx={{
        position: "fixed",
        top: 0,
        left: 0,
        background: tertiary,
        color: secondary,
        height: "100px",
        zIndex: "1000",
        width: "100%",
      }}
    >
      <Toolbar
        sx={{
          display: "flex",
          justifyContent: "space-between",
          height: "100%",
        }}
      >
        <Typography
          variant="h6"
          sx={{
            fontFamily: "Arial, sans-serif",
            fontWeight: 700,
            color: "black",
            paddingLeft: "10",
          }}
        >
          <img src={logo} width="60" />
        </Typography>

        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            gap: 3,
          }}
        >
          {isMobile && (
            <>
              <Link to={homeRoute}>
                <Button
                  sx={{ color: secondary, fontWeight: 600 }}
                  onClick={() => scrollTo("home")}
                >
                  Home
                </Button>
              </Link>
              <Link to={jobsRoute}>
                <Button sx={{ color: secondary, fontWeight: 600 }}>Jobs</Button>
              </Link>
              <Button
                sx={{ color: secondary, fontWeight: 600 }}
                onClick={() => scrollTo("about")}
              >
                About
              </Button>
              <Button
                sx={{ color: secondary, fontWeight: 600 }}
                onClick={() => scrollTo("contact")}
              >
                Contact
              </Button>
            </>
          )}

          {dd ? (
            <IconButton
              onClick={() => {
                changeTheme();
                setDd(!dd);
              }}
            >
              <DarkModeRounded sx={{ color: "lightcyan" }} />
            </IconButton>
          ) : (
            <IconButton
              onClick={() => {
                changeTheme();
                setDd(!dd);
              }}
            >
              <LightMode sx={{ color: primary }} />
            </IconButton>
          )}

          {isMobile ? (
            <Box sx={{ display: "flex", gap: 2 }}>
              {true ? (
                <>
                  <Link to={authRoute}>
                    <Button
                      variant="outlined"
                      sx={{
                        color: secondary,
                        borderColor: primary,
                        fontWeight: 600,
                        ":hover": {
                          borderColor: "#ccc",
                          background: "#444",
                        },
                      }}
                    >
                      Sign In
                    </Button>
                  </Link>
                  <Link to={authRoute}>
                    <Button
                      variant="contained"
                      sx={{
                        backgroundColor: primary,
                        color: secondary,
                        fontWeight: 600,
                        ":hover": {
                          backgroundColor: primary,
                        },
                      }}
                    >
                      Sign Up
                    </Button>
                  </Link>
                </>
              ) : (
                <>
                  <IconButton sx={{ border: `1px solid ${primary}` }}>
                    <Person2Outlined />
                  </IconButton>
                </>
              )}
            </Box>
          ) : (
            <IconButton
              size="large"
              sx={{ color: primary }}
              onClick={handleHumbergerMenuClick}
            >
              {isOpen ? <CloseIcon /> : <MenuIcon />}
            </IconButton>
          )}
        </Box>
      </Toolbar>
      {isOpen && <MobileMenu />}
    </AppBar>
  );
}
