import React, { forwardRef } from "react";
import {
  Container,
  Typography,
  Grid,
  Paper,
  Box,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
} from "@mui/material";
import appImage from "../../util/app-image.png";

import { IconButton } from "@mui/material";
import { Star } from "@mui/icons-material";
import { useThemeContext } from "../../../../Context/ThemeContextProvider";
import { descriptions, steps } from "../../constants";

type prop = {
  contactRef?: React.RefObject<HTMLDivElement>;
};

const Information = forwardRef<HTMLDivElement, prop>(({ contactRef }, ref) => {
  const { theme } = useThemeContext();

  const { primary, secondary, tertiary } = theme;

  return (
    <div ref={ref}>
      <Paper
        sx={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          borderRadius: 0,
          background: tertiary,
          color: primary,
          pt: 8,
        }}
      >
        <Typography
          variant="h3"
          sx={{
            fontFamily: "Roboto, sans-serif",
            fontWeight: 700,
            mt: 4,
            mb: 4,
          }}
        >
          How It Works
        </Typography>

        <Box
          sx={{
            display: "flex",
            flexDirection: { xs: "column", md: "row" },
            justifyContent: "center",
            alignItems: "center",
            width: "100vw",
          }}
        >
          <Box
            sx={{
              height: "100%",
              width: "50%",
              borderRadius: "1em",
            }}
          >
            <img
              src={appImage}
              alt="How it works"
              style={{
                width: "100%",
                height: "100%",

                borderRadius: "inherit",
              }}
            />
          </Box>

          {/* Text Section */}
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: { xs: "center" },
              textAlign: { xs: "center", md: "left" },
              padding: "2em",
            }}
          >
            <Typography
              variant="h4"
              sx={{
                fontFamily: "Roboto, sans-serif",
                fontWeight: 700,
                mb: 2,
              }}
            >
              Why Choose Us
            </Typography>
            <List>
              {descriptions.map((desc, index) => (
                <ListItem key={index}>
                  <ListItemIcon>
                    <Star sx={{ color: primary }} />
                  </ListItemIcon>
                  <ListItemText
                    primary={desc}
                    sx={{
                      fontFamily: "Roboto, sans-serif",
                      color: secondary,
                    }}
                  />
                </ListItem>
              ))}
            </List>
          </Box>
        </Box>

        {/* Steps Section */}
        <Box
          sx={{
            paddingY: 5,
          }}
        >
          <Container maxWidth="lg">
            <Grid container spacing={4} justifyContent="center" sx={{}}>
              {steps.map((step, index) => (
                <Grid item xs={12} sm={6} md={3} key={index}>
                  <Box
                    sx={{
                      p: 3,
                      borderRadius: 2,
                      background: primary,
                      color: "white",
                      display: "flex",
                      flexDirection: "column",
                      alignItems: "center",
                      textAlign: "center",
                    }}
                  >
                    <IconButton
                      sx={{
                        color: secondary,
                        fontSize: "48px",
                        mb: 2,
                      }}
                    >
                      {step.icon}
                    </IconButton>
                    <Typography
                      variant="h6"
                      sx={{
                        fontFamily: "Roboto, sans-serif",
                        fontWeight: 600,
                        mb: 1,
                      }}
                    >
                      {step.title}
                    </Typography>
                    <Typography
                      variant="body2"
                      sx={{
                        fontFamily: "Roboto, sans-serif",
                        color: secondary,
                      }}
                    >
                      {step.description}
                    </Typography>
                  </Box>
                </Grid>
              ))}
            </Grid>
          </Container>
        </Box>
      </Paper>
    </div>
  );
});

export default Information;
