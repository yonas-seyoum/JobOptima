
import { useJobDetailContext } from "../../../Context/jobDetailContext.provider";
import "../utils/styles.css";
import {
  Box,
  Typography,
  Button,
  Grid,
  Divider,
  List,
  ListItem,
  Avatar,
  ListItemIcon,
  ListItemText,
} from "@mui/material";

import { FilterContainer } from "../styled-components/styledComponents";
import LocationOnOutlinedIcon from "@mui/icons-material/LocationOnOutlined";
import WorkOutlinedIcon from "@mui/icons-material/WorkOutlined";
import EventOutlinedIcon from "@mui/icons-material/EventOutlined";
import FiberManualRecordIcon from "@mui/icons-material/FiberManualRecord";
import logo from "../../new logo.png";

export default function DetailSection() {
  const { currentJob } = useJobDetailContext();

  const {position, company, location, jobType, workType, } = currentJob
  
  const postDate = "5 days ago";
  const skills = ["Communication", "Attention to Detail", "Problem Solving"];
  const jobDescriptionItems = [
    "Organize and schedule meetings",
    "Manage multiple projects",
    "Oversee the Managing Director’s calendar",
    "Handle sensitive information",
  ];
  const experienceAndQualificationItems = [
    "BA Degree in Business related field",
    "2 years of experience",
    "Proficiency in MS Office",
  ];

  return (
    <FilterContainer style={{ width: "35%" }}>
      <Box sx={{ padding: 3, maxWidth: "800px", margin: "auto" }}>
        
        <Box sx={{ display: "flex", alignItems: "center", mb: 3 }}>
          <Avatar
            src={logo}
            alt="Company Logo"
            sx={{ width: 80, height: 80, marginRight: "16px" }}
          />
          <Typography
            variant="h6"
            color="textPrimary"
            sx={{ textAlign: "left" }}
          >
            {company}
          </Typography>
        </Box>

        <Typography
          variant="h4"
          fontWeight="bold"
          sx={{ textAlign: "left", mb: 2 }}
        >
          {position}
        </Typography>

        {/* Location and Posted Date on One Line */}
        <Box sx={{ mb: 2 }}>
          <Grid container spacing={3}>
            <Grid item xs={6}>
              <Box sx={{ display: "flex", alignItems: "center" }}>
                <LocationOnOutlinedIcon
                  sx={{ mr: 1, color: "textSecondary" }}
                />
                <Typography
                  variant="body1"
                  color="textSecondary"
                  sx={{ textAlign: "left" }}
                >
                  {location}
                </Typography>
              </Box>
            </Grid>
            <Grid item xs={6}>
              <Box sx={{ display: "flex", alignItems: "center" }}>
                <EventOutlinedIcon sx={{ mr: 1, color: "textSecondary" }} />
                <Typography
                  variant="body1"
                  sx={{ textAlign: "left", color: "textSecondary" }}
                >
                  {postDate}
                </Typography>
              </Box>
            </Grid>
          </Grid>
        </Box>

        {/* Workplace Type and Job Type */}
        <Box sx={{ mb: 3 }}>
          <Grid container spacing={3}>
            <Grid item xs={6}>
              <Box sx={{ display: "flex", alignItems: "center" }}>
                <WorkOutlinedIcon sx={{ mr: 1, color: "textSecondary" }} />
                <Typography
                  variant="subtitle1"
                  color="textPrimary"
                  sx={{ ml: 1, textAlign: "left" }}
                >
                  {workType}
                </Typography>
                <Typography
                  variant="body1"
                  color="text.primary"
                  sx={{ ml: 1, textAlign: "left" }}
                >
                  {jobType}
                </Typography>
              </Box>
            </Grid>
          </Grid>
        </Box>

        {/* Skills */}
        <Box sx={{ mb: 3, textAlign: "left" }}>
          <Typography variant="body1" color="textPrimary">
            Skills Required:
          </Typography>
          <Typography
            variant="body1"
            color="textSecondary"
            sx={{ textAlign: "left" }}
          >
            {skills.join(", ")}
          </Typography>
        </Box>

        {/* Apply Button */}
        <Box sx={{ mb: 4, display: "flex" }}>
          <Button
            variant="contained"
            color="primary"
            sx={{ padding: "10px 20px", fontSize: "16px" }}
          >
            Apply Now
          </Button>
        </Box>

        <Divider sx={{ marginBottom: "32px" }} />

        {/* About Job Section */}
        <Box sx={{ mb: 3, textAlign: "left" }}>
          <Typography variant="h6" fontWeight="bold">
            About Company
          </Typography>
          <Typography variant="body2" sx={{ mt: 1, textAlign: "justify" }}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro harum
            quaerat exercitationem impedit dolorum? Pariatur magnam quo
            consectetur? Exercitationem libero nam, ea itaque animi velit
            molestias esse fuga. Maxime, repellat.
          </Typography>
        </Box>

        <Box sx={{ mb: 3, textAlign: "left" }}>
          <Typography variant="h6" fontWeight="bold">
            Job Purpose
          </Typography>
          <Typography variant="body2" sx={{ mt: 1, textAlign: "justify" }}>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quidem
            accusamus in similique ullam delectus maiores esse, dicta velit
            possimus culpa rerum iure quod voluptatibus tenetur aut veniam,
            consequuntur pariatur fugiat!
          </Typography>
        </Box>

        {/* Job Description */}
        <Box sx={{ mb: 3, textAlign: "left" }}>
          <Typography variant="h6" fontWeight="bold">
            Job Description
          </Typography>
          <List sx={{ mt: 0, textAlign: "left" }}>
            {jobDescriptionItems.map((item, index) => (
              <ListItem key={index} sx={{ paddingLeft: 0 }}>
                <ListItemIcon sx={{ minWidth: 0, mr: 1 }}>
                  <FiberManualRecordIcon
                    sx={{ fontSize: "15px", color: "text.primary" }}
                  />
                </ListItemIcon>
                <ListItemText
                  primary={<Typography variant="body2">{item}</Typography>}
                  sx={{ margin: 0 }}
                />
              </ListItem>
            ))}
          </List>
        </Box>

        {/* Experience & Qualification */}
        <Box sx={{ mb: 3, textAlign: "left" }}>
          <Typography variant="h6" fontWeight="bold">
            Experience & Qualification
          </Typography>
          <List sx={{ mt: 1, textAlign: "left" }}>
            {experienceAndQualificationItems.map((item, index) => (
              <ListItem key={index} sx={{ paddingLeft: 0 }}>
                <ListItemIcon sx={{ minWidth: 0, mr: 1 }}>
                  <FiberManualRecordIcon
                    sx={{ fontSize: "15px", color: "text.primary" }}
                  />
                </ListItemIcon>
                <ListItemText
                  primary={<Typography variant="body2">{item}</Typography>}
                  sx={{ margin: 0 }}
                />
              </ListItem>
            ))}
          </List>
        </Box>
      </Box>
    </FilterContainer>
  );
}
