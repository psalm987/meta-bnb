import { styled } from "@mui/material/styles";
import Paper from "@mui/material/Paper";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import Rating from "@mui/material/Rating";
import React from "react";

import StarRateRoundedIcon from "@mui/icons-material/StarRateRounded";

const StarRating = styled(Rating)(({ theme }) => ({
  "& .MuiRating-iconEmpty": {
    color: theme.palette.primary.main,
  },
}));

const NFTCard = ({ img, name, type, distance, availability }) => {
  return (
    <Paper
      variant="outlined"
      sx={{ p: "16px", borderRadius: "15px", position: "relative" }}
    >
      <Box position="absolute" right="28px" top="28px">
        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M11.5996 5.62952L12 6.16465L12.4004 5.62952C13.3204 4.39973 14.7949 3.6 16.44 3.6C19.2315 3.6 21.5 5.8738 21.5 8.69C21.5 9.82562 21.3189 10.8737 21.0043 11.8461L21.0032 11.8493C20.249 14.236 18.7035 16.1596 17.0354 17.5933C15.365 19.0289 13.6004 19.9483 12.4589 20.3366L12.4589 20.3366L12.4536 20.3385C12.3537 20.3737 12.1893 20.4 12 20.4C11.8107 20.4 11.6463 20.3737 11.5464 20.3385L11.5464 20.3385L11.5411 20.3366C10.3996 19.9483 8.635 19.0289 6.96465 17.5933C5.29649 16.1596 3.75096 14.236 2.99676 11.8493L2.99677 11.8493L2.99572 11.8461C2.68114 10.8737 2.5 9.82562 2.5 8.69C2.5 5.8738 4.76848 3.6 7.56 3.6C9.2051 3.6 10.6796 4.39973 11.5996 5.62952Z"
            fill="#D7D7D7"
            stroke="url(#paint0_linear_6_431)"
          />
          <defs>
            <linearGradient
              id="paint0_linear_6_431"
              x1="12"
              y1="20.9"
              x2="12"
              y2="3.1"
              gradientUnits="userSpaceOnUse"
            >
              <stop stop-color="#1D0E3D" />
              <stop offset="1" stop-color="#0F051D" />
            </linearGradient>
          </defs>
        </svg>
      </Box>
      <img
        src={img}
        alt={name}
        width="100%"
        height="265px"
        style={{ borderRadius: "15px", objectFit: "cover" }}
      />
      <Box
        mt="16px"
        mb="6px"
        sx={{ display: "grid", gridTemplateColumns: "auto auto" }}
      >
        <Typography variant="caption">{name}</Typography>
        <Typography variant="caption" fontWeight="700" textAlign="right">
          {type}
        </Typography>
        <Typography variant="caption">{distance}</Typography>
        <Typography variant="caption" textAlign="right">
          {availability}
        </Typography>
      </Box>
      <StarRating
        icon={<StarRateRoundedIcon fontSize="inherit" />}
        emptyIcon={<StarRateRoundedIcon fontSize="inherit" />}
        size="small"
      />
    </Paper>
  );
};

export default NFTCard;
