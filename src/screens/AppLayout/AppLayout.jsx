import Map from "../../components/Map/Map";
import Sidebar from "../../components/Sidebar/Sidebar";
import useGeolocation from "../../hooks/useGeolocation";
import styles from "./AppLayout.module.css";
function AppLayout() {
  const { getLocation } = useGeolocation();
  return (
    <section className={styles.appLayout}>
      <Sidebar />
      <Map />
    </section>
  );
}

export default AppLayout;
