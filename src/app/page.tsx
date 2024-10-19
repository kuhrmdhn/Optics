import TopHeader from "@/components/top-header/TopHeader";
import Header from "@/components/header/Header";
import HomeSection from "@/sections/Home";
import About from "@/sections/About";
import Products from "@/sections/Products";
import Services from "@/sections/Services";

export default function Home() {
  return (
    <>
      <TopHeader />
      <Header />
      <HomeSection />
      <About />
      <Products />
      <Services/>
    </>
  );
}
