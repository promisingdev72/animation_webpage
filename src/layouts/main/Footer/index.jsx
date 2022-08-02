import { Box } from "@mui/material";
import * as React from "react";

import "../../../components/css.css";

export default function Footer() {
  return (
    <>
      <Box className="footerback">
        <Box component="p" m={0} className="footerText">
          Copyright © 2022 Alitheia-Studios. All rights reserved.
        </Box>
        <Box
          component="img"
          className="footerImage"
          src="/images/footerImage.png"
        />
      </Box>
    </>
  );
}
