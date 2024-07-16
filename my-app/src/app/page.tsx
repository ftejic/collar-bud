import Desc from "@/components/Desc";
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
    </>
  );
}
