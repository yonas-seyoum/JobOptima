import { Box, Divider, IconButton, Typography } from "@mui/material";
import { useThemeContext } from "../../../../Context/ThemeContextProvider";
import { Facebook, LinkedIn, Twitter } from "@mui/icons-material";

export default function OurLocation() {
  const fontFamily = "Roboto, Arial, sans-serif";
  const { theme } = useThemeContext();

  const { secondary, tertiary } = theme;
  return (
    <>
      <Box sx={{ mb: 3 }}>
        <Typography
          variant="h6"
          gutterBottom
          sx={{ fontFamily, fontWeight: 600, color: secondary }}
        >
          Our Office
        </Typography>
        <Typography
          variant="body1"
          color="textSecondary"
          sx={{ fontFamily, color: secondary }}
        >
          1234 Elm Street, Suite 567
          <br />
          City, State, 12345
          <br />
          Country
        </Typography>
      </Box>
      <Box
        sx={{
          height: 400,
          borderRadius: 2,
          overflow: "hidden",
          background: tertiary,
          boxShadow: "0px 4px 20px rgba(0, 0, 0, 0.1)",
        }}
      >
        <iframe
          title="company-location"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3151.8354345093703!2d144.95592501586507!3d-37.8172095797519!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6ad642af0f11fd81%3A0xf577ac3ddda50e8!2sYour+Company+Location!5e0!3m2!1sen!2sus!4v1618766453209!5m2!1sen!2sus"
          width="100%"
          height="100%"
          style={{ border: 0 }}
          allowFullScreen
          loading="lazy"
        ></iframe>
      </Box>
      <Divider sx={{ m: 1 }} />

      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          gap: 3,
          mb: 0,
        }}
      >
        <IconButton
          href="https://www.facebook.com"
          target="_blank"
          sx={{ color: "#4267B2" }}
        >
          <Facebook />
        </IconButton>
        <IconButton
          href="https://www.twitter.com"
          target="_blank"
          sx={{ color: "#1DA1F2" }}
        >
          <Twitter />
        </IconButton>
        <IconButton
          href="https://www.linkedin.com"
          target="_blank"
          sx={{ color: "#0077B5" }}
        >
          <LinkedIn />
        </IconButton>
      </Box>
    </>
  );
}
