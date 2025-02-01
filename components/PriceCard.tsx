"use client";
import React from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import { useState } from "react";
import useMediaQuery from "@mui/material/useMediaQuery";
import Switch from "@mui/material/Switch";
import Container from "./Container";

const PriceCard = () => {
  const mobile = useMediaQuery("(min-width: 600px)");

  const priceChange = () => {
    const show = document.getElementById("year");
    const monthPrice = document.getElementById("month");
    if (monthPrice?.style.display === "block") {
      monthPrice.style.display = "none";
    } else {
      monthPrice?.style.display === "block";
    }
  };
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
        <Switch defaultChecked onChange={priceChange} />
        <Typography>Monthly</Typography>
      </Box>
      <Container />
    </Box>
  );
};
export default PriceCard;
