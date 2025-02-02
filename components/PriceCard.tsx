"use client";
import React from "react";
import { useState } from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import useMediaQuery from "@mui/material/useMediaQuery";
import Button from "@mui/material/Button";

const PriceCard = ({ bundles, defaultPrice }: any) => {
  const mobile = useMediaQuery("(min-width: 600px)");
  console.log(bundles);
  return (
    <Box
      className="text"
      key={bundles.deal}
      sx={{
        backgroundColor: "pink",
        padding: "2rem",
        borderRadius: "1rem",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",

        "&:hover": {
          scale: "1.15",
          backgroundColor: "orange",
          color: "white",
        },
      }}
    >
      <Typography sx={{ marginBottom: "2rem", fontWeight: "bold" }}>
        {bundles.deal}
      </Typography>
      <Typography
        id="month"
        variant="h1"
        sx={{ marginBottom: "2rem", display: "block" }}
      >
        $
        {defaultPrice === "Monthly"
          ? bundles.priceType.monthlyPrice
          : bundles.priceType.annualPrice}
      </Typography>
      {/* <Typography id="year" variant="h1" sx={{ marginBottom: "2rem" }}>
        {annualPrice}
      </Typography> */}

      {bundles.details.map((detail: any) => {
        return (
          <Box
            key={detail}
            sx={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Typography
              sx={{
                margin: ".5rem 0",
                fontWeight: "bold",
                fontSize: ".75rem",
              }}
            >
              {detail}
            </Typography>
            <hr style={{ width: "8rem" }}></hr>
          </Box>
        );
      })}
      <Button
        sx={{
          backgroundColor: "yellow",
          borderRadius: ".5rem",
          width: "100%",
          margin: "1rem 0",
          fontWeight: "bold",
          letterSpacing: ".08rem",
          fontSize: ".75rem",
        }}
      >
        {" "}
        LEARN MORE{" "}
      </Button>
    </Box>
  );
};

export default PriceCard;
