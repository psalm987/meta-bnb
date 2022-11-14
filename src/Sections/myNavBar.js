import React from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Container from "@mui/material/Container";
import Dialog from "@mui/material/Dialog";
import DialogTitle from "@mui/material/DialogTitle";
import Divider from "@mui/material/Divider";
import IconButton from "@mui/material/IconButton";
import useMediaQuery from "@mui/material/useMediaQuery";
import useTheme from "@mui/material/styles/useTheme";

import styled from "@mui/material/styles/styled";

import MetaLogo from "../Resources/Img/main_icon.svg";
import { Link } from "react-router-dom";
import { navData } from "../Data/navData";

import CloseRounded from "@mui/icons-material/CloseRounded"
import ArrowForwardIosRounded from "@mui/icons-material/ArrowForwardIosRounded"
import MenuOpenRounded from "@mui/icons-material/MenuOpenRounded"

import Avatar from "@mui/material/Avatar"
import DialogContent from "@mui/material/DialogContent"
import Drawer from "@mui/material/Drawer"
import List from "@mui/material/List"
import ListItem from "@mui/material/ListItem"
import ListItemAvatar from "@mui/material/ListItemAvatar"
import ListItemSecondaryAction from "@mui/material/ListItemSecondaryAction"
import ListItemText from "@mui/material/ListItemText"
import ListSubheader from "@mui/material/ListSubheader"
import Toolbar from "@mui/material/Toolbar"

import MetaMaskFox from "../Resources/Img/MetaMask_Fox.svg";
import WalletConnect from "../Resources/Img/walletconnect_logo.png";

const CustomList = styled(List)(
  (theme) => `
  & .MuiListItem-root {
    margin: 0;
    padding: 12px;
    border: 1px solid  #eee;
    width:100%;
    border-radius: 12px;
    font-weight: 700;
  }
  & .MuiListItem-container:not(:last-child) {
    margin-bottom: 16px;
  }
  & .MuiListSubheader-root {
    padding: 0;
    line-height: 1rem;
    margin: 16px 0;
    color: #333333;
  }
  & .MuiSvgIcon-root {
    margin-right: 12px;
    width: 15px;
  }
  `
);

const MetaButton = () => {
  const [metaOpen, setMetaOpen] = React.useState(false);

  const theme = useTheme();
  const mdDown = useMediaQuery(theme.breakpoints.down("md"));

  const closeMeta = () => setMetaOpen(false);

  return (
    <React.Fragment>
      <Button
        size="large"
        variant="contained"
        onClick={() => {
          setMetaOpen(true);
        }}
        disableElevation
      >
        Connect Wallet
      </Button>

      <Dialog
        sx={{ "& .MuiPaper-root": { borderRadius: { md: "16px" } } }}
        open={metaOpen}
        fullScreen={mdDown}
        onClose={() => setMetaOpen(false)}
        fullWidth
      >
        <DialogTitle sx={{ fontWeight: 700 }}>
          Connect Wallet
          <IconButton
            size="small"
            onClick={closeMeta}
            sx={{
              position: "absolute",
              right: 10,
              top: 10,
            }}
          >
            <CloseRounded />
          </IconButton>
        </DialogTitle>
        <Divider />
        <DialogContent>
          <CustomList
            subheader={
              <ListSubheader>Choose your preferred wallet:</ListSubheader>
            }
          >
            <ListItem button disableGutters onClick={closeMeta}>
              <ListItemAvatar>
                <Avatar src={MetaMaskFox} alt="Metamask fox" />
              </ListItemAvatar>
              <ListItemText primary="Metamask" />
              <ListItemSecondaryAction>
                <ArrowForwardIosRounded />
              </ListItemSecondaryAction>
            </ListItem>
            <ListItem button disableGutters onClick={closeMeta}>
              <ListItemAvatar>
                <Avatar src={WalletConnect} alt="WalletConnect" />
              </ListItemAvatar>
              <ListItemText primary="WalletConnect" />
              <ListItemSecondaryAction>
                <ArrowForwardIosRounded />
              </ListItemSecondaryAction>
            </ListItem>
          </CustomList>
        </DialogContent>
      </Dialog>
    </React.Fragment>
  );
};

const NavBar = () => {
  const [menuOpen, setMenuOpen] = React.useState(false);
  const closeMenu = () => setMenuOpen(false);

  const theme = useTheme();
  const mdDown = useMediaQuery(theme.breakpoints.down("md"));

  return (
    <Container maxWidth="xl">
      <Box
        py={{xs:"21px",md:"43px"}}
        display="flex"
        alignItems="center"
        justifyContent="space-between"
      >
        <Link to="/">
          <img height={30} src={MetaLogo} alt="Meta bnb logo" />
        </Link>
        <Box
          display={{
            xs: "none",
            md: "flex",
            "& a": { textDecoration: "none" },
          }}
          gap={4}
        >
          {navData.map(({ text, url }, index) => (
            <Link key={index} to={url}>
              <Button
                variant="text"
                sx={{
                  fontSize: "1.25rem",
                }}
                size="small"
              >
                {text}
              </Button>
            </Link>
          ))}
        </Box>
        {!mdDown && <MetaButton />}
        <IconButton
          onClick={() => setMenuOpen(true)}
          size="large"
          sx={{ display: { xs: "block", md: "none" } }}
        >
          <MenuOpenRounded fontSize="2rem" />
        </IconButton>
      </Box>
      {mdDown && (
        <Drawer anchor="right" open={menuOpen} onClose={closeMenu}>
          <Box minWidth="300px">
            <Toolbar />
            <List>
              {navData.map(({ text, url }, index) => (
                <ListItem
                  onClick={closeMenu}
                  button
                  key={index}
                  component={Link}
                  to={url}
                >
                  <ListItemText primary={text} />
                </ListItem>
              ))}
              <Divider />
              <ListItem>
                <MetaButton />
              </ListItem>
            </List>
          </Box>
        </Drawer>
      )}
    </Container>
  );
};

export default NavBar;
