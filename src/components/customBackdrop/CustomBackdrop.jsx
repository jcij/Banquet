import React from "react";
import { Backdrop, CircularProgress } from "@mui/material";
import { withStyles } from "@mui/styles";

const LimitedBackdrop = withStyles({
  root: {
    // position: 'absolute !important',
    zIndex: "1001 !important",
  },
})(Backdrop);

const CustomBackdrop = (props) => {
  return (
    <>
      <LimitedBackdrop
        open={props.loading}
        style={{ position: props.position || "fixed" }}
      >
        <CircularProgress size={30} className="text-primary" />
      </LimitedBackdrop>
      {props.children}
    </>
  );
};

export default CustomBackdrop;
