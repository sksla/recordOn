import React from "react";
import { MapPin } from "../../../types/map";

interface InfoWindowProps {
  pin: MapPin;
  onClose: () => void;
  isFavorited: boolean;
  onToggleFavorite: () => void;
}

const InfoWindow = ({
  pin,
  onClose,
  isFavorited,
  onToggleFavorite,
}: InfoWindowProps) => {
  return (
    // MapMarker의 자식으로 직접 렌더링되는 방식
    <div className="kakaomap-infowindow">
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
            onToggleFavorite(); // 하트 클릭 시 즐겨찾기 토글
          }}
          className="kakaomap-favorite-button"
          aria-label={isFavorited ? "즐겨찾기 해제" : "즐겨찾기 추가"}
        >
          {isFavorited ? "❤️" : "🤍"}
        </button>

        {/* 즐겨찾기된 경우 리스트 이름 표시 */}
        {isFavorited && (
          <div className="kakaomap-favorited-list">
            리스트 이름: {pin.list}
          </div>
        )}
      </div>
    </div>
  );
};

export default InfoWindow;