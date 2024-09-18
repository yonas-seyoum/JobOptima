import React from "react";
import {
  Avatar,
  Box,
  Button,
  Chip,
  Container,
  Typography,
  Grid,
  Divider,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
} from "@mui/material";
import WorkIcon from "@mui/icons-material/Work";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import EditIcon from "@mui/icons-material/Edit";
import EmailIcon from "@mui/icons-material/Email";
import PhoneIcon from "@mui/icons-material/Phone";
import StarIcon from "@mui/icons-material/Star";

export default function Profile() {
  return (
    <Container maxWidth="lg" sx={{ pt: 5, marginTop: "10vh" }}>
      {/* <Header /> */}
      <Box display="flex" alignItems="flex-start" sx={{ mt: 4 }}>
        {/* Left Column */}
        <Box flex={3} pr={4} sx={{ overflowY: "auto" }}>
          <Box
            mb={4}
            p={3}
            sx={{
              border: "1px solid #e0e0e0",
              borderRadius: "8px",
              background: "white",
            }}
          >
            <Box display="flex" alignItems="center" mb={2}>
              <Avatar
                alt="Profile Picture"
                src="https://via.placeholder.com/150"
                sx={{ width: 120, height: 120, mr: 3 }}
              />
              <Box>
                <Typography variant="h4" component="h1">
                  John Doe
                </Typography>
                <Typography variant="body1" color="textSecondary" gutterBottom>
                  Full Stack Developer
                </Typography>
                <Chip
                  icon={<LocationOnIcon />}
                  label="New York, USA"
                  variant="outlined"
                  sx={{ mt: 1 }}
                />
              </Box>
            </Box>
            <Button variant="outlined" startIcon={<EditIcon />} fullWidth>
              Edit Profile
            </Button>
          </Box>

          <Box
            mb={4}
            p={3}
            sx={{
              border: "1px solid #e0e0e0",
              borderRadius: "8px",
              background: "white",
            }}
          >
            <Typography variant="h6" gutterBottom>
              Overview
            </Typography>
            <Divider sx={{ mb: 2 }} />
            <Typography variant="body1">
              Experienced Full Stack Developer with over 10 years in the
              industry. Skilled in JavaScript, React, Node.js, and cloud
              technologies.
            </Typography>
          </Box>

          <Box
            mb={4}
            p={3}
            sx={{
              border: "1px solid #e0e0e0",
              borderRadius: "8px",
              background: "white",
            }}
          >
            <Typography variant="h6" gutterBottom>
              Work History
            </Typography>
            <Divider sx={{ mb: 2 }} />
            <List>
              <ListItem disableGutters>
                <ListItemIcon>
                  <WorkIcon />
                </ListItemIcon>
                <ListItemText
                  primary="Senior Software Engineer at XYZ Corp"
                  secondary="Jan 2020 - Present"
                />
              </ListItem>
              <ListItem disableGutters>
                <ListItemIcon>
                  <WorkIcon />
                </ListItemIcon>
                <ListItemText
                  primary="Software Developer at ABC Inc."
                  secondary="Jun 2017 - Dec 2019"
                />
              </ListItem>
            </List>
          </Box>

          <Box
            mb={4}
            p={3}
            sx={{
              border: "1px solid #e0e0e0",
              borderRadius: "8px",
              background: "white",
            }}
          >
            <Typography variant="h6" gutterBottom>
              Skills
            </Typography>
            <Divider sx={{ mb: 2 }} />
            <Box sx={{ display: "flex", flexWrap: "wrap", gap: 1 }}>
              <Chip label="JavaScript" color="primary" variant="outlined" />
              <Chip label="React" color="primary" variant="outlined" />
              <Chip label="Node.js" color="primary" variant="outlined" />
              <Chip label="Python" color="primary" variant="outlined" />
              <Chip label="AWS" color="primary" variant="outlined" />
            </Box>
          </Box>

          <Box
            mb={4}
            p={3}
            sx={{
              border: "1px solid #e0e0e0",
              borderRadius: "8px",
              background: "white",
            }}
          >
            <Typography variant="h6" gutterBottom>
              Testimonials
            </Typography>
            <Divider sx={{ mb: 2 }} />
            <List>
              <ListItem disableGutters>
                <StarIcon color="primary" sx={{ mr: 1 }} />
                <Typography variant="body2">
                  "John delivered excellent work on our web development project
                  and I enjoyed working with him."
                </Typography>
              </ListItem>
              <ListItem disableGutters>
                <StarIcon color="primary" sx={{ mr: 1 }} />
                <Typography variant="body2">
                  "Highly recommended! Great communication and technical
                  skills."
                </Typography>
              </ListItem>
            </List>
          </Box>
        </Box>

        {/* Right Column */}
        <Box flex={1} sx={{ position: "sticky", top: "8.5em" }}>
          <Box
            mb={4}
            p={3}
            sx={{
              border: "1px solid #e0e0e0",
              borderRadius: "8px",
              background: "white",
            }}
          >
            <Typography variant="h6" gutterBottom>
              Contact Information
            </Typography>
            <Divider sx={{ mb: 2 }} />
            <List>
              <ListItem disableGutters>
                <ListItemIcon>
                  <EmailIcon />
                </ListItemIcon>
                <ListItemText primary="johndoe@example.com" />
              </ListItem>
              <ListItem disableGutters>
                <ListItemIcon>
                  <PhoneIcon />
                </ListItemIcon>
                <ListItemText primary="+1 123 456 7890" />
              </ListItem>
            </List>
          </Box>

          <Box
            mb={4}
            p={3}
            sx={{
              border: "1px solid #e0e0e0",
              borderRadius: "8px",
              background: "white",
            }}
          >
            <Typography variant="h6" gutterBottom>
              Availability
            </Typography>
            <Divider sx={{ mb: 2 }} />
            <Typography variant="body2">
              Available for 30 hours per week.
            </Typography>
          </Box>

          <Box
            p={3}
            sx={{
              border: "1px solid #e0e0e0",
              borderRadius: "8px",
              background: "white",
            }}
          >
            <Typography variant="h6" gutterBottom>
              Languages
            </Typography>
            <Divider sx={{ mb: 2 }} />
            <Typography variant="body2">English (Fluent)</Typography>
            <Typography variant="body2">Spanish (Conversational)</Typography>
          </Box>
        </Box>
      </Box>
    </Container>
  );
}
