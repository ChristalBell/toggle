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
  const [defaultPrice, setDefaultPrice] = useState("Monthly");

  return (
    <Box>
      <Box
        className="switch"
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          overflow: "hidden",
        }}
      >
        <Typography>Annually</Typography>
        <Switch
          checked={defaultPrice === "Monthly"}
          onChange={() => {
            if (defaultPrice === "Annually") {
              setDefaultPrice("Monthly");
            } else {
              setDefaultPrice("Annually");
            }
          }}
        />
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
          return (
            <PriceCard
              key={bundle.deal}
              bundles={bundle}
              defaultPrice={defaultPrice}
            />
          );
        })}
      </Box>
    </Box>
  );
};
export default Container;
