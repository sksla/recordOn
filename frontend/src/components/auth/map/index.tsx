import { Map, MapTypeControl, ZoomControl, MapMarker } from 'react-kakao-maps-sdk';
// import { Swiper, SwiperSlide } from "swiper/react";
import { useState } from 'react';
import HeaderOne from "../../../layouts/headers/HeaderOne";
import Footer from "../../../layouts/footers/Footer";


declare global {
  interface Window {
    kakao: any;
  }
}

function KakaoMap(){
  const KakaoMain = () => {
    const [position, setPosition] = useState()
    return (
      <>
        <main className="home">
          <HeaderOne />
          <Map
            center={{ lat: 37.4979, lng: 127.0276 }}	
            style={{ width: '100%', height: '700px' }} // px로 지정
            level={4} // 확대 레벨 (1이 가장 확대)
            onTileLoaded={(map) => setPosition({
              lat: map.getCenter().getLat(),
              lng: map.getCenter().getLng(),
            })}
          >
            <MapTypeControl position={"TOPRIGHT"} />
            <ZoomControl position={"RIGHT"} />
            {!!position && <MapMarker position={position} />}
            
          </Map>
        </main>
        <Footer />
      </>
    );
  };

  return (<KakaoMain/>)
}

export default KakaoMap;