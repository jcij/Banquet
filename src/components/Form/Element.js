import React from "react";
import { inputType } from "../../utils/enum";

import { Box, Stack, TextField } from "@mui/material";

function Element({ eletype }) {
  function renderInput() {
    return (
      <Box sx={{ margin: "20px 0" }}>
        <Stack
          direction="row"
          justifyContent="space-evenly"
          alignItems="center"
          spacing={2}
        >
          <TextField
            fullWidth
            id="outlined-basic"
            label="Project Title"
            variant="outlined"
            placeholder="Please enter project name"
          />
        </Stack>
      </Box>
    );
  }

  function renderTextarea() {}

  function renderSelect() {}

  function renderAutoComplete() {}

  return (
    <>
      {eletype === inputType.input && renderInput()}
      {eletype === inputType.select && renderSelect()}
      {eletype === inputType.textarea && renderTextarea()}
      {eletype === inputType.autocomplete && renderAutoComplete()}
    </>
  );
}

export default Element;
