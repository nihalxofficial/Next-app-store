import Image from "next/image";
import Banner from "./components/Banner";
import Stats from "./components/Stats";
import TrendingApps from "./components/TrendingApps";

export default function Home() {
  return (
    <>
      <Banner/>
      <Stats/>
      <TrendingApps/>
    </>
  );
}
