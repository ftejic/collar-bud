import Desc from "@/components/Desc/Desc";
import Faq from "@/components/Faq/Faq";
import Gallery from "@/components/Gallery/Gallery";
import Hero from "@/components/Hero/Hero";
import ProductCategories from "@/components/ProductCategories/ProductCategories";

export default function Home() {
  return (
    <>
      <div className="imageBg">
        <Hero />
        <ProductCategories />
      </div>
      <Desc />
      <Gallery />
      <div className="textureBg">
        <Faq />
      </div>
    </>
  );
}
