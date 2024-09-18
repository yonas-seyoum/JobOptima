import { useState } from "react";
import { useThemeContext } from "../../../../Context/ThemeContextProvider";
import {
  Alert,
  Box,
  Button,
  CircularProgress,
  Typography,
} from "@mui/material";
import InputField from "../../../../components/InputField";

export default function ContactUsForm() {
  const [isLoading, setIsLoading] = useState(false);
  const [formSubmitted, setFormSubmitted] = useState<boolean | null>(null);

  const { theme } = useThemeContext();
  const { primary, secondary, tertiary } = theme;
  const fontFamily = "Roboto, Arial, sans-serif";

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setIsLoading(true);

    setTimeout(() => {
      setIsLoading(false);
      setFormSubmitted(true);
    }, 2000);
  };
  return (
    <>
      <Typography
        variant="h6"
        gutterBottom
        sx={{
          fontFamily,
          fontWeight: 600,
          background: tertiary,
          color: secondary,
        }}
      >
        Send us a message
      </Typography>
      <Typography
        variant="body1"
        paragraph
        sx={{ background: tertiary, color: secondary }}
      >
        Our team will get back to you promptly.
      </Typography>

      {formSubmitted === true && (
        <Alert severity="success" sx={{ mb: 2 }}>
          Thank you for your message. We will get back to you shortly.
        </Alert>
      )}
      {formSubmitted === false && (
        <Alert severity="error" sx={{ mb: 2 }}>
          Something went wrong. Please try again later.
        </Alert>
      )}

      <Box
        component="form"
        noValidate
        autoComplete="off"
        onSubmit={handleSubmit}
      >
        <InputField label={"Full Name"} color={{ primary, secondary }} />

        <InputField label={"Email Address"} color={{ primary, secondary }} />

        <InputField label={"Subject"} color={{ primary, secondary }} />

        <InputField
          label="Message"
          multiline={true}
          color={{ primary, secondary }}
        />

        <Button
          variant="contained"
          color="primary"
          size="large"
          disabled={isLoading}
          startIcon={isLoading ? <CircularProgress size={24} /> : null}
          type="submit"
          sx={{
            background: "#f8e71c",
            color: "black",
            fontWeight: 600,
            ":hover": {
              background: "#f8e71c",
            },
          }}
        >
          {isLoading ? "Sending" : "Send Message"}
        </Button>
      </Box>
    </>
  );
}
