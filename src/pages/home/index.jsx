import Banner from "../../components/banner";
import WhatWeDo from "../../components/whatwedo";
import WhoWeAre from "../../components/whoweare";
import BannerMobile from "../../components/bannermobile";
import WhoWeAreMobile from "../../components/whowearemobile";
import WhatWeDoMobile from "../../components/whatwedomobile";
import { useMediaQuery } from "react-responsive";

const HomePage = () => {
  const isDesktop = useMediaQuery({
    query: "(min-width: 1224px)",
  });
  return (
    <>
      {isDesktop ? (
        <>
          <Banner />
          <WhoWeAre />
          <WhatWeDo />
        </>
      ) : (
        <>
          <BannerMobile />
          <WhoWeAreMobile />
          <WhatWeDoMobile />
        </>
      )}
    </>
  );
};

export default HomePage;
