import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import React from "react";
import NFTCard from "../Components/ntfCard";
import { inspirationData } from "../Data/inspirationData";

const InspirationSection = () => {
  return (
    <Container maxWidth="xl" sx={{ my: 20 }}>
      <Typography variant="h2" textAlign="center" gutterBottom>
        Inspiration for your next adventure
      </Typography>
      <Grid sx={{ mt: 5 }} container spacing={6}>
        {inspirationData.map(
          ({ img, name, type, distance, availability }, index) => (
            <Grid key={index} item xs={12} md={6} lg={3}>
              <NFTCard
                img={require(`../Resources/Img/${img}`)}
                {...{ name, type, distance, availability }}
              />
            </Grid>
          )
        )}
      </Grid>
    </Container>
  );
};

export default InspirationSection;
