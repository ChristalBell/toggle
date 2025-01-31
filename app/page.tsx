import Header from "@/components/Header";
import PriceCard from "@/components/PriceCard";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import React from "react";

const Home = () => {
  return (
    <Box>
      <Typography variant="h1">
        <Header />
        <PriceCard />
      </Typography>
    </Box>
  );
};

export default Home;
