// library
import { memo } from "react";
import { styled } from "@mui/material/styles";
import {
  Box,
  Toolbar,
  OutlinedInput,
  InputAdornment,
  IconButton,
} from "@mui/material";
import ClearIcon from "@mui/icons-material/Clear";

import { Icon } from "@iconify/react";
import searchFill from "@iconify/icons-eva/search-fill";
// ----------------------------------------------------------------------

const RootStyle = styled(Toolbar)(({ theme }) => ({
  height: 96,
  display: "flex",
  justifyContent: "space-between",
  padding: theme.spacing(0, 1, 0, 3),
}));

const SearchStyle = styled(OutlinedInput)(({ theme }) => ({
  width: 180,
  transition: theme.transitions.create(["box-shadow", "width"], {
    easing: theme.transitions.easing.easeInOut,
    duration: theme.transitions.duration.shorter,
  }),
  "&.Mui-focused": { width: 320, boxShadow: theme.customShadows.z8 },
  "& fieldset": {
    borderWidth: `2px !important`,
    borderColor: `#fff !important`,
  },
  backgroundColor: "#fff",
  "&::placeholder": {
    textOverflow: "ellipsis !important",
    color: "#000",
  },
}));

// ----------------------------------------------------------------------

const ListSearchbar = ({
  placeholder = "Search",
  handleSearchChange,
  searchStr,
  handleSearchClear,
}) => {
  return (
    <RootStyle
    // sx={{
    //   ...(numSelected &&
    //     numSelected > 0 && {
    //       color: "primary.main",
    //       bgcolor: "primary.lighter",
    //     }),
    // }}
    >
      <SearchStyle
        onChange={handleSearchChange}
        placeholder={placeholder}
        size="small"
        value={searchStr}
        startAdornment={
          <InputAdornment position="start">
            <Box component={Icon} icon={searchFill} sx={{ color: "#000" }} />
          </InputAdornment>
        }
        endAdornment={
          searchStr ? (
            <InputAdornment
              position="end"
              className="pointer"
              onClick={handleSearchClear}
            >
              <IconButton sx={{ color: "#000" }}>
                <ClearIcon />
              </IconButton>
            </InputAdornment>
          ) : (
            <></>
          )
        }
      />
    </RootStyle>
  );
};

export default memo(ListSearchbar);
