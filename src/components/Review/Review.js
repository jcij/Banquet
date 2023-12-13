import {
  CardContent,
  FormControl,
  FormControlLabel,
  Grid,
  Radio,
  RadioGroup,
  Typography,
} from "@mui/material";
import { Box } from "@mui/system";
import RatingComponent from "./Rating";

function Review({ questions, current, total }) {
  function renderMultiSelectForm(options) {
    return (
      <FormControl component="fieldset">
        <RadioGroup
          aria-label="gender"
          defaultValue="female"
          name="radio-buttons-group"
        >
          {options.map((option) => (
            <FormControlLabel
              value={option.value}
              control={<Radio />}
              label={option.label}
            />
          ))}
        </RadioGroup>
      </FormControl>
    );
  }

  const currentQuestion = questions[current];

  return (
    <>
      <Grid
        container
        spacing={2}
        mb={2}
        direction="row"
        justifyContent="center"
        alignItems="center"
        sx={{ borderBottom: "1px solid #F4F6F8", paddingBottom: "1rem" }}
      >
        <Grid item xs={11}>
          <Box m={3} mb={1}>
            <Typography variant="h4" component="div" gutterBottom>
              {currentQuestion.question}
            </Typography>
            <Typography
              variant="caption"
              display="block"
              sx={{ color: "#a4b0be", fontSize: "1rem" }}
            >
              {currentQuestion.subTitle}
            </Typography>
          </Box>
        </Grid>
        <Grid item xs={1}>
          <Typography>
            {current + 1} of {total}
          </Typography>
        </Grid>
      </Grid>
      <CardContent>
        <Box
          sx={{
            display: "flex",
            width: "100%",
            minHeight: "160px",
            alignItems: "center",
            justifyContent:
              currentQuestion.type === "radio" ? "start" : "center",
          }}
        >
          {currentQuestion.type === "radio" ? (
            renderMultiSelectForm(currentQuestion.options)
          ) : (
            <RatingComponent />
          )}
        </Box>
      </CardContent>
    </>
  );
}

export default Review;
