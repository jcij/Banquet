import React, { useState } from "react";
import { Icon } from "@iconify/react";
// material
import { alpha, styled } from "@mui/material/styles";
import {
  Container,
  Grid,
  Stack,
  Box,
  Card,
  TextField,
  Typography,
  Button,
  TextareaAutosize,
} from "@mui/material";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";

import LoadingButton from "@mui/lab/LoadingButton";
import SaveIcon from "@mui/icons-material/Save";
import { green } from "@mui/material/colors";

import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import Slide from "@mui/material/Slide";

// utils
import plusFill from "@iconify/icons-eva/plus-fill";
import { Link as RouterLink } from "react-router-dom";

// ----------------------------------------------------------------------

const RootStyle = styled(Card)(({ theme }) => ({
  boxShadow: "none",
  textAlign: "center",
  padding: theme.spacing(5, 0),
  color: theme.palette.primary.darker,
  backgroundColor: theme.palette.primary.lighter,
}));

const IconWrapperStyle = styled("div")(({ theme }) => ({
  margin: "auto",
  display: "flex",
  borderRadius: "50%",
  alignItems: "center",
  width: theme.spacing(8),
  height: theme.spacing(8),
  justifyContent: "center",
  marginBottom: theme.spacing(3),
  color: theme.palette.primary.dark,
  backgroundImage: `linear-gradient(135deg, ${alpha(
    theme.palette.primary.dark,
    0
  )} 0%, ${alpha(theme.palette.primary.dark, 0.24)} 100%)`,
}));

// ----------------------------------------------------------------------

const TOTAL = 714000;

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

export default function AppWeeklySales() {
  const [open, setOpen] = useState(false);
  const handleClickOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const [loading, setLoading] = useState(false);
  function handleClick() {
    setLoading(true);
  }

  const [age, setAge] = useState("");

  const handleChange = (event) => {
    setAge(event.target.value);
  };

  return (
    <RootStyle align="left">
      {/* <IconWrapperStyle>
        <Icon icon={androidFilled} width={24} height={24} />
      </IconWrapperStyle> */}

      <Grid container spacing={3}>
        <Grid item xs={12} md={12} spacing={3}>
          <Typography variant="h3" align="left" ml={3}>
            Welcome back! <br />
            Jaydon Frankie
          </Typography>
          <Typography
            variant="subtitle2"
            align="left"
            ml={3}
            sx={{
              opacity: 0.72,
              marginTop: "10px",
              marginBottom: "20px",
              fontWeight: 500,
            }}
          >
            If you are going to use a passage of Lorem Ipsum, you need to be
            sure there isn't anything
          </Typography>
          <Button
            variant="contained"
            component={RouterLink}
            to="/create-project"
            startIcon={<Icon icon={plusFill} />}
            sx={{ float: "left", marginLeft: "25px" }}
          >
            Project
          </Button>
        </Grid>
        {/* <Grid item xs={12} sm={6} md={5} pt={3}> */}
          {/* image will come here */}
        {/* </Grid> */}
      </Grid>
    </RootStyle>
  );
}
