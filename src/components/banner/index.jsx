import { Box, Button, Stack, Typography, TextField } from "@mui/material";
import { LoadingButton } from "@mui/lab";

import axios from "axios";
import { useMediaQuery } from "react-responsive";

import { HOST_API } from "../../config";
import "../css.css";
import { useState } from "react";

export default function Banner() {
  const [sent, isSent] = useState(false);
  const [contact, setContact] = useState(false);
  const [loading, setLoading] = useState(false);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMsg] = useState("");

  const isDesktop = useMediaQuery({
    query: "(min-width: 1224px)",
  });
  const isMiddle = useMediaQuery({
    query: "(min-width: 1670px)",
  });

  const handleSubmit = () => {
    try {
      setLoading(true);
      const data = {
        name,
        email,
        message,
      };
      axios({
        url: `${HOST_API}/api/request`,
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        data: data,
      }).then((res) => {
        if (res.data.sent === true) {
          isSent(true);
          setLoading(false);
        }
      });
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <>
      <Box className="bannerBack">
        {contact && (
          <Box className="requestModal">
            <Stack direction="column">
              {isDesktop ? (
                <Box className="formWrap">
                  {!sent && (
                    <Box className="formContent">
                      <Box display="flex" justifyContent="space-between">
                        <Typography className="requestText1">
                          Contact Us
                        </Typography>
                        <Box
                          component="img"
                          src="/images/closeBtn.png"
                          onClick={() => {
                            setContact(false);
                          }}
                        />
                      </Box>
                      <Box display="flex" justifyContent="space-between">
                        <Typography className="label" mt={2} ml={2}>
                          Your Name:
                        </Typography>
                        <Typography className="errorMsg" mt={2}>
                          Error: Name is required.
                        </Typography>
                      </Box>
                      <TextField
                        variant="outlined"
                        className="inputText"
                        placeholder="Name"
                        onChange={(e) => {
                          setName(e.target.value);
                        }}
                      />
                      <Box display="flex" justifyContent="space-between">
                        <Typography className="label" mt={2} ml={2}>
                          Your e-mail:
                        </Typography>
                        <Typography className="errorMsg" mt={2}>
                          Error: Email is required.
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
                          Please write here your request, and we will contact
                          you:
                        </Typography>
                        <Typography className="errorMsg" mt={2}>
                          Error: Enter Data.
                        </Typography>
                      </Box>
                      <TextField
                        placeholder="Message text"
                        className="inputText"
                        multiline
                        rows={4}
                        onChange={(e) => {
                          setMsg(e.target.value);
                        }}
                      />
                      <Box my={5} display="flex" justifyContent="center">
                        <LoadingButton
                          variant="contained"
                          className="sendBtn"
                          onClick={() => {
                            handleSubmit();
                          }}
                          loading={loading}
                        >
                          Send
                        </LoadingButton>
                      </Box>
                    </Box>
                  )}

                  {sent && (
                    <Box className="modalWrap">
                      <Typography mb={3} className="modalText">
                        Your request has been sent
                      </Typography>
                      <Button
                        variant="contained"
                        className="okBtn"
                        onClick={() => {
                          isSent(false);
                          setContact(false);
                        }}
                      >
                        Ok
                      </Button>
                    </Box>
                  )}
                </Box>
              ) : (
                <Box className="mobileformWrap">
                  <Typography className="requestText2">Contact Us</Typography>
                  <Typography className="label" mt={2} ml={2}>
                    Your name
                  </Typography>
                  <TextField
                    variant="outlined"
                    className="inputText2"
                    placeholder="Name"
                    onChange={(e) => {
                      setName(e.target.value);
                    }}
                  />
                  <Typography className="label" mt={2} ml={2}>
                    Your e-mail
                  </Typography>
                  <TextField
                    variant="outlined"
                    className="inputText2"
                    placeholder="E-mail"
                    onChange={(e) => {
                      setEmail(e.target.value);
                    }}
                  />
                  <Typography className="label" mt={2} ml={2}>
                    Please write here your request, and we will contact you:
                  </Typography>
                  <TextField
                    placeholder="Message text"
                    className="inputText2"
                    multiline
                    rows={4}
                    onChange={(e) => {
                      setMsg(e.target.value);
                    }}
                  />
                  <Box
                    my={5}
                    sx={{ display: "flex", justifyContent: "center" }}
                  >
                    <LoadingButton
                      variant="contained"
                      className="sendBtn2"
                      loading={loading}
                      onClick={() => {
                        handleSubmit();
                      }}
                    >
                      Send
                    </LoadingButton>
                  </Box>
                </Box>
              )}
            </Stack>
          </Box>
        )}

        <Button variant="contained" className="loginBtn" href="/login">
          Log In
        </Button>
        <Box component="img" className="logo" src="/images/logo.png" />
        <Box component="img" className="unhome" src="/images/unhome.png" />
        <Box component="div" className="pillar1" />
        <Box component="div" className="pillar2" />
        <Box
          component="img"
          className="horizontal_lines"
          src="/images/horizontal_lines.png"
        />
        <Box component="div" className="banner_text">
          <Box component="p" m={0} className="banner_text1">
            Video games
          </Box>
          <Box component="p" m={0} className="banner_text2">
            developer
          </Box>
        </Box>
        <Box component="p" m={0} className="banner_text3">
          Game developer Company
        </Box>
        <Box component="img" className="lines" src="/images/lines.png" />
        {isMiddle ? (
          <Box component="img" className="doll" src="/images/doll.png" />
        ) : (
          <Box component="img" className="doll1" src="/images/doll.png" />
        )}

        <Button
          variant="contained"
          className="requestBtn"
          onClick={() => {
            setContact(true);
          }}
        >
          Contact us
        </Button>
      </Box>
    </>
  );
}
