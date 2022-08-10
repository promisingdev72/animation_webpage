import { Box, Button, Stack, Typography, TextField } from "@mui/material";
import { LoadingButton } from "@mui/lab";

import { useMediaQuery } from "react-responsive";

import "../css.css";
import { useState } from "react";

export default function Request() {
  const [loading, setLoading] = useState(false);

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

              <Typography className="label" mt={2} ml={2}>
                Login:
              </Typography>
              <TextField
                variant="outlined"
                className="inputText"
                placeholder="E-mail"
              />
              <Typography className="label" mt={2} ml={2}>
                Password
              </Typography>
              <TextField
                variant="outlined"
                className="inputText"
                placeholder="Password"
                type="password"
              />
              <Box my={5} sx={{ marginLeft: "300px" }}>
                <LoadingButton
                  variant="contained"
                  className="sendBtn"
                  type="submit"
                  loading={loading}
                >
                  Login
                </LoadingButton>
              </Box>
            </Box>
          ) : (
            <Box className="mobileformWrap">
              <Typography className="requestText2">Log-in</Typography>
              <Typography className="label" mt={2} ml={2}>
                Login:
              </Typography>
              <TextField
                variant="outlined"
                className="inputText2"
                placeholder="E-mail"
              />
              <Typography className="label" mt={2} ml={2}>
                Password
              </Typography>
              <TextField
                variant="outlined"
                className="inputText2"
                placeholder="Password"
                type="password"
              />
              <Box my={5} sx={{ display: "flex", justifyContent: "center" }}>
                <LoadingButton
                  variant="contained"
                  className="sendBtn2"
                  type="submit"
                  loading={loading}
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
