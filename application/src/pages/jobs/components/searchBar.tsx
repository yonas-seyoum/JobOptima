import { useState } from "react";
import {
  Autocomplete,
  Box,
  Button,
  IconButton,
  TextField,
} from "@mui/material";
import FilterListIcon from "@mui/icons-material/FilterList";
import { useMediaQuery } from "react-responsive";
import "../utils/styles.css";

export default function SearchBar() {
  const isMobile = useMediaQuery({ query: "(min-width : 768px)" });
  const locations = [
    "New York, NY",
    "Los Angeles, CA",
    "Chicago, IL",
    "Houston, TX",
    "Phoenix, AZ",
  ];

  const [searchTerm, setSearchTerm] = useState("");
  const [selectedLocation, setSelectedLocation] = useState<string | null>(null);

  const handleSearch = () => {
    console.log("Searching for:", searchTerm, "in", selectedLocation);
  };

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-around",
        gap: "0.5em",
        padding: "1em",
        backgroundColor: "white",
        borderRadius: "8px",
        margin: "1em 0 0 0 ",
        boxShadow: "0px 0px 7px 0px rgba(189,189,189,0.75)",
        zIndex: 500,
      }}
    >
      <TextField
        variant="outlined"
        label="Job Title"
        sx={{
          flex: 1,
          "& .MuiOutlinedInput-root": {
            borderRadius: "10px",
            "& fieldset": {
              borderRadius: "10px",
            },
          },
        }}
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />

      {isMobile && (
        <Autocomplete
          freeSolo
          options={locations}
          renderInput={(params) => (
            <TextField
              {...params}
              label="Location"
              variant="outlined"
              sx={{
                flex: 1,
                minWidth: isMobile ? "300px" : "100%",
                "& .MuiOutlinedInput-root": {
                  borderRadius: "10px",
                  "& fieldset": {
                    borderRadius: "10px",
                  },
                },
              }}
            />
          )}
          onChange={(event, value) => setSelectedLocation(value as string)}
        />
      )}

      <IconButton
        sx={{
          color: "primary.main",
          fontSize: 30,
        }}
      >
        <FilterListIcon />
      </IconButton>

      <Button
        variant="contained"
        color="primary"
        onClick={handleSearch}
        sx={{
          height: "100%",
          borderRadius: "10px",
        }}
      >
        Search
      </Button>
    </Box>
  );
}
