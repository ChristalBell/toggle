"use client";
import React from "react";
import { useState } from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import useMediaQuery from "@mui/material/useMediaQuery";
import Button from "@mui/material/Button";
import { COLORS } from "../styles/colors";

const PriceCard = ({ bundles, defaultPrice }: any) => {
  const mobile = useMediaQuery("(min-width: 600px)");

  return (
    <Box
      className="text"
      key={bundles.deal}
      sx={{
        backgroundColor: "white",
        boxShadow: 3,
        padding: "2rem",
        borderRadius: "1rem",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",

        "&:hover": {
          scale: "1.15",
          backgroundImage: `linear-gradient(0.5turn,${COLORS.lightBlue},${COLORS.darkBlue})`,
          color: "white",
        },
      }}
    >
      <Typography sx={{ marginBottom: "2rem", fontWeight: "bold" }}>
        {bundles.deal}
      </Typography>
      <Typography id="month" variant="h1" sx={{ marginBottom: "2rem" }}>
        $
        {defaultPrice === "Monthly"
          ? bundles.priceType.monthlyPrice
          : bundles.priceType.annualPrice}
      </Typography>

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
                color: COLORS.grey,
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
          backgroundColor: COLORS.darkBlue,
          color: COLORS.white,
          borderRadius: ".5rem",
          width: "100%",
          margin: "1rem 0",
          fontWeight: "bold",
          letterSpacing: ".08rem",
          fontSize: ".75rem",

          "&:hover": {
            backgroundColor: COLORS.white,
            color: COLORS.darkBlue,
          },
        }}
      >
        {" "}
        LEARN MORE{" "}
      </Button>
    </Box>
  );
};

export default PriceCard;
