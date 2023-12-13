import React, { useState } from "react";
// css
import "./login.scss";
// library
import { TextField, IconButton, InputAdornment, Grid } from "@mui/material";
import { Visibility, VisibilityOff } from "@mui/icons-material";
import toastr from "toastr";
import { Navigate, useLocation } from "react-router-dom";
// constants
// import { API_URL } from "../../constants/url.constant";
// import { API_STATUS_CODE, MESSAGE } from "../../constants/content.constant";
// utils
import {
  // postMethod,
  StoredVariables,
  setSessionState,
  getSessionState,
} from "src/utils";
// components
import { CustomBackdrop } from "src/components";
import { MESSAGE } from "src/constants/content.constant";

export default function Login() {
  const location = useLocation();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [showPassword, setShowPassword] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      if (email === "test@gmail.com" && password === "12345") {
        setTimeout(() => {
          setSessionState(
            StoredVariables.authToken,
            StoredVariables.authToken,
            false
          );
          toastr.success(MESSAGE.LOGIN_SUCCESS);
          window.location.href = "/";
          setLoading(false);
        }, 1);
      } else {
        setLoading(false);

        toastr.error(MESSAGE.LOGIN_FAILED);
      }
      // const params = new URLSearchParams();
      // params.append("grant_type", "password");
      // params.append("username", email);
      // params.append("password", password);

      // const response = await postMethod(API_URL.LOGIN, params, false, false);

      // if (response?.status === API_STATUS_CODE.SUCCESS) {
      //   toastr.success(MESSAGE.LOGIN_SUCCESS);
      //   setSessionState(
      //     StoredVariables.authToken,
      //     response?.data?.access_token,
      //     false
      //   );
      //   setSessionState(
      //     StoredVariables.expiresIn,
      //     response?.data?.expires_in,
      //     false
      //   );
      //   window.location.href = "/";
      // } else {
      //   toastr.error(MESSAGE.LOGIN_FAILED);
      // }
      setLoading(false);
    } catch (error) {
      setLoading(false);
    }
  };
  const isAuthenticated = getSessionState(StoredVariables.authToken);

  if (isAuthenticated) {
    return <Navigate to="/" state={{ from: location }} />;
  }
  return (
    <CustomBackdrop loading={loading}>
      <Grid container className="login-page">
        <Grid item xs={12} md={6} className="login-left">
          <div className="login-here">
            <div className="title">Login in</div>
            <form
              onSubmit={(event) => handleSubmit(event)}
              className="login-form"
            >
              <TextField
                variant="standard"
                id="email"
                label="E-Mail Address"
                type="email"
                value={email}
                className="login-field"
                fullWidth
                onChange={(e) => setEmail(e.target.value)}
                required
                InputLabelProps={{ required: false }}
              />
              <TextField
                variant="standard"
                id="password"
                label="Password"
                type={showPassword ? "text" : "password"}
                value={password}
                className="login-field mt"
                fullWidth
                onChange={(e) => setPassword(e.target.value)}
                required
                InputLabelProps={{ required: false }}
                InputProps={{
                  endAdornment: (
                    <InputAdornment position="end">
                      <IconButton
                        aria-label="toggle password visibility"
                        onClick={() => setShowPassword(!showPassword)}
                        onMouseDown={() => setShowPassword(!showPassword)}
                        edge="end"
                      >
                        {!showPassword ? (
                          <VisibilityOff color="primary" />
                        ) : (
                          <Visibility color="primary" />
                        )}
                      </IconButton>
                    </InputAdornment>
                  ),
                }}
              />
              <button type="submit" className="login-btn" disabled={loading}>
                {loading ? "Loading..." : "LOGIN"}
              </button>
            </form>
          </div>
        </Grid>
        <Grid
          item
          xs={12}
          md={6}
          className="login-right"
          style={{ backgroundImage: "url(/images/bg-login.jpg)" }}
        >
          <div className="logo-wrapper">
            <img src="/logo.png" alt="logo" />
          </div>
        </Grid>
      </Grid>
    </CustomBackdrop>
  );
}
