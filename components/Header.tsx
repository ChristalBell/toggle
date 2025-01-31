import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import Switch from "@mui/material/Switch";
import React from "react";

const Header = () => {
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
