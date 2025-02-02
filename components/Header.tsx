"use client";
import Box from "@mui/material/Box";
import React from "react";

import Typography from "@mui/material/Typography";
const Header = () => {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        maxHeight: "100vh",
        paddingTop: "4rem",
      }}
    >
      {" "}
      <Typography variant="h1">Our Pricing</Typography>
    </Box>
  );
};

export default Header;
