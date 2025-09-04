import { useState } from "react";
import { Map, MapTypeControl, ZoomControl, MapMarker } from "react-kakao-maps-sdk";
import HeaderOne from "../../../layouts/headers/HeaderOne";
import Footer from "../../../layouts/footers/Footer";
import MapSearch from "./map-search";
import MapList, { MapListProps } from "./mapList";
import MapListItem, { MapPin } from "./mapListItem";

declare global {
  interface Window {
    kakao: any;
  }
}

function KakaoMap() {
  const [position, setPosition] = useState<{ lat: number; lng: number } | null>(null);
  const [mapObj, setMapObj] = useState<any>(null);

  // 맛집 리스트 관리
  const [lists, setLists] = useState<string[]>(["맛집1", "맛집2"]);
  const [selectedList, setSelectedList] = useState<string>("지도보기");

  // 맵핀 즐겨찾기
  const [pins, setPins] = useState<MapPin[]>([]);

  // 장소 선택 시 마커 표시
  const handleSelectPlace = (place: any) => {
    const newPos = { lat: parseFloat(place.y), lng: parseFloat(place.x) };
    setPosition(newPos);
    if (mapObj) {
      mapObj.setCenter(new window.kakao.maps.LatLng(newPos.lat, newPos.lng));
    }
  };

  // 새 리스트 추가
  const handleAddList = (name: string) => {
    if (lists.length >= 7) {
      alert("맛집 리스트는 최대 7개까지 만들 수 있습니다.");
      return;
    }
    setLists([...lists, name]);
  };

  // 맵핀 삭제
  const handleRemovePin = (id: string) => {
    setPins(pins.filter(p => p.id !== id));
  };

  // 맵핀 리스트 이동
  const handleMovePin = (id: string, newList: string) => {
    setPins(pins.map(p => p.id === id ? { ...p, list: newList } : p));
  };

  return (
    <>
      <main className="home">
        <HeaderOne />

        {/* ✅ 지도와 리스트 드롭다운을 감싸는 영역 (드롭다운 위치 기준을 맞추기 위해 position: relative 적용) */}
        <div  className="kakaomap-map-wrapper">
          {/* 맛집 리스트 드롭다운 - 지도 위 중앙 */}
          <MapList
            lists={lists}
            selectedList={selectedList}
            onChange={setSelectedList}
            onAddList={handleAddList}
          />

          {/* 지도 */}
          <Map
            center={{ lat: 37.4979, lng: 127.0276 }}
            style={{ width: "100%", height: "680px" }}
            level={4}
            onCreate={(map) => setMapObj(map)}
            onTileLoaded={(map) =>
              setPosition({
                lat: map.getCenter().getLat(),
                lng: map.getCenter().getLng(),
              })
            }
          >
            <MapTypeControl position={"TOPRIGHT"} />
            <ZoomControl position={"RIGHT"} />

            {/* 선택된 위치 마커 */}
            {!!position && <MapMarker position={position} />}

            {/* 선택한 리스트에 따른 즐겨찾기 맵핀 표시 */}
            {pins
              .filter(pin => selectedList === "지도보기" || pin.list === selectedList)
              .map(pin => (
                <MapMarker key={pin.id} position={pin.position} />
              ))}
          </Map>
        </div>

        {/* 검색창 - 지도 아래 */}
        <div style={{ marginTop: "10px" }}>
          <MapSearch mapObj={mapObj} onSelectPlace={handleSelectPlace} />
        </div>

        {/* 즐겨찾기 맵핀 리스트 */}
        <div style={{ marginTop: "10px" }}>
          {pins
            .filter(pin => selectedList === "지도보기" || pin.list === selectedList)
            .map(pin => (
              <MapListItem
                key={pin.id}
                pin={pin}
                onRemove={handleRemovePin}
                onMoveList={handleMovePin}
                availableLists={lists}
              />
            ))}
        </div>
      </main>
      <Footer />
    </>
  );
}

export default KakaoMap;
