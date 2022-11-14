import * as React from "react";
import SelectUnstyled, {
  selectUnstyledClasses,
} from "@mui/base/SelectUnstyled";
import OptionUnstyled, {
  optionUnstyledClasses,
} from "@mui/base/OptionUnstyled";
import PopperUnstyled from "@mui/base/PopperUnstyled";
import { styled } from "@mui/system";

import TuneRoundedIcon from "@mui/icons-material/TuneRounded";
import { pink, grey } from "@mui/material/colors";

const Button = React.forwardRef((props, ref) => {
  const { ownerState, ...other } = props;
  return (
    <button type="button" {...other} ref={ref}>
      {other.children}
      {<TuneRoundedIcon />}
    </button>
  );
});

const StyledButton = styled(Button, { shouldForwardProp: () => true })(
  ({ theme }) => `
  font-family: Red Rose, sans-serif;
  font-size: 1rem;
  box-sizing: border-box;
  min-height: calc(1.5em + 22px);
  min-width: 160px;
  padding: 14px;
  border-radius: 8px;
  text-align: left;
  line-height: 1.5;
  background: ${theme.palette.mode === "dark" ? grey[900] : "#fff"};
  border: 1px solid ${theme.palette.mode === "dark" ? grey[700] : grey[200]};
  color: ${theme.palette.mode === "dark" ? grey[300] : grey[900]};
  position: relative;

  transition-property: all;
  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
  transition-duration: 120ms;

  &:hover {
    background: ${theme.palette.mode === "dark" ? grey[800] : grey[50]};
    border-color: ${theme.palette.mode === "dark" ? grey[600] : grey[300]};
  }

  &.${selectUnstyledClasses.focusVisible} {
    border-color: ${pink[400]};
    outline: 3px solid ${theme.palette.mode === "dark" ? pink[500] : pink[200]};
  }

  & > svg {
    font-size: 24px;
    position: absolute;
    height: 100%;
    top: 0;
    right: 10px;
  }
  `
);

const StyledListbox = styled("ul")(
  ({ theme }) => `
  font-family: Red Rose, sans-serif;
  font-size: 1rem;
  box-sizing: border-box;
  padding: 6px;
  margin: 12px 0;
  min-width: 320px;
  border-radius: 12px;
  overflow: auto;
  outline: 0px;
  background: ${theme.palette.mode === "dark" ? grey[900] : "#fff"};
  border: 1px solid ${theme.palette.mode === "dark" ? grey[700] : grey[200]};
  color: ${theme.palette.mode === "dark" ? grey[300] : grey[900]};
  box-shadow: 0px 4px 30px ${
    theme.palette.mode === "dark" ? "#21212107" : "#eeeeee07"
  };
  `
);

const StyledOption = styled(OptionUnstyled)(
  ({ theme }) => `
  list-style: none;
  padding: 8px;
  border-radius: 8px;
  cursor: default;

  &:last-of-type {
    border-bottom: none;
  }

  &.${optionUnstyledClasses.selected} {
    background-color: ${theme.palette.mode === "dark" ? pink[900] : pink[100]};
    color: ${theme.palette.mode === "dark" ? pink[100] : pink[900]};
  }

  &.${optionUnstyledClasses.highlighted} {
    background-color: ${theme.palette.mode === "dark" ? grey[800] : grey[100]};
    color: ${theme.palette.mode === "dark" ? grey[300] : grey[900]};
  }

  &.${optionUnstyledClasses.highlighted}.${optionUnstyledClasses.selected} {
    background-color: ${theme.palette.mode === "dark" ? pink[900] : pink[100]};
    color: ${theme.palette.mode === "dark" ? pink[100] : pink[900]};
  }

  &.${optionUnstyledClasses.disabled} {
    color: ${theme.palette.mode === "dark" ? grey[700] : grey[400]};
  }

  &:hover:not(.${optionUnstyledClasses.disabled}) {
    background-color: ${theme.palette.mode === "dark" ? grey[800] : grey[100]};
    color: ${theme.palette.mode === "dark" ? grey[300] : grey[900]};
  }
  `
);

const StyledPopper = styled(PopperUnstyled)`
  z-index: 1;
`;

const CustomSelect = React.forwardRef((props, ref) => {
  const slots = {
    root: StyledButton,
    listbox: StyledListbox,
    popper: StyledPopper,
    ...props.slots,
  };

  return <SelectUnstyled {...props} ref={ref} slots={slots} />;
});

export default function UnstyledSelectIntroduction(props) {
  const { values, onChange, value } = props;
  return (
    <CustomSelect onChange={onChange} value={value}>
      {values.map((val, index) => (
        <StyledOption value={val} key={index}>
          {val}
        </StyledOption>
      ))}
    </CustomSelect>
  );
}
