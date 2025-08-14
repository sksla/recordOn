import { useEffect, useState } from "react";
import { Map, MapMarker } from "react-kakao-maps-sdk";
import ScrollTop from "../../common/ScrollTop";
import HeaderOne from "../../../layouts/headers/HeaderOne";
import Footer from "../../../layouts/footers/Footer";
import ServiceModal from "../../../modals/ServiceModal";

const KakaoMapPage = () => {
  const [loaded, setLoaded] = useState(false);
  const [showModal, setShowModal] = useState(false);

  useEffect(() => {
    console.log("useEffect 시작");
    console.log("env key:", import.meta.env.VITE_KAKAO_MAP_KEY);

    // 스크립트 중복 생성 방지용
    const scriptExists = !!document.querySelector('script[data-kakao-sdk]');
    if (!scriptExists) {
      const script = document.createElement("script");
      script.src = `https://dapi.kakao.com/v2/maps/sdk.js?appkey=${import.meta.env.VITE_KAKAO_MAP_KEY}&autoload=false&libraries=services,clusterer`;
      script.setAttribute("data-kakao-sdk", "true");
      script.async = true;

      script.onload = () => {
        console.log("스크립트 로드됨");
        console.log("window.kakao (스크립트로드 후):", window.kakao);
        if (window.kakao && window.kakao.maps) {
          window.kakao.maps.load(() => {
            console.log("kakao.maps.load 완료");
            setLoaded(true);
          });
        } else {
          console.warn("window.kakao.maps가 아직 준비되지 않았습니다.");
        }
      };

      script.onerror = () => {
        console.error("카카오 지도 SDK 스크립트 로드 실패");
      };

      document.head.appendChild(script);
    } else {
      console.log("이미 스크립트가 존재함, 바로 loaded 상태 체크");

      if (window.kakao && window.kakao.maps) {
        window.kakao.maps.load(() => {
          console.log("기존 스크립트 kakao.maps.load 완료");
          setLoaded(true);
        });
      } else {
        console.warn("기존 스크립트 window.kakao.maps가 아직 준비되지 않았습니다.");
      }
    }

    return () => {
      console.log("cleanup 호출");
      // 스크립트 삭제는 하지 않는 게 안전함 (다른 페이지에서 필요할 수 있음)
      // document.head.removeChild(script);
    };
  }, []);

  console.log("loaded 상태:", loaded);
  console.log("window.kakao 현재값:", window.kakao);

  return (
    <>
      <ScrollTop />
      <main className="home">
        <HeaderOne />
        <div style={{ width: "100%", height: "70vh" }}>
          {loaded ? (
            <Map
              center={{ lat: 37.5665, lng: 126.978 }}
              style={{ width: "100%", height: "100%" }}
              level={3}
            >
              <MapMarker position={{ lat: 37.5665, lng: 126.978 }}>
                <div>서울시청</div>
              </MapMarker>
            </Map>
          ) : (
            <div>지도 로딩 중...</div>
          )}
        </div>
      </main>
      <Footer />
      <ServiceModal showModal={showModal} setShowModal={setShowModal} />
    </>
  );
};

export default KakaoMapPage;
