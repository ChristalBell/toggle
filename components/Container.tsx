"use client";
import React from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import { useState } from "react";
import useMediaQuery from "@mui/material/useMediaQuery";
import Switch from "@mui/material/Switch";
import PriceCard from "./PriceCard";
import data from "../data.json";
import { COLORS } from "@/styles/colors";
import { styled } from "@mui/material/styles";

const Container = () => {
  const mobile = useMediaQuery("(min-width: 600px)");
  const [bundles, setBundles] = useState(data);
  const [defaultPrice, setDefaultPrice] = useState("Monthly");

  const CustomSwitch = styled(Switch)(({ theme }) => ({
    width: 42,
    height: 26,
    padding: 0,

    "& .MuiSwitch-switchBase": {
      padding: 0,
      margin: 2,
      transitionDuration: "300ms",
      "&.Mui-checked": {
        transform: "translateX(16px)",
        color: COLORS.darkBlue,

        "& + .MuiSwitch-track": {
          backgroundColor: COLORS.lightBlue,
          opacity: 1,
          border: 0,
        },
      },
    },
    "& .MuiSwitch-thumb": {
      boxSizing: "border-box",
      width: 22,
      height: 22,
    },
    "& .MuiSwitch-track": {
      borderRadius: 26 / 2,
      backgroundColor: COLORS.white,
      opacity: 1,
    },
  }));

  return (
    <Box>
      <Box
        className="switch"
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          paddingTop: "2rem",
        }}
      >
        <Typography sx={{ paddingRight: "2rem" }}>Annually</Typography>
        <CustomSwitch
          checked={defaultPrice === "Monthly"}
          onChange={() => {
            if (defaultPrice === "Annually") {
              setDefaultPrice("Monthly");
            } else {
              setDefaultPrice("Annually");
            }
          }}
        />
        <Typography sx={{ paddingLeft: "2rem" }}>Monthly</Typography>
      </Box>
      <Box
        sx={{
          backgroundColor: "rgb(238, 251, 255)",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          marginTop: "4rem",

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
