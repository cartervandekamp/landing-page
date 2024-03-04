import Image from "next/image";
import styles from "../styles/Home.module.css";
import Header from "@/components/Header";
import PriceCards from "@/components/PriceCards";
import Banner from "@/components/Banner";
import Newsletter from "@/components/Newsletter";
import Footer from "@/components/Footer";

import Hero from "@/components/Hero";

export default function Home() {
  return (
    <main
      className={`flex min-h-screen flex-col items-center justify-between p-24 `}
    >
      <div className={styles.mainContent}>
<Header/>
<Hero />
<PriceCards />
<Banner />
<Newsletter />
<Footer />
</div>
    </main>
  );
}
