import { forwardRef } from "react";
import { useMediaQuery } from "react-responsive";
import { useAuthContext } from "../../Context/AuthContextProvider";
import { useNavigate } from "react-router-dom";
import { routes } from "../Navigation/util/constants";
import { Box, Button, TextField, Typography } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import loo from "../../components/intro/ss-unsplash-removebg-pre.png";
import { useThemeContext } from "../../Context/ThemeContextProvider";
import { HeroProp } from "../../util/types";



export default forwardRef<HTMLDivElement, HeroProp>(function Hero(prop, ref) {
  const isMobile = useMediaQuery({ maxWidth: "768px" });
  const { currentUser } = useAuthContext();
  const navigate = useNavigate();

  const handleFindJobs = () => {
    currentUser ? navigate(routes.jobsRoute) : navigate(routes.authRoute);
  };

  const { theme } = useThemeContext();

  const { primary, secondary, tertiary } = theme;

  return (
    <Box
      ref={ref}
      sx={{
        color: secondary,
        display: "flex",
        flexDirection: { xs: "column", md: "row" },
        alignItems: "center",
        justifyContent: "center",
        overflow: "hidden",
        position: "relative",
        px: 2,
        height: "100vh",
        backgroundColor: tertiary,
        padding: !isMobile ? " 0 15rem 0 15rem" : "",
      }}
    >
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: { xs: "center", md: "flex-start" },
          justifyContent: "center",
          textAlign: { xs: "center", md: "left" },
          maxWidth: { xs: "100%", md: "50%" },
          px: { xs: 2, md: 4 },
          zIndex: 2,
        }}
      >
        <Typography
          variant="h6"
          sx={{
            mb: 1,
            fontSize: { xs: "1rem", md: "1.3rem" },
            fontWeight: 600,
            color: "#D69E31",
          }}
        >
          Empowering Your Career Journey
        </Typography>

        <Typography
          variant="h2"
          sx={{
            fontWeight: 900,
            mb: 2,
            fontSize: { xs: "2.5rem", md: "4rem" },
            letterSpacing: "1px",
            textTransform: "uppercase",
            color: "#D69E31",
          }}
        >
          Find Your Dream Job
        </Typography>

        <Box
          sx={{
            width: "85%",
            display: "flex",
            flexDirection: { xs: "column", md: "row" },
            alignItems: "center",
            justifyContent: "center",
            maxWidth: "100%",
            mx: "auto",
            mb: 4,
            borderRadius: "12px",
            p: 2,
            backgroundColor: "rgba(255, 255, 255, 0.1)",
            boxShadow: "0 4px 20px rgba(0, 0, 0, 0.3)",
          }}
        >
          <TextField
            fullWidth
            variant="outlined"
            placeholder="Job title or keywords"
            sx={{
              backgroundColor: tertiary,
              borderRadius: "8px",
              input: { color: secondary },
              mb: { xs: 2, md: 0 },
              mr: { md: 2 },
              "& .MuiOutlinedInput-root": {
                "& fieldset": {
                  borderColor: "#D69E31",
                },
                "&:hover fieldset": {
                  borderColor: "#D69E31",
                },
              },
            }}
          />
          <TextField
            variant="outlined"
            placeholder="Location"
            sx={{
              backgroundColor: tertiary,
              borderRadius: "8px",
              input: { color: secondary },
              mb: { xs: 2, md: 0 },
              mr: { md: 2 },
              "& .MuiOutlinedInput-root": {
                "& fieldset": {
                  borderColor: primary,
                },
                "&:hover fieldset": {
                  borderColor: primary,
                },
              },
            }}
          />
          <Button
            variant="contained"
            sx={{
              backgroundColor: "#D69E31",
              color: "black",
              p: "12px 32px",
              borderRadius: "8px",
              display: "flex",
              alignItems: "center",
              fontSize: "1rem",
              width: { xs: "100%", md: "auto" },
              ":hover": {
                backgroundColor: "#f8e71d",
              },
            }}
          >
            <SearchIcon />
            <Typography sx={{ ml: 1 }}>Search</Typography>
          </Button>
        </Box>

        <Typography
          variant="body1"
          sx={{
            fontSize: { xs: "0.9rem", md: "1.1rem" },
            color: secondary,

            maxWidth: "100%",
          }}
        >
          Discover the best job opportunities that match your skills and
          passions. Our platform connects you with top employers and helps you
          take the next step in your career.
        </Typography>

        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            mt: 2,
          }}
        >
          <Button
            variant="outlined"
            sx={{
              color: primary,
              borderColor: primary,
              "&:hover": {
                borderColor: primary,
                color: secondary,
              },
            }}
          >
            Learn More
          </Button>
        </Box>
      </Box>

      <Box
        sx={{
          flex: 1,
          display: { xs: "none", md: "block" },
          position: "relative",
          overflow: "hidden",
        }}
      >
        <Box
          sx={{
            width: "100%",

            overflow: "hidden",
            outline: "1px solid white",

            "& img": {
              width: "100%",
              height: "100%",
              objectFit: "cover",
              transform: "scale(0.75)",
              transition: "transform 0.5s ease",
            },
          }}
        >
          <img src={loo} alt="job-related" />
        </Box>
      </Box>
    </Box>
  );
});
