import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import Tab from "@mui/material/Tab";
import Tabs from "@mui/material/Tabs";
import React from "react";
import UnstyledSelectIntroduction from "../Components/customSelect";
import NFTCard from "../Components/ntfCard";
import { placesData } from "../Data/placesData";

const categories = [
  "Restaurant",
  "Cottage",
  "Castle",
  "Fantasy city",
  "Beach",
  "Cabins",
  "Off-grid",
  "Farm",
];

const PlaceToStay = () => {
  const [location, setLocation] = React.useState(categories[0]);
  return (
    <Container maxWidth="xl" sx={{ my: { xs: 6, md: 12 } }}>
      <Box display="flex" gap={2} alignItems="center" mb={{ xs: 6, md: 10 }}>
        <Tabs variant="scrollable" scrollButtons="auto">
          {categories.map((category, index) => (
            <Tab
              key={index}
              sx={{ textTransform: "none", fontSize: "20px", mr: 8, px: 0 }}
              label={category}
            />
          ))}
        </Tabs>
        <UnstyledSelectIntroduction
          value={location}
          onChange={(e, val) => setLocation(val)}
          values={categories}
        />
      </Box>
      <Grid container spacing={8}>
        {placesData.map(
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

export default PlaceToStay;
