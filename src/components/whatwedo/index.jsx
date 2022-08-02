import { Box } from "@mui/material";
import * as React from "react";

import "../css.css";

export default function WhatWeDo() {
  return (
    <>
      <Box className="whatwedoBack">
        <Box
          component="img"
          className="lineforpad"
          src="/images/lineforpad.png"
        />

        <Box component="img" className="gamepadImg" src="/images/gamepad.png" />
        <Box className="whatwedo_wrap">
          <Box component="p" m={0} className="whatwedo_title">
            What we do
          </Box>
          <Box component="p" m={0} className="whatwedo_text">
            - Establish game development <br />
            - Determine distribution strategies
            <br />
            - Assess business models and making proposals for improvement
            <br />
            - Find talents in all parts of the video-game industry, from game
            designer to developer and community managers
            <br />- Find investors, and maintain relationships with them
          </Box>
        </Box>
        <Box
          component="img"
          src="/images/whatwedo.png"
          className="whatwedoimg"
        />
      </Box>
    </>
  );
}
