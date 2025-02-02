"use client";
import React from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import { useState } from "react";
import useMediaQuery from "@mui/material/useMediaQuery";
import Switch from "@mui/material/Switch";
import PriceCard from "./PriceCard";
import data from "../data.json";

const Container = () => {
  const mobile = useMediaQuery("(min-width: 600px)");
  const [bundles, setBundles] = useState(data);
  return (
    <Box>
      <Box
        className="switch"
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Typography>Annually</Typography>
        <Switch defaultChecked />
        <Typography>Monthly</Typography>
      </Box>
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          marginTop: "4rem",
          backgroundColor: "blue",
          flexDirection: mobile ? "row" : "column",
        }}
      >
        {bundles.map((bundle) => {
          return <PriceCard key={bundle.deal} bundles={bundle} />;
        })}
      </Box>
      {/* <PriceCard /> */}
    </Box>
  );
};
export default Container;
