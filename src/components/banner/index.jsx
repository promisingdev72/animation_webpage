import { Box, Button } from "@mui/material";

import "../css.css";
import { useMediaQuery } from "react-responsive";

export default function Banner() {
  const isMiddle = useMediaQuery({
    query: "(min-width: 1670px)",
  });
  return (
    <>
      <Box className="bannerBack">
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

        <Button variant="contained" className="requestBtn" href="/request">
          Submit your request
        </Button>
      </Box>
    </>
  );
}
