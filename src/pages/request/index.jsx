import Request from "../../components/request";
import RequestMobile from "../../components/requestmobile";

import { useMediaQuery } from "react-responsive";

const RequestPage = () => {
  const isDesktop = useMediaQuery({
    query: "(min-width: 1224px)",
  });
  return (
    <>
      {isDesktop ? (
        <>
          <Request />
        </>
      ) : (
        <>
          <RequestMobile />
        </>
      )}
    </>
  );
};

export default RequestPage;
