import React from "react";
import {
  Modal,
  Box,
  Stack,
  Typography,
  IconButton,
  Card,
  Container,
  TextField,
  InputAdornment,
  FormControlLabel,
  Button,
  MenuItem,
} from "@mui/material";
import { styled } from "@mui/material/styles";
import { useFormik, Form, FormikProvider } from "formik";
import Breadcrumb from "../../Breadcrumb/Breadcrumb";

const AddUser = () => {
  const formik = useFormik({
    initialValues: {
      roleName: "",
      permission: "",
      remember: true,
    },
  });

  const style = {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    // width: 400,
    bgcolor: "background.paper",
    // border: "2px solid #000",
    boxShadow: 24,
    p: 4,
  };

  const ContentStyle = styled("div")(({ theme }) => ({
    display: "flex",

    flexDirection: "column",
    justifyContent: "center",
    padding: theme.spacing(6, 4),
  }));

  return (
    <Container>
      <Stack mb={5}>
        <Typography variant="h4" gutterBottom>
          Create a new user
        </Typography>
        <Breadcrumb />
      </Stack>

      <Stack>
        <Card>
          <Container>
            <ContentStyle>
              <FormikProvider value={formik}>
                <Form autoComplete="off" noValidate>
                  <Stack direction="row" spacing={3} mb={2}>
                    <TextField
                      fullWidth
                      autoComplete="username"
                      type="text"
                      label="Role name"
                    />

                    <TextField
                      fullWidth
                      autoComplete="username"
                      type="text"
                      label="Role name"
                    />
                  </Stack>
                  <Stack direction="row" spacing={3} mb={2}>
                    <TextField
                      fullWidth
                      autoComplete="username"
                      type="text"
                      label="Role name"
                    />

                    <TextField
                      fullWidth
                      autoComplete="username"
                      type="text"
                      label="Role name"
                    />
                  </Stack>
                  <Stack direction="row" spacing={3} mb={2}>
                    <TextField
                      fullWidth
                      autoComplete="username"
                      type="text"
                      label="Role name"
                    />

                    <TextField
                      fullWidth
                      autoComplete="username"
                      type="text"
                      label="Role name"
                    />
                  </Stack>
                  <Stack direction="row" spacing={3} mb={2}>
                    <TextField
                      fullWidth
                      autoComplete="username"
                      type="text"
                      label="Role name"
                    />

                    <TextField
                      fullWidth
                      autoComplete="username"
                      type="text"
                      label="Role name"
                    />
                  </Stack>
                  <Box sx={{ display: "flex", justifyContent: "flex-end" }}>
                    <Button size="large" type="submit" variant="contained">
                      Add user
                    </Button>
                  </Box>
                </Form>
              </FormikProvider>
            </ContentStyle>
          </Container>
        </Card>
      </Stack>
    </Container>
  );
};

export default AddUser;
