"use client";
import React from "react";
import { useState } from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import useMediaQuery from "@mui/material/useMediaQuery";
import Button from "@mui/material/Button";

// interface Props {
//   bundles: [
//     {
//       deal: string;
//       priceType: {
//         monthlyPrice: string;
//         annualPrice: string;
//       };
//       details: string;
//     }
//   ];
// }

const PriceCard = ({ bundles }: any) => {
  const mobile = useMediaQuery("(min-width: 600px)");

  // const [priceOption, setPriceOption] = useState({ bundle: { priceType } });

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
        {bundles.priceType.monthlyPrice}
      </Typography>
      {/* <Typography id="year" variant="h1" sx={{ marginBottom: "2rem" }}>
        {annualPrice}
      </Typography> */}

      {bundles.details.map((detail: any) => {
        return (
          <Typography
            sx={{
              margin: ".5rem 0",
              fontWeight: "bold",
              fontSize: ".75rem",
            }}
            key={detail}
          >
            {detail}
          </Typography>
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
