import * as Yup from "yup";
import { Box, Button, Stack, Typography, TextField } from "@mui/material";
import { LoadingButton } from "@mui/lab";

import axios from "axios";
import { useMediaQuery } from "react-responsive";
import { useFormik, Form, FormikProvider } from "formik";

import { HOST_API } from "../../config";
import "../css.css";
import { useState } from "react";

export default function Request() {
  const [sent, isSent] = useState(false);
  const [loading, setLoading] = useState(false);

  const isDesktop = useMediaQuery({
    query: "(min-width: 1224px)",
  });
  const RequestSchema = Yup.object().shape({
    name: Yup.string().required("Name is required"),
    email: Yup.string()
      .email("Email must be a valid email address")
      .required("Email is required"),
    message: Yup.string().required("Message is required"),
  });

  const formik = useFormik({
    initialValues: {
      email: "",
      name: "",
      message: "",
    },
    validationSchema: RequestSchema,
    onSubmit: async (values, { setErrors, setSubmitting, resetForm }) => {
      try {
        setLoading(true);
        axios({
          url: `${HOST_API}/api/request`,
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          data: values,
        }).then((res) => {
          if (res.data.sent === true) {
            isSent(true);
            setLoading(false);
          }
        });
        // resetForm();
      } catch (error) {
        console.error(error);
      }
    },
  });

  const { errors, touched, handleSubmit, getFieldProps } = formik;

  return (
    <>
      <Box className="requestBack">
        {sent && (
          <Box className="requestModal">
            <Box className="modalWrap">
              <Typography mb={3} className="modalText">
                Your request has been sent
              </Typography>
              <Button
                variant="contained"
                className="okBtn"
                onClick={() => {
                  isSent(false);
                }}
              >
                Ok
              </Button>
            </Box>
          </Box>
        )}
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
              <Typography className="requestText1">Send a request</Typography>
              <FormikProvider value={formik}>
                <Form autoComplete="off" noValidate onSubmit={handleSubmit}>
                  <Typography className="label" mt={2} ml={2}>
                    Your name
                  </Typography>
                  <TextField
                    {...getFieldProps("name")}
                    variant="outlined"
                    className="inputText"
                    placeholder="Name"
                    error={Boolean(touched.name && errors.name)}
                    helperText={touched.name && errors.name}
                  />
                  <Typography className="label" mt={2} ml={2}>
                    Your e-mail
                  </Typography>
                  <TextField
                    {...getFieldProps("email")}
                    variant="outlined"
                    className="inputText"
                    placeholder="E-mail"
                    error={Boolean(touched.email && errors.email)}
                    helperText={touched.email && errors.email}
                  />
                  <Typography className="label" mt={2} ml={2}>
                    Please write here your request, and we will contact you:
                  </Typography>
                  <TextField
                    {...getFieldProps("message")}
                    placeholder="Message text"
                    className="inputText"
                    multiline
                    rows={4}
                    error={Boolean(touched.message && errors.message)}
                    helperText={touched.message && errors.message}
                  />
                  <Box my={5} sx={{ marginLeft: "300px" }}>
                    <LoadingButton
                      variant="contained"
                      className="sendBtn"
                      type="submit"
                      loading={loading}
                    >
                      Send
                    </LoadingButton>
                  </Box>
                </Form>
              </FormikProvider>
            </Box>
          ) : (
            <Box className="mobileformWrap">
              <Typography className="requestText2">Send a request</Typography>
              <FormikProvider value={formik}>
                <Form autoComplete="off" noValidate onSubmit={handleSubmit}>
                  <Typography className="label" mt={2} ml={2}>
                    Your name
                  </Typography>
                  <TextField
                    {...getFieldProps("name")}
                    variant="outlined"
                    className="inputText2"
                    placeholder="Name"
                    error={Boolean(touched.name && errors.name)}
                    helperText={touched.name && errors.name}
                  />
                  <Typography className="label" mt={2} ml={2}>
                    Your e-mail
                  </Typography>
                  <TextField
                    {...getFieldProps("email")}
                    variant="outlined"
                    className="inputText2"
                    placeholder="E-mail"
                    error={Boolean(touched.email && errors.email)}
                    helperText={touched.email && errors.email}
                  />
                  <Typography className="label" mt={2} ml={2}>
                    Please write here your request, and we will contact you:
                  </Typography>
                  <TextField
                    {...getFieldProps("message")}
                    placeholder="Message text"
                    className="inputText2"
                    multiline
                    rows={4}
                    error={Boolean(touched.message && errors.message)}
                    helperText={touched.message && errors.message}
                  />
                  <Box
                    my={5}
                    sx={{ display: "flex", justifyContent: "center" }}
                  >
                    <LoadingButton
                      variant="contained"
                      className="sendBtn2"
                      type="submit"
                      loading={loading}
                    >
                      Send
                    </LoadingButton>
                  </Box>
                </Form>
              </FormikProvider>
            </Box>
          )}
        </Stack>
        {isDesktop && (
          <Box
            component="img"
            src="/images/requestback.png"
            className="requestImg"
          />
        )}
      </Box>
    </>
  );
}
