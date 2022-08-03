import * as Yup from "yup";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { Box, Button, Stack, Typography, TextField } from "@mui/material";
import { useMediaQuery } from "react-responsive";
import { FormProvider as Form } from "react-hook-form";

import "../css.css";

export default function Request() {
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
  const defaultValues = {
    name: "",
    email: "",
    message: "",
  };

  const methods = useForm({
    resolver: yupResolver(RequestSchema),
    defaultValues,
  });

  const { reset, handleSubmit } = methods;

  const onSubmit = async (data) => {
    try {
      console.log("data", data);
      reset();
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <>
      <Box className="requestBack">
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
              <Form {...methods}>
                <form onSubmit={handleSubmit(onSubmit)}>
                  <Typography className="label" mt={3}>
                    Your name
                  </Typography>
                  <TextField
                    name="name"
                    variant="outlined"
                    className="inputText"
                    placeholder="Name"
                  />
                  <Typography className="label" mt={3}>
                    Your e-mail
                  </Typography>
                  <TextField
                    name="email"
                    variant="outlined"
                    className="inputText"
                    placeholder="E-mail"
                  />
                  <Typography className="label" mt={3}>
                    Please write here your request, and we will contact you:
                  </Typography>
                  <TextField
                    name="message"
                    placeholder="Message text"
                    className="inputText"
                    multiline
                    rows={4}
                  />
                  <Box my={5} sx={{ marginLeft: "300px" }}>
                    <Button
                      variant="contained"
                      className="sendBtn"
                      type="submit"
                    >
                      Send
                    </Button>
                  </Box>
                </form>
              </Form>
            </Box>
          ) : (
            <Box className="mobileformWrap">
              <Typography className="requestText2">Send a request</Typography>
              <Form {...methods}>
                <form onSubmit={handleSubmit(onSubmit)}>
                  <Typography className="label" mt={2}>
                    Your name
                  </Typography>
                  <TextField
                    name="name"
                    variant="outlined"
                    className="inputText2"
                    placeholder="Name"
                  />
                  <Typography className="label" mt={2}>
                    Your e-mail
                  </Typography>
                  <TextField
                    name="email"
                    variant="outlined"
                    className="inputText2"
                    placeholder="E-mail"
                  />
                  <Typography className="label" mt={2}>
                    Please write here your request, and we will contact you:
                  </Typography>
                  <TextField
                    name="message"
                    placeholder="Message text"
                    className="inputText2"
                    multiline
                    rows={4}
                  />
                  <Box
                    my={5}
                    sx={{ display: "flex", justifyContent: "center" }}
                  >
                    <Button
                      variant="contained"
                      className="sendBtn2"
                      type="submit"
                    >
                      Send
                    </Button>
                  </Box>
                </form>
              </Form>
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
