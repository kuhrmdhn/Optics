import TopHeader from "@/components/top-header/TopHeader";
import Header from "@/components/header/Header";
import HomeSection from "../sections/Home";

export default function Home() {
  return (
    <>
      <section className="fixed top-0 z-[999] w-full">
        <TopHeader />
        <Header />
      </section>
      <HomeSection />
    </>
  );
}
