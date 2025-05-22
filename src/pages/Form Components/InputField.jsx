import React from "react";
import { TextField } from "@mui/material";

export default function InputField({ labels }) {
  return (
    <>
      {labels.map((label) => (
        <TextField
          key={label}
          id="outlined-basic"
          label={
            <span className="text-md">
              {label}
              <span style={{ color: "#ec4899" }}>*</span>
            </span>
          }
          type="text"
          placeholder="Mary Doe"
          color="secondary"
          slotProps={{
            inputLabel: {
              shrink: true,
            },
          }}
          sx={{
            mb: 2,
            "& .MuiOutlinedInput-root": {
              "& fieldset": {
                borderColor: "#7c3aed",
              },
              "&:hover fieldset": {
                borderColor: "#7c3aed",
              },
              "&.Mui-focused fieldset": {
                borderColor: "#7c3aed",
                color: "#7c3aed",
              },
            },
            "& .MuiInputLabel-root": {
              color: "#7c3aed",
            },
            "& .MuiInputBase-input": {
              color: "#7c3aed",
            },
            "& .MuiInputBase-input::placeholder": {
              color: "black",
              opacity: 1,
            },
          }}
        />
      ))}
    </>
  );
}
