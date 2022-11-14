import { styled } from "@mui/material/styles";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import React from "react";

import LandingImage from "../Resources/Img/landing_img.png";

const BoldText = ({ children }) => (
  <Typography
    variant="inherit"
    component="span"
    sx={{ fontWeight: 700 }}
    color="primary"
  >
    {children}
  </Typography>
);

const SearchTextField = styled(TextField)({
  "& .MuiInputBase-root": {
    borderRadius: "8px 0 0 8px",
  },
  "& fieldset": {
    borderRightWidth: 0,
  },
});

const SearchBar = () => (
  <Box display="flex">
    <SearchTextField placeholder="Search for location" fullWidth />
    <Button
      size="large"
      variant="contained"
      disableElevation
      sx={{ borderRadius: "0 8px 8px 0", width: "230px" }}
    >
      Search
    </Button>
  </Box>
);

const IndexLandingSection = () => {
  return (
    <Container maxWidth="xl">
      <Box
        display={{ md: "grid", xs: "flex" }}
        flexDirection="column"
        rowGap={10}
        py={10}
        pt={{ xs: 6, md: 12 }}
        gridTemplateColumns="50% 45%"
        alignItems="center"
        justifyContent="space-between"
      >
        <Box
          sx={{
            maxWidth: { md: "700px" },
          }}
        >
          <Typography variant="h1" gutterBottom>
            Rent a <BoldText>Place</BoldText> away from{" "}
            <BoldText>Home</BoldText> in the <BoldText>Metaverse</BoldText>
          </Typography>
          <Typography variant="subtitle1" gutterBottom>
            we provide you access to luxury and affordable houses in the
            metaverse, get a chance to turn your imagination to reality at your
            comfort zone
          </Typography>
          <SearchBar />
        </Box>
        <Box>
          <img src={LandingImage} width="100%" alt="NFT homes langidng" />
        </Box>
      </Box>
    </Container>
  );
};

export default IndexLandingSection;
