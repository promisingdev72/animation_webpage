import { Box } from "@mui/material";
// import { useState, useEffect, react } from "react";
import { useMediaQuery } from "react-responsive";

import "../../../components/css.css";

export default function Footer() {
  const isDesktop = useMediaQuery({
    query: "(min-width: 1224px)",
  });
  return (
    <>
      <Box className="footerback">
        {isDesktop && (
          <Box component="p" className="footerText">
            Copyright © 2022 Alitheia-Studios. All rights reserved.
          </Box>
        )}
        {!isDesktop && (
          <Box component="p" m={0} className="footerText2">
            Copyright © 2022 Alitheia-Studios.
            <br /> All rights reserved.
          </Box>
        )}
        {isDesktop && (
          <Box
            component="img"
            className="footerImage"
            src="/images/footerImage.png"
          />
        )}
      </Box>
    </>
  );
}
