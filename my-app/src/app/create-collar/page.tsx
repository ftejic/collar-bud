import ProductCategories from "@/components/ProductCategories/ProductCategories";

function CreateCollar() {
  return (
    <section className="container px-0 mx-auto mt-[68px] md:mt-[124px] lg:mt-[152px] py-10 md:py-16">
      <h2 className="px-[2rem] font-unbounded">Discover products tailored to your needs by selecting a category.</h2>
      <ProductCategories />
    </section>
  );
}

export default CreateCollar;
