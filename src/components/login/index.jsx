import { Box, Stack, Typography, TextField } from "@mui/material";
import { LoadingButton } from "@mui/lab";
import validator from "validator";

import { useMediaQuery } from "react-responsive";

import "../css.css";
import { useState } from "react";

export default function Request() {
  const [loading, setLoading] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [emailErrorMsg, setEmailErrorMsg] = useState("");
  const [passwordErrorMsg, setPasswordErrorMsg] = useState("");

  const handleSubmit = () => {
    try {
      setEmailErrorMsg("");
      setPasswordErrorMsg("");
      if (email === "" || validator.isEmail(email) === false) {
        setEmailErrorMsg("Error: Login is incorrect.");
      } else if (password === "") {
        setPasswordErrorMsg("Error: Password is Incorrect.");
      } else {
        setEmailErrorMsg("Login unknown");
        setLoading(true);
        const data = {
          email,
          password,
        };
        setLoading(false);
      }
    } catch (error) {
      console.error(error);
    }
  };

  const isDesktop = useMediaQuery({
    query: "(min-width: 1224px)",
  });

  return (
    <>
      <Box className="loginBack">
        <Stack direction="column">
          {isDesktop ? (
            <Box className="logoWrap">
              <Box
                component="img"
                src="/images/request_logo.png"
                className="requestLogo"
              />
            </Box>
          ) : (
            <Box className="logoWrapmobile">
              <Box
                component="img"
                src="/images/requestmobile_logo.png"
                className="requestmobileLogo"
              />
            </Box>
          )}
          {isDesktop ? (
            <Box className="formWrap">
              <Typography className="requestText1">Log-in</Typography>
              <Box display="flex" justifyContent="space-between">
                <Typography className="label" mt={2} ml={2}>
                  Login:
                </Typography>
                <Typography className="errorMsg" mt={2}>
                  {emailErrorMsg}
                </Typography>
              </Box>
              <TextField
                variant="outlined"
                className="inputText"
                placeholder="E-mail"
                onChange={(e) => {
                  setEmail(e.target.value);
                }}
              />
              <Box display="flex" justifyContent="space-between">
                <Typography className="label" mt={2} ml={2}>
                  Password
                </Typography>
                <Typography className="errorMsg" mt={2}>
                  {passwordErrorMsg}
                </Typography>
              </Box>
              <TextField
                variant="outlined"
                className="inputText"
                placeholder="Password"
                type="password"
                onChange={(e) => {
                  setPassword(e.target.value);
                }}
              />
              <Box my={5} sx={{ marginLeft: "300px" }}>
                <LoadingButton
                  variant="contained"
                  className="sendBtn"
                  type="submit"
                  loading={loading}
                  onClick={() => {
                    handleSubmit();
                  }}
                >
                  Login
                </LoadingButton>
              </Box>
            </Box>
          ) : (
            <Box className="mobileformWrap">
              <Typography className="requestText2">Log-in</Typography>
              <Box display="flex" justifyContent="space-between">
                <Typography className="label" mt={2} ml={2}>
                  Login:
                </Typography>
                <Typography className="errorMsg" mt={2}>
                  {emailErrorMsg}
                </Typography>
              </Box>
              <TextField
                variant="outlined"
                className="inputText2"
                placeholder="E-mail"
                onChange={(e) => {
                  setEmail(e.target.value);
                }}
              />
              <Box display="flex" justifyContent="space-between">
                <Typography className="label" mt={2} ml={2}>
                  Password
                </Typography>
                <Typography className="errorMsg" mt={2}>
                  {passwordErrorMsg}
                </Typography>
              </Box>
              <TextField
                variant="outlined"
                className="inputText2"
                placeholder="Password"
                type="password"
                onChange={(e) => {
                  setPassword(e.target.value);
                }}
              />
              <Box my={5} sx={{ display: "flex", justifyContent: "center" }}>
                <LoadingButton
                  variant="contained"
                  className="sendBtn2"
                  type="submit"
                  loading={loading}
                  onClick={() => {
                    handleSubmit();
                  }}
                >
                  Login
                </LoadingButton>
              </Box>
            </Box>
          )}
        </Stack>
        {isDesktop && (
          <Box
            component="img"
            src="/images/loginback.png"
            className="loginImg"
          />
        )}
      </Box>
    </>
  );
}
