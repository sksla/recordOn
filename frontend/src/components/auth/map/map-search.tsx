import { useState, useRef, useEffect } from "react";
import { Place } from "../../../types/map";

declare global {
  interface Window {
    kakao: any;
  }
}

type MapSearchProps = {
  mapObj: any;
  onSelectPlace: (place: Place) => void;
};

function MapSearch({ mapObj, onSelectPlace }: MapSearchProps) {
  const [keyword, setKeyword] = useState<string>("");
  const [places, setPlaces] = useState<Place[]>([]);
  const [showList, setShowList] = useState<boolean>(false);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (containerRef.current && !containerRef.current.contains(e.target as Node)) {
        setShowList(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const handleSearch = () => {
    if (!window.kakao || !window.kakao.maps) return;
    if (!keyword.trim()) return;

    const ps = new window.kakao.maps.services.Places();
    const center = mapObj.getCenter();
    const centerLat = center.getLat();
    const centerLng = center.getLng();

    ps.keywordSearch(keyword, (data: any, status: any) => {
      if (status === window.kakao.maps.services.Status.OK) {
        const sorted = data
          .map((place: any) => {
            const distance = Math.sqrt(
              Math.pow(parseFloat(place.y) - centerLat, 2) +
                Math.pow(parseFloat(place.x) - centerLng, 2)
            );
            return { ...place, distance };
          })
          .sort((a: any, b: any) => a.distance - b.distance)
          .slice(0, 20);

        setPlaces(sorted);
        setShowList(true);
        if (sorted.length > 0) onSelectPlace(sorted[0]);
      } else {
        setPlaces([]);
        setShowList(false);
        alert("검색 결과가 없습니다.");
      }
    });
  };

  const handleSelect = (place: Place) => {
    onSelectPlace(place);
    setShowList(false);
  };

  return (
    <div ref={containerRef} className="kakaomap-container">
      <input
        type="text"
        value={keyword}
        placeholder="장소명을 입력하세요"
        onChange={(e) => setKeyword(e.target.value)}
        onKeyDown={(e) => e.key === "Enter" && handleSearch()}
        className="kakaomap-input"
      />
      <button onClick={handleSearch} className="kakaomap-button">
        검색
      </button>

      {showList && places.length > 0 && (
        <div className="kakaomap-dropdown">
          <ul className="kakaomap-list">
            {places.map((place) => (
              <li
                key={place.id}
                onClick={() => handleSelect(place)}
                className="kakaomap-list-item"
              >
                <span className="kakaomap-place-name">{place.place_name}</span>
                <br />
                <span className="kakaomap-address">{place.address_name}</span>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}

export default MapSearch;
