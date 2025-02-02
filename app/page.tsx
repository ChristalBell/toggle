import Header from "@/components/Header";
import Container from "@/components/Container";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import React from "react";
import { COLORS } from "@/styles/colors";

const Home = () => {
  return (
    <Box
      sx={{
        backgroundColor: "rgb(238, 251, 255)",
        height: "100vh",
      }}
    >
      <Header />
      <Container />
    </Box>
  );
};

export default Home;
