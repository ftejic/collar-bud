import Product from "@/components/Product/Product";

const products = [
  { name: "Cat collar 1", price: 35, images: ["/images/cat1.jpeg"] },
  { name: "Cat collar 2", price: 40, images: ["/images/cat1.jpeg"] },
  { name: "Cat collar 3", price: 40, images: ["/images/cat1.jpeg"] },
];

function ForCats() {
  return (
    <section className="container mx-auto mt-[68px] md:mt-[124px] lg:mt-[152px] py-10 md:py-16">
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-x-5 gap-y-10 lg:gap-10">
        {products.map((product, index) => (
          <Product
            key={index}
            name={product.name}
            price={product.price}
            images={product.images}
          />
        ))}
      </div>
    </section>
  );
}

export default ForCats;
