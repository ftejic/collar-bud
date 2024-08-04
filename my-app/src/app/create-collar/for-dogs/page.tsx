import Product from "@/components/Product/Product";

const products = [
  { name: "Dog collar 1", price: 35, images: ["/images/dog1.png", "/images/dog1.png"] },
  { name: "Dog collar 2", price: 40, images: ["/images/dog1.png", "/images/dog1.png", "/images/dog1.png"] },
  { name: "Dog collar 3", price: 40, images: ["/images/dog1.png"] },
  { name: "Dog collar 4", price: 50, images: ["/images/dog1.png"] },
  { name: "Dog collar 5", price: 50, images: ["/images/dog1.png"] },
];

function ForDogs() {
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

export default ForDogs;
