export type MapPin = {
  id: string;
  name: string;
  position: { lat: number; lng: number };
  list: string;
};

type MapListItemProps = {
  pin: MapPin;
  onRemove: (id: string) => void;
  onMoveList: (id: string, newList: string) => void;
  availableLists: string[];
};

function MapListItem({ pin, onRemove, onMoveList, availableLists }: MapListItemProps) {
  return (
    <div className="kakaomap-maplist-item">
      <span>{pin.name}</span>

      <button onClick={() => onRemove(pin.id)}>삭제</button>

      <select
        value={pin.list}
        onChange={(e) => onMoveList(pin.id, e.target.value)}
        className="kakaomap-maplist-item-dropdown"
      >
        {availableLists.map(list => (
          <option key={list} value={list}>{list}</option>
        ))}
      </select>
    </div>
  );
}

export default MapListItem;
