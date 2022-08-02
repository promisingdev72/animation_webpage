import { Box } from "@mui/material";
import { useState, useEffect } from "react";

import "../css.css";

export default function WhatWeDo() {
  const [scrollPosition, setScrollPosition] = useState(0);
  const [lineforpad, setLineforpad] = useState("none");
  const [gamepadImg, setGamepadImg] = useState("none");
  const [whatwedoimg1, setWhatwedoimg1] = useState("none");
  const [whatwedoimg2, setWhatwedoimg2] = useState("none");

  const handleScroll = () => {
    const position = window.pageYOffset;
    setScrollPosition(position);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  useEffect(() => {
    if (scrollPosition === 1000) {
      setGamepadImg("gamepadImg");
      setLineforpad("lineforpad");
      setWhatwedoimg1("whatwedoimg1");
      setWhatwedoimg2("whatwedoimg2");
    }
  }, [scrollPosition]);
  return (
    <>
      <Box className="whatwedoBack">
        <Box
          component="img"
          className={lineforpad}
          src="/images/lineforpad.png"
        />

        <Box component="img" className={gamepadImg} src="/images/gamepad.png" />
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
          src="/images/unwhatwedo1.png"
          className={whatwedoimg1}
        />
        <Box
          component="img"
          src="/images/unwhatwedo2.png"
          className={whatwedoimg2}
        />
      </Box>
    </>
  );
}
