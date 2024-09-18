import React, { forwardRef } from "react";
import { Typography, Paper, Grid } from "@mui/material";

import { useMediaQuery } from "react-responsive";
import { useThemeContext } from "../../../../Context/ThemeContextProvider";
import ContactUsForm from "./ContactUsForm";
import OurLocation from "./OurLocation";

type prop = {
  aboutRef?: React.RefObject<HTMLDivElement>;
};


const ContactUs = forwardRef<HTMLDivElement, prop>(
  ({ aboutRef }, ref) => {
    const isMobile = useMediaQuery({ maxWidth: "768px" });
    
    const { theme } = useThemeContext();
    const { primary, secondary, tertiary } = theme;
    const fontFamily = "Roboto, Arial, sans-serif";

    return (
      <div ref={ref} style={{ display: "flex", background: tertiary }}>
        <Paper
          sx={{
            p: !isMobile ? 4 : 0,
            maxWidth: "1200px",
            mx: "auto",
            boxShadow: "none",
            background: tertiary,
            color: secondary,
            mt: 8,
          }}
        >
          <Typography
            variant="h3"
            component="h3"
            gutterBottom
            align="center"
            sx={{
              fontFamily,
              fontWeight: 700,
              color: primary,
              marginBottom: 0,
            }}
          >
            Contact Us
          </Typography>
          <Grid
            container
            spacing={6}
            sx={{ m: !isMobile ? 2 : 0, width: "100%", paddingTop: 0 }}
          >
            <Grid
              item
              xs={12}
              md={6}
              sx={{
                background: tertiary,
                color: secondary,
                p: 4,
                borderRadius: 2,
                border: `1px solid ${primary}`,
                boxShadow: !isMobile ? "0px 4px 20px rgba(0, 0, 0, 0.1)" : "",
              }}
            >
              <ContactUsForm />
            </Grid>

            <Grid
              item
              xs={12}
              md={6}
              sx={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "space-between",
              }}
            >
              {!isMobile && <OurLocation />}
            </Grid>
          </Grid>
        </Paper>
      </div>
    );
  }
);

export default ContactUs