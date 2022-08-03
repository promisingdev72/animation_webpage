import { Box, Button, Stack, Typography } from "@mui/material";

import "../css.css";

export default function BannerMobile() {
  return (
    <>
      <Box component="div" className="mbannerBack">
        <Stack justifyContent="center" alignItems="center" spacing={2} pt={7}>
          <Box
            component="img"
            src="/images/mobile_banner.png"
            className="mobile_banner"
          />
          <Typography className="mbannerText1">
            Game developer Company
          </Typography>
          <Box
            component="img"
            src="/images/mobile_doll.png"
            className="mobile_doll"
          />
          <Typography className="mbannerText2">
            Video games{" "}
            <Box component="p" m={0} sx={{ color: "#C63518" }}>
              developer
            </Box>
          </Typography>
          <Button variant="contained" className="mrequestBtn" href="/request">
            Submit your request
          </Button>
        </Stack>
      </Box>
    </>
  );
}
