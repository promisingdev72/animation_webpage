import { Box, Stack } from "@mui/material";

import "../css.css";

export default function WhatWeDoMobile() {
  return (
    <>
      <Box component="div" className="mwhatwedoBack">
        <Stack
          direction="column"
          justifyContent="center"
          alignItems="center"
          spacing={2}
        >
          <Box
            component="img"
            src="/images/mobile_gamepad.png"
            className="mobile_gamepad"
          />
          <Box px={10}>
            <Box component="p" m={0} className="whatwedotitle_mobile">
              What we do
            </Box>
            <Box component="p" m={0} className="whatwedotext_mobile">
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
        </Stack>
      </Box>
    </>
  );
}
