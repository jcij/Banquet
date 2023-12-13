import React from "react";
import StarIcon from "@mui/icons-material/Star";
import { Box } from "@mui/system";
import { Rating } from "@mui/material";

function RatingComponent() {
  const [value, setValue] = React.useState(0);
  const [hover, setHover] = React.useState(-1);
  return (
    <>
      <Rating
        sx={{ fontSize: "4rem" }}
        name="hover-feedback"
        value={value}
        precision={0.5}
        onChange={(event, newValue) => {
          setValue(newValue);
        }}
        onChangeActive={(event, newHover) => {
          setHover(newHover);
        }}
        emptyIcon={<StarIcon style={{ opacity: 0.55 }} fontSize="inherit" />}
      />
      {value !== null && (
        <Box sx={{ ml: 2 }}>{labels[hover !== -1 ? hover : value]}</Box>
      )}
    </>
  );
}

var labels = {
  0.5: "Useless",
  1: "Useless+",
  1.5: "Poor",
  2: "Poor+",
  2.5: "Ok",
  3: "Ok+",
  3.5: "Good",
  4: "Good+",
  4.5: "Excellent",
  5: "Excellent+",
};

export default RatingComponent;
