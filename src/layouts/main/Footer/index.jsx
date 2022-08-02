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
        <Box
          component="p"
          m={0}
          className={isDesktop ? "footerText" : "footerText2"}
        >
          {isDesktop
            ? "Copyright © 2022 Alitheia-Studios. All rights reserved."
            : "Copyright © 2022 Alitheia-Studios. All rights reserved."}
        </Box>
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
