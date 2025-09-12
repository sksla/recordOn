import React from "react";
import { MapMarker } from "react-kakao-maps-sdk";
import { MapPin } from "../../../types/map";

interface InfoWindowProps {
  position: { lat: number; lng: number };  // 인포윈도우 위치
  pin: MapPin;                            // 핀 정보 (이름, 주소, 전화번호 등)
  onClose: () => void;                    // 닫기 버튼 클릭 핸들러
  isFavorited: boolean;                   // 즐겨찾기 등록 여부
  onToggleFavorite: () => void;           // 하트 클릭 시 핸들러
}

const InfoWindow: React.FC<InfoWindowProps> = ({ position, pin, onClose, isFavorited, onToggleFavorite }) => {
  return (
    <MapMarker position={position}>
      {/* 인포윈도우 컨테이너 스타일은 css로 정의해 주세요 */}
      <div className="kakaomap-infowindow">
        {/* 닫기 버튼 */}
        <button className="kakaomap-infowindow-close" onClick={onClose}>
          ✕
        </button>

        {/* 인포윈도우 내용 */}
        <div className="kakaomap-infowindow-content">
          <div className="kakaomap-place-name">{pin.name}</div>
          {pin.address && <div className="kakaomap-address">{pin.address}</div>}
          {pin.phone && <div className="kakaomap-phone">{pin.phone}</div>}

          {/* 하트 아이콘: 빈 하트 또는 꽉찬 하트 표시 */}
          <button
            onClick={(e) => {
              e.stopPropagation(); // 클릭 이벤트가 MapMarker에 전달되는 걸 막음
              onToggleFavorite();
            }}
            className="kakaomap-favorite-button"
            aria-label={isFavorited ? "즐겨찾기 해제" : "즐겨찾기 추가"}
          >
            {isFavorited ? "❤️" : "🤍"}
          </button>
        </div>
      </div>
    </MapMarker>
  );
};

export default InfoWindow;
