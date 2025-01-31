"use client";
import Box from "@mui/material/Box";
import React from "react";
import useMediaQuery from "@mui/material/useMediaQuery";
import Typography from "@mui/material/Typography";
const Header = () => {
  const mobile = useMediaQuery("(min-width: 600px)");
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        marginTop: "4rem",
      }}
    >
      {" "}
      <Typography variant="h1">Our Pricing</Typography>
    </Box>
  );
};

export default Header;
