import React from "react";
import { Box, Stack, TextField } from "@mui/material";
import FormControl from "@mui/material/FormControl";
import InputLabel from "@mui/material/InputLabel";
import Select from "@mui/material/Select";
import MenuItem from "@mui/material/MenuItem";

const RoleModal = () => {
  return (
    <>
      <Box sx={{ marginTop: "20px" }}>
        <Stack
          direction="row"
          justifyContent="space-evenly"
          alignItems="center"
          spacing={2}
        >
          <TextField
            fullWidth
            id="outlined-basic"
            label="Project"
            variant="outlined"
            placeholder="Please enter project name"
          />
        </Stack>
      </Box>

      <Box sx={{ margin: "30px 0 10px 0" }}>
        <Stack
          direction="row"
          justifyContent="space-evenly"
          alignItems="center"
          spacing={2}
        >
          <FormControl fullWidth>
            <InputLabel id="demo-simple-select-label">Permissions</InputLabel>
            <Select
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              // value={age}
              label="Permissions"
            >
              <MenuItem value={1}>Multimedia Design</MenuItem>
              <MenuItem value={2}>Web Development</MenuItem>
              <MenuItem value={3}>Softwatre Development</MenuItem>
              <MenuItem value={4}>Application Development</MenuItem>
            </Select>
          </FormControl>
        </Stack>
      </Box>
    </>
  );
};

export default RoleModal;
