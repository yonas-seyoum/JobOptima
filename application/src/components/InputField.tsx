import { TextField } from "@mui/material";
import { useEffect, useState } from "react";
import { InputFieldProps } from "../util/types";

export default function InputField({
  placeholder,
  label,
  color,
  multiline,
}: InputFieldProps) {
  const { primary, secondary, tertiary } = color;

  const [numberOfRows, setNumberofRows] = useState<number>(0);

  useEffect(() => {
    if (multiline) {
      setNumberofRows(4);
    }
  });

  return (
    <TextField
      fullWidth
      label={label}
      placeholder={placeholder}
      multiline={multiline}
      variant="outlined"
      margin="normal"
      rows={numberOfRows}
      required
      sx={{
        backgroundColor: tertiary,
        borderRadius: "8px",
        mb: { xs: 2, md: 0 },
        mr: { md: 2 },
        "& .MuiOutlinedInput-root": {
          "& fieldset": {
            color: secondary,
            borderColor: primary,
          },
          "&:hover fieldset": {
            color: primary,
            borderColor: primary,
          },
        },
      }}
      InputLabelProps={{
        style: {
          color: primary,
        },
      }}
    />
  );
}
