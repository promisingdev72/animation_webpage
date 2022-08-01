import { Box } from "@mui/material";
import * as React from "react";

import "../css.css";

export default function Banner() {
  return (
    <>
      <Box className="bannerBack">
        <Box component="img" className="logo" src="/logo.png" />
        <Box component="img" className="unhome" src="/unhome.png" />
        <Box component="div" className="pillar1" />
        <Box component="div" className="pillar2" />
      </Box>
    </>
  );
}
