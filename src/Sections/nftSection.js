import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import useTheme from "@mui/material/styles/useTheme";
import React from "react";

const NFTSection = () => {
  const theme = useTheme();
  return (
    <Box bgcolor="primary.main" color="white" py={14}>
      <Container maxWidth="xl" spacing={8}>
        <Box
          display={{ md: "grid", xs: "flex" }}
          flexDirection="column-reverse"
          gap={8}
          gridTemplateColumns="40% 60%"
          alignItems="center"
          justifyContent="space-between"
        >
          <Box>
            <Typography variant="h2" gutterBottom>
              Metabnb NFTs
            </Typography>
            <Typography variant="subtitle2" gutterBottom>
              Discover our NFT gift cards collection. Loyal customers gets
              amazing gift cards which are traded as NFTs. These NFTs gives our
              cutomer access to loads of our exclusive services.
            </Typography>
            <Button
              color="secondary"
              variant="contained"
              sx={{ color: theme.palette.primary.main }}
              size="large"
              disableElevation
            >
              Learn more
            </Button>
          </Box>
          <Box>
            <img
              src={require("../Resources/Img/nft_section_img.png")}
              alt="NFTs"
              width="100%"
            />
          </Box>
        </Box>
      </Container>
    </Box>
  );
};

export default NFTSection;
