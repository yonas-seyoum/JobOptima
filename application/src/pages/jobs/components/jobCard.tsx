import React from "react";
import { useJobDetailContext } from "../../../Context/jobDetailContext.provider";
import { JobCardProps } from "../utils/types";
import {
  CardContent,
  Typography,
  Box,
  CardMedia,
  Divider,
  Paper,
} from "@mui/material";
import logo from "../../new logo.png";

export default function JobCard({ data }: JobCardProps) {
  const {
    position,
    location,
    company,
    id,
    description,
    jobType,
    deadline,
  } = data;

  const { selectJob } = useJobDetailContext();

  const handleSelectJob = () => {
    selectJob(id);
  };
  return (
    <Paper
      elevation={0}
      sx={{
        borderRadius: 4,
        border: "1px solid #e0e0e0",
        mb: 2,
        overflow: "hidden",
        display: "flex",
        flexDirection: "row",
        alignItems: "flex-start",
        p: 2,

      }}
      onClick={handleSelectJob}
    >
      <CardMedia
        component="img"
        sx={{
          width: 90,
          height: 90,
          objectFit: "contain",
          borderRadius: 4,
          mr: 2,
        }}
        image={logo}
        alt={`${company} logo`}
      />
      <CardContent sx={{ flex: 1, p: 0 }}>
        <Box sx={{ mb: 1 }}>
          <Typography
            variant="h6"
            component="div"
            sx={{ fontWeight: "bold", color: "#333", mb: 0.5 }}
          >
            {position}
          </Typography>
          <Typography
            variant="subtitle1"
            color="text.secondary"
            sx={{ fontWeight: "medium" }}
          >
            {`${company}   |   ${location}`}
          </Typography>
        </Box>
        <Typography
          variant="body2"
          color="text.secondary"
          sx={{ mb: 2, lineHeight: 1.6, fontSize: "0.875rem" }}
        >
          {description.responsibility}
        </Typography>
        <Divider sx={{ mb: 2 }} />
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            flexWrap: "wrap",
            gap: 2,
          }}
        >
          <Typography
            variant="body2"
            color="text.primary"
            sx={{ flexBasis: "45%", fontWeight: "medium" }}
          >
            <strong>Type:</strong> {jobType}
          </Typography>
          <Typography
            variant="body2"
            color="text.primary"
            sx={{ flexBasis: "45%", fontWeight: "medium" }}
          >
            <strong>Posted:</strong> {deadline}
          </Typography>
        </Box>
      </CardContent>
    </Paper>
  );
}
