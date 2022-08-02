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
        {/* <Box component="img" className="lines" src="/lines.png" />
        <Box component="img" className="doll" src="/doll.png" /> */}
      </Box>
    </>
  );
}
