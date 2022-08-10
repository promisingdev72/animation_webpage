import { Box, Button, Stack, Typography, TextField } from "@mui/material";
import { LoadingButton } from "@mui/lab";
import validator from "validator";

import axios from "axios";

import { HOST_API } from "../../config";
import "../css.css";
import { useState } from "react";

export default function BannerMobile() {
  const [sent, isSent] = useState(false);
  const [contact, setContact] = useState(false);
  const [loading, setLoading] = useState(false);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMsg] = useState("");
  const [nameErrorMsg, setNameErrorMsg] = useState("");
  const [emailErrorMsg, setEmailErrorMsg] = useState("");
  const [messageErrorMsg, setMessageErrorMsg] = useState("");

  const handleSubmit = () => {
    try {
      setNameErrorMsg("");
      setEmailErrorMsg("");
      setMessageErrorMsg("");
      if (name === "") {
        setNameErrorMsg("Error: Name is required");
      } else if (email === "" || validator.isEmail(email) === false) {
        setEmailErrorMsg("Error: E-mail is incorrect");
      } else if (message === "") {
        setMessageErrorMsg("Error: Enter data.");
      } else {
        setLoading(true);
        const data = {
          name,
          email,
          message,
        };
        isSent(true);
        setLoading(false);
        // axios({
        //   url: `${HOST_API}/api/request`,
        //   method: "POST",
        //   headers: {
        //     "Content-Type": "application/json",
        //   },
        //   data: data,
        // }).then((res) => {
        //   if (res.data.sent === true) {
        //     isSent(true);
        //     setLoading(false);
        //   }
        // });
      }
    } catch (error) {
      console.error(error);
    }
  };
  return (
    <>
      {contact ? (
        <Box className="mrequestModal">
          {!sent && (
            <Box className="mformContent">
              <Box
                className="mcloseBtn"
                component="img"
                src="/images/m_closeBtn.png"
                onClick={() => {
                  setContact(false);
                }}
                my={5}
              />
              <Typography className="requestText1">Contact Us</Typography>

              <Box display="flex" justifyContent="space-between">
                <Typography className="label" mt={2} ml={2}>
                  Your Name:
                </Typography>
                <Typography className="errorMsg" mt={2}>
                  {nameErrorMsg}
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
                  Please write here your request, and we will contact you:
                </Typography>
                <Typography className="errorMsg" mt={2}>
                  {messageErrorMsg}
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
              <Box my={5} justifyContent="center" display="flex">
                <LoadingButton
                  variant="contained"
                  className="msendBtn"
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
            <Box className="mmodalWrap">
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
        <Box component="div" className="mbannerBack">
          <Button variant="contained" className="mloginBtn" href="/login">
            Log In
          </Button>
          <Stack justifyContent="center" alignItems="center" spacing={2} pt={7}>
            <Box
              component="img"
              src="/images/mobile_banner.png"
              className="mobile_banner"
            />
            <Typography className="mbannerText1">
              Game developer Company
            </Typography>
            <Box
              component="img"
              src="/images/mobile_doll.png"
              className="mobile_doll"
            />
            <Typography className="mbannerText2">
              Video games
              <Box component="p" m={0} sx={{ color: "#C63518" }}>
                developer
              </Box>
            </Typography>
            <Button
              variant="contained"
              className="mrequestBtn"
              onClick={() => {
                setContact(true);
              }}
            >
              Contact us
            </Button>
          </Stack>
        </Box>
      )}
    </>
  );
}
