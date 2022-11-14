import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import useTheme from "@mui/material/styles/useTheme";
import useMediaQuery from "@mui/material/useMediaQuery";
import React from "react";
import MBToken from "../Resources/Img/Orgs_MBToken.svg";
import Metamask from "../Resources/Img/Orgs_Metamask.svg";
import OpenSea from "../Resources/Img/Orgs_OpenSea.svg";

const OrgsSection = () => {
  const theme = useTheme();
  const md = useMediaQuery(theme.breakpoints.up("md"));
  return (
    <Box bgcolor="primary.main" p={3} display={{xs:"none", sm:"block"}}>
      <Container
        maxWidth="xl"
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        {[MBToken, Metamask, OpenSea].map((src, index) => (
          <img
            height={md ? "35px" : "20px"}
            src={src}
            alt={`Organisation ${index + 1}`}
            key={index}
          />
        ))}
      </Container>
    </Box>
  );
};

export default OrgsSection;
