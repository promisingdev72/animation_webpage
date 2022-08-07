import { Box, Stack } from "@mui/material";
// import { react, useEffect, useState } from "react";

import "../css.css";

export default function WhoWeAreMobile() {
  return (
    <>
      <Box component="div" className="mwhoweareBack">
        <Stack
          direction="row"
          justifyContent="center"
          alignItems="center"
          spacing={2}
          pt={7}
        >
          <Box pl={4}>
            <Box component="p" m={0} className="whowearetitle_mobile">
              Who we are
            </Box>
            <Box component="p" m={0} className="whowearetext_mobile">
              Alitheia-Studios provides expert advices on corporate decisions in
              the video game industry.
              <br /> We are a group of highly experienced video-game developers,
              who decided to work as consultant and provide our expertise to
              junior companies.
              <br /> Our expertise lies in the technical side (development, game
              design, distribution, etc.), but also on the corporate side
              (business plans, investors).
            </Box>
          </Box>
          <Box component="img" src="/images/mobile_home.png" />
        </Stack>
      </Box>
    </>
  );
}
