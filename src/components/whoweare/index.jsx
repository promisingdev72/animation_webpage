import { Box } from "@mui/material";
import * as React from "react";

import "../css.css";

export default function WhoWeAre() {
  return (
    <>
      <Box className="whoareweBack">
        <Box className="whoarewe_wrap">
          <Box component="p" m={0} className="whoweare_title">
            who we are
          </Box>
          <Box component="p" m={0} className="whoweare_text">
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
        <Box
          component="img"
          src="/images/whoweare.png"
          className="whoweareimg"
        />
      </Box>
    </>
  );
}
