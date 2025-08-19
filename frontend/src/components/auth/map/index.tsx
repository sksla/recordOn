import { Map } from 'react-kakao-maps-sdk';
// import { Swiper, SwiperSlide } from "swiper/react";
import HeaderOne from "../../../layouts/headers/HeaderOne";
import Footer from "../../../layouts/footers/Footer";


declare global {
  interface Window {
    kakao: any;
  }
}

const KakaoMap = () => {
  return (
    <>
  
      <main className="home">
        <HeaderOne />
        <Map
          center={{ lat: 37.525121, lng: 126.96339 }}
          style={{ width: '100%', height: '700px' }} // px로 지정
        >
        </Map>
      </main>

      <Footer />

    
		</>
  );
};

export default KakaoMap;