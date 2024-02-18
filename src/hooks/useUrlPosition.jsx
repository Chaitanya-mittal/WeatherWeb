import { useSearchParams } from "react-router-dom";
function useUrlPosition() {
  const [searchParams, setSearchParams] = useSearchParams();
  const lat = Number(searchParams.get("lat")) % 90;
  const lng = Number(searchParams.get("lng")) % 180;
  return { lat, lng };
}

export default useUrlPosition;
