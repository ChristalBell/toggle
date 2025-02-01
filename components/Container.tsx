import React from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import useMediaQuery from "@mui/material/useMediaQuery";
import Button from "@mui/material/Button";
const Container = () => {
  const mobile = useMediaQuery("(min-width: 600px)");

  const bundles = [
    {
      deal: "Basic",
      monthlyPrice: "$19.99",
      annualPrice: "$199.99",
      details: ["500GB Storage", "2 Users Allowed", "Send up to 3GB"],
    },
    {
      deal: "Professional",
      monthlyPrice: "$24.99",
      annualPrice: "$299.99",
      details: ["1TB Storage", "5 Users Allowed", "Send up to 10GB"],
    },
    {
      deal: "Master",
      monthlyPrice: "$39.99",
      annualPrice: "$399.99",
      details: ["2TB Storage", "10 Users Allowed", "Send up to 20GB"],
    },
  ];

  return (
    <Box
      className=" package container"
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
          <Box
            className="text"
            key={bundle.deal}
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
              {bundle.deal}
            </Typography>
            <Typography
              id="month"
              variant="h1"
              sx={{ marginBottom: "2rem", display: "block" }}
            >
              {bundle.monthlyPrice}
            </Typography>
            {/* <Typography id="year" variant="h1" sx={{ marginBottom: "2rem" }}>
                {bundle.annualPrice}
              </Typography> */}

            {bundle.details.map((detail) => {
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
      })}
    </Box>
  );
};

export default Container;
