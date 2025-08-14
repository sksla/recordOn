import { Map as KakaoMap, MapMarker } from "react-kakao-maps-sdk";

const Map = () => {
  return (
    <div style={{ width: "100%", height: "100vh" }}>
      <KakaoMap
        center={{ lat: 37.5665, lng: 126.978 }} // 서울 시청 위치
        level={3}
        style={{ width: "100%", height: "100%" }}
      >
        <MapMarker
          position={{ lat: 37.5665, lng: 126.978 }}
          title="서울시청"
        />
      </KakaoMap>
    </div>
  );
};

export default Map;