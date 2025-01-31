"use client";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import Switch from "@mui/material/Switch";
import React from "react";
import useMediaQuery from "@mui/material/useMediaQuery";

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
        overflow: "none",
      }}
    >
      <Typography variant="h1">Our Pricing</Typography>
      <div style={{ display: "flex", alignItems: "center" }}>
        <Typography>Annually</Typography>
        <Switch defaultChecked />
        <Typography>Monthly</Typography>
      </div>
    </Box>
  );
};

export default Header;
