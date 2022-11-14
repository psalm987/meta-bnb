import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import React from "react";

import Logo from "../Resources/Img/white_meta_logo.svg";
import Facebook from "../Resources/Img/Facebook.svg";
import Instagram from "../Resources/Img/Instagram.svg";
import Twitter from "../Resources/Img/Twitter.svg";
import { Link } from "react-router-dom";

const footerLinks = [
  {
    title: "Community",
    links: [
      { text: "NFT", url: "/" },
      { text: "Tokens", url: "/" },
      { text: "Landlords", url: "/" },
      { text: "Discord", url: "/" },
    ],
  },
  {
    title: "Places",
    links: [
      { text: "Castles", url: "/" },
      { text: "Farms", url: "/" },
      { text: "Beach", url: "/" },
      { text: "Learn more", url: "/placetostay" },
    ],
  },
  {
    title: "About us",
    links: [
      { text: "Road map", url: "/" },
      { text: "Creators", url: "/" },
      { text: "Career", url: "/" },
      { text: "Contact us", url: "/" },
    ],
  },
];

const Footer = () => {
  return (
    <Box bgcolor="common.black" color="common.white" pt={12}>
      <Container maxWidth="xl">
        <Box
          display="grid"
          gridTemplateColumns={{
            xs: "auto",
            sm: "auto auto",
            md: "auto auto auto auto",
          }}
        >
          <Box>
            <img src={Logo} alt="Meta bnb logo" />
            <Box display="flex" gap={4} my={8}>
              <img src={Facebook} alt="Facebook" />
              <img src={Instagram} alt="Instagram" />
              <img src={Twitter} alt="Twitter" />
            </Box>
          </Box>
          {footerLinks.map(({ title, links }, index) => {
            return (
              <Box key={index} mb={2}>
                <Typography
                  variant="h4"
                  sx={{ mb: "24px", fontSize: "18px", fontWeight: 700 }}
                >
                  {title}
                </Typography>
                {links.map(({ text, url }, i) => {
                  return (
                    <Typography
                      key={i}
                      component={Link}
                      to={url}
                      variant="body1"
                      sx={{
                        display: "block",
                        color: "#f7f7f7",
                        textDecoration: "none",
                        mb: "16px",
                        fontSize: "14px",
                        "&:hover": {
                          color: "primary.main",
                        },
                      }}
                    >
                      {text}
                    </Typography>
                  );
                })}
              </Box>
            );
          })}
        </Box>
        <Typography sx={{ py: "35px" }} variant="body1">
          © 2022 Metabnb
        </Typography>
      </Container>
    </Box>
  );
};

export default Footer;
