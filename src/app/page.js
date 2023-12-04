import LatestNews from "@/components/ui/LatestNews/LatestNews";
import { Box } from "@mui/material";
import React from "react";

const HomePage = () => {
  return (
    <>
      <Box display="grid" gridTemplateColumns="repeat(12, 1fr)" gap={2}>
        <Box gridColumn="span 8">
          <h1>Latest News</h1>
          <LatestNews></LatestNews>
        </Box>
        <Box gridColumn="span 4">
        <h1>Side Ber</h1>
        </Box>
      </Box>
    </>
  );
};

export default HomePage;
