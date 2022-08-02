import { Box } from "@mui/material";
import * as React from "react";

import "../css.css";

export default function Banner() {
  return (
    <>
      <Box className="bannerBack">
        <Box component="img" className="logo" src="/logo.png" />
        <Box component="img" className="unhome" src="/unhome1.png" />
        <Box component="div" className="pillar1" />
        <Box component="div" className="pillar2" />
        <Box
          component="img"
          className="horizontal_lines"
          src="/horizontal_lines.png"
        />
        <Box component="p" className="banner_text1">
          Video games
        </Box>
      </Box>
    </>
  );
}
