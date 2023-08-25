import Script from 'next/script';

type Props = {
  onLoad?: () => void;
};

const Map = ({ onload }) => {
  return (
    <>
      <Script
        strategy="afterInteractive"
        type="text/javascript"
        src={`https://openapi.map.naver.com/openapi/v3/maps.js?ncpClientId=${process.env.NEXT_PUBLIC_NCP_CLIENT_ID}`}
      />
    </>
  );
};

export default Map;
